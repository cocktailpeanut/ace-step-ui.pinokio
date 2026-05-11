let currentLang = localStorage.getItem("lang") || "en";
let currentCategory = "all";
let searchQuery = "";
let currentGuideId = null;
let initialLoad = true;
let skipDetailScroll = false;

function t(key) {
  return translations[currentLang]?.[key] || translations.en[key] || key;
}

function getCatName(catId) {
  if (catId === "all") return t("allGuides");
  const key = "catName_" + catId;
  return t(key) !== key ? t(key) : (categoryInfo[catId]?.name || catId);
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
  document.querySelector('meta[name="description"]').content = t("metaDescription");
  translatePage();
  renderGuideCats();
  if (currentGuideId) {
    skipDetailScroll = true;
    renderGuideDetail(currentGuideId);
  } else {
    renderGuideGrid();
  }
  renderAbout();
  updateAudioLabel();
  renderMySetup();
  updateLangSwitcher();
}

function translatePage() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    el.innerHTML = t(key);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
}

function updateLangSwitcher() {
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });
  const keys = ["navGuides", "navSetup", "navAbout"];
  document.querySelectorAll("nav .nav-link").forEach((btn, i) => {
    if (keys[i]) btn.textContent = t(keys[i]);
  });
  document.querySelectorAll("#mobileNav .nav-link").forEach((btn, i) => {
    if (keys[i]) btn.textContent = t(keys[i]);
  });
}

function initLangSwitcher() {
  const container = document.getElementById("langSwitcher");
  if (!container) return;
  container.innerHTML = Object.entries(languageNames).map(([code, name]) =>
    `<button class="lang-btn${code === currentLang ? " active" : ""}" data-lang="${code}">${name}</button>`
  ).join("");
  container.addEventListener("click", e => {
    const btn = e.target.closest(".lang-btn");
    if (btn) setLang(btn.dataset.lang);
  });
}

function renderGuideCats() {
  const container = document.getElementById("guideCats");
  if (!container) return;
  const catMap = {};
  guides.forEach(g => { catMap[g.category] = (catMap[g.category] || 0) + 1; });
  const cats = [
    { id: "all", name: t("allGuides"), icon: '<i class="fa-solid fa-music"></i>', count: guides.length },
    ...Object.entries(categoryInfo).filter(([id]) => catMap[id]).map(([id, info]) => {
      return { id, name: getCatName(id), icon: info.icon, count: catMap[id] };
    })
  ];
  container.innerHTML = cats.map(c =>
    `<div class="cat-card${currentCategory === c.id ? " active" : ""}" data-cat="${c.id}">
      <span class="icon">${c.icon}</span>
      <div class="name">${c.name}</div>
      <div class="count">${c.count} ${t("guides")}</div>
    </div>`
  ).join("");
  container.addEventListener("click", e => {
    const card = e.target.closest(".cat-card");
    if (!card) return;
    currentCategory = card.dataset.cat;
    document.querySelectorAll(".cat-card").forEach(c => c.classList.remove("active"));
    card.classList.add("active");
    renderGuideGrid();
    if (window.innerWidth <= 768) {
      requestAnimationFrame(() => {
        const el = document.querySelector(".sort-bar") || document.getElementById("guides");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      });
    }
  });
}

function getFilteredGuides() {
  let filtered = [...guides];
  if (currentCategory !== "all") {
    filtered = filtered.filter(g => g.category === currentCategory);
  }
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(g =>
      g.title.toLowerCase().includes(q) ||
      (g.title_es || "").toLowerCase().includes(q) ||
      g.intro.toLowerCase().includes(q) ||
      (g.intro_es || "").toLowerCase().includes(q) ||
      g.sections.some(s => s.heading.toLowerCase().includes(q) || s.content.toLowerCase().includes(q) || (s.heading_es || "").toLowerCase().includes(q) || (s.content_es || "").toLowerCase().includes(q)) ||
      (getCatName(g.category) || g.category).toLowerCase().includes(q)
    );
  }
  return filtered;
}

function getResolvedStores(product) {
  const s = {};
  Object.entries(product.stores).forEach(([key, url]) => {
    if (key === 'gear4music' && url === 'https://www.gear4music.com/search') {
      s[key] = `https://www.gear4music.com/search?q=${encodeURIComponent(product.title)}`;
    } else {
      s[key] = url;
    }
  });
  return s;
}

function formatPrice(price) {
  if (price >= 1000) return `$${(price / 1000).toFixed(1)}k`;
  return `$${price}`;
}

function getBadgeClass(key) {
  const map = { bestSeller: "bestSeller", legend: "legend", premium: "premium", topQuality: "topQuality", recommended: "recommended" };
  return map[key] || "bestSeller";
}

function renderProductCard(id) {
  const p = products.find(x => x.id === id);
  if (!p) return "";
  const title = currentLang === 'es' && p.title_es ? p.title_es : p.title;
  const desc = currentLang === 'es' && p.desc_es ? p.desc_es : p.desc;
  const stars = "★".repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? "½" : "");
  const stores = Object.entries(getResolvedStores(p)).map(([key, url]) =>
    `<a href="${url}" target="_blank" rel="noopener noreferrer sponsored" class="chip-store" style="background:${storeColors[key] || '#555'}"><span class="icon">${storeIcons[key] || ''}</span> ${storeNames[key] || key}</a>`
  ).join("");
  return `
    <div class="guide-product-card">
      <div class="guide-product-card-img"><img src="${p.img}" alt="${title}" loading="lazy"></div>
      <div class="guide-product-card-body">
        <div class="guide-product-card-title">${title}</div>
        <div class="guide-product-card-rating">${stars} <span>${p.reviews.toLocaleString()}</span></div>
        <div class="guide-product-card-price">${formatPrice(p.price)} <small>USD</small></div>
        <div class="guide-product-card-desc">${desc}</div>
        <div class="guide-product-card-stores">${stores}</div>
      </div>
    </div>
  `;
}

function renderGuideGrid() {
  currentGuideId = null;
  const btn = document.getElementById("backToGuidesBtn");
  if (btn) btn.style.display = "";
  const grid = document.getElementById("guideGrid");
  const count = document.getElementById("guideCount");
  const container = document.getElementById("guideContainer");
  if (!grid) return;
  grid.style.display = "";
  container.classList.remove("guide-detail-open");
  document.getElementById("guideCats").style.display = "";
  const sortBar = document.querySelector(".sort-bar");
  if (sortBar) sortBar.style.display = "";
  const sectionHeader = document.querySelector("#guides .section-header");
  if (sectionHeader) sectionHeader.style.display = "";
  const filtered = getFilteredGuides();
  count.textContent = `${filtered.length} ${t("guides")}`;
  if (filtered.length === 0) {
    grid.innerHTML = `<div class="no-results"><h3><i class="fa-solid fa-music"></i> ${t("noGuides")}</h3><p>${t("noGuidesDesc")}</p></div>`;
    return;
  }
  grid.innerHTML = filtered.map(g => {
    const catName = getCatName(g.category);
    const badgeText = g.badge ? t("badge_" + g.badge) : null;
    const badgeClass = g.badge ? getBadgeClass(g.badge) : "";
    return `
      <div class="guide-card" data-guide="${g.id}">
        <div class="guide-card-img">
          <img src="${g.image}" alt="${currentLang === 'es' && g.title_es ? g.title_es : g.title}" loading="lazy">
          <span class="guide-card-cat">${catName}</span>
          ${badgeText ? `<span class="guide-card-badge ${badgeClass}">${badgeText}</span>` : ""}
        </div>
        <div class="guide-card-body">
          <h3 class="guide-card-title">${currentLang === 'es' && g.title_es ? g.title_es : g.title}</h3>
          <p class="guide-card-intro">${(() => { const i = currentLang === 'es' && g.intro_es ? g.intro_es : g.intro; return i.length > 150 ? i.slice(0, 150) + '…' : i; })()}</p>
          <div class="guide-card-footer">
            <span class="guide-card-meta"><i class="fa-regular fa-clock"></i> 6 ${t("minRead")}</span>
            <span class="guide-card-btn">${t("readGuide")}</span>
          </div>
        </div>
      </div>
    `;
  }).join("");
  grid.querySelectorAll(".guide-card").forEach(card => {
    card.addEventListener("click", () => {
      const id = card.dataset.guide;
      history.pushState({}, '', '/?g=' + id);
      renderGuideDetail(id);
    });
  });
}

function renderGuideDetail(id) {
  const guide = guides.find(g => g.id === id);
  if (!guide) return;
  currentGuideId = guide.id;
  const btn = document.getElementById("backToGuidesBtn");
  if (btn) btn.style.display = "none";
  const grid = document.getElementById("guideGrid");
  grid.style.display = "block";
  const container = document.getElementById("guideContainer");
  container.classList.add("guide-detail-open");
  document.getElementById("guideCats").style.display = "none";
  const sortBar = document.querySelector(".sort-bar");
  if (sortBar) sortBar.style.display = "none";
  const sectionHeader = document.querySelector("#guides .section-header");
  if (sectionHeader) sectionHeader.style.display = "none";

  const catName = getCatName(guide.category);
  const badgeText = guide.badge ? t("badge_" + guide.badge) : null;
  const badgeClass = guide.badge ? getBadgeClass(guide.badge) : "";

  let sectionsHtml = guide.sections.map(s => {
    const heading = currentLang === 'es' && s.heading_es ? s.heading_es : s.heading;
    const content = currentLang === 'es' && s.content_es ? s.content_es : s.content;
    return `
      <div class="guide-section">
        <h3 class="guide-section-heading">${heading}</h3>
        <div class="guide-section-content">${content}</div>
      </div>
    `;
  }).join("");

  const allProductIds = [...new Set(guide.sections.flatMap(s => s.products))];
  const allProductsHtml = allProductIds.map(id => renderProductCard(id)).join("");


  grid.innerHTML = `
    <div class="guide-detail">
      <div class="guide-back-row">
        <button class="guide-back-btn" id="guideBackBtn1"><i class="fa-solid fa-arrow-left"></i> ${t("backToGuides")}</button>
      </div>
      <div class="guide-detail-header">
        <h1 class="guide-detail-title">${currentLang === 'es' && guide.title_es ? guide.title_es : guide.title}</h1>
      </div>
      <div class="guide-detail-img"><img src="${guide.image}" alt="${currentLang === 'es' && guide.title_es ? guide.title_es : guide.title}"></div>
      <div class="guide-detail-intro"><p>${currentLang === 'es' && guide.intro_es ? guide.intro_es : guide.intro}</p></div>
      <div class="guide-detail-sections">${sectionsHtml}</div>
      <div class="guide-verdict">
        <span class="verdict-label">${t("verdict")}</span>
        <span class="verdict-text">${currentLang === 'es' && guide.verdict_es ? guide.verdict_es : guide.verdict}</span>
      </div>
      ${allProductsHtml ? `<div class="guide-products-grid"><h3 class="guide-products-title">${t("productsInGuide")}</h3><div class="guide-products-cards">${allProductsHtml}</div></div>` : ""}
      <div class="guide-conclusion">
        <h3>${t("finalThoughts")}</h3>
        <p>${currentLang === 'es' && guide.conclusion_es ? guide.conclusion_es : guide.conclusion}</p>
      </div>
      <button class="guide-back-btn" id="guideBackBtn2"><i class="fa-solid fa-arrow-left"></i> ${t("backToGuides")}</button>
    </div>
  `;
  const btn1 = document.getElementById("guideBackBtn1");
  if (btn1) btn1.addEventListener("click", () => {
    history.pushState({}, '', '/');
    renderGuideGrid();
    const el = document.getElementById("guides");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  });
  const btn2 = document.getElementById("guideBackBtn2");
  if (btn2) btn2.addEventListener("click", () => {
    history.pushState({}, '', '/');
    renderGuideGrid();
    const el = document.getElementById("guides");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  });
  if (!initialLoad && !skipDetailScroll) {
    setTimeout(() => {
      const el = document.getElementById("guideGrid");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }
  skipDetailScroll = false;
}

function renderAudioMini() {
  const el = document.getElementById("audioMini");
  if (el) el.innerHTML = '<div class="audio-mini-inner"><span class="audio-mini-player"><audio controls preload="auto"><source src="audio/solo-tres.mp3" type="audio/mpeg"></audio></span><span class="audio-eq"><i></i><i></i><i></i><i></i></span><span class="audio-mini-label">' + t("audioLabel") + '</span></div>';
  const elm = document.getElementById("audioMiniMobile");
  if (elm) elm.innerHTML = '<div class="audio-mini-inner"><span class="audio-mini-player"><audio controls preload="auto"><source src="audio/solo-tres.mp3" type="audio/mpeg"></audio></span><span class="audio-eq"><i></i><i></i><i></i><i></i></span><span class="audio-mini-label">' + t("audioLabel") + '</span></div>';
  setTimeout(() => {
    document.querySelectorAll('#audioMini audio, #audioMiniMobile audio').forEach(audio => {
      audio.addEventListener('play', () => audio.closest('.audio-mini-inner').classList.add('playing'));
      audio.addEventListener('pause', () => audio.closest('.audio-mini-inner').classList.remove('playing'));
      audio.addEventListener('ended', () => audio.closest('.audio-mini-inner').classList.remove('playing'));
    });
  }, 100);
}

function updateAudioLabel() {
  document.querySelectorAll('.audio-mini-label').forEach(el => {
    el.textContent = t("audioLabel");
  });
}

function renderMySetup() {
  const container = document.getElementById("setupGrid");
  if (!container) return;
  const gear = [
    { icon: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="5" width="22" height="14" rx="2"/><rect x="4" y="9" width="3" height="6" rx="0.8" fill="currentColor" opacity="0.6"/><circle cx="14" cy="12" r="3"/><circle cx="14" cy="12" r="1.2" fill="currentColor"/><rect x="19" y="10" width="1.5" height="4" rx="0.5" fill="currentColor" opacity="0.6"/></svg>', title: "Focusrite Scarlett 2i2 4th Gen", descKey: "setupItem1Desc" },
    { icon: '<i class="fa-solid fa-headphones"></i>', title: "Beyerdynamic DT 770 Pro", descKey: "setupItem2Desc" },
    { icon: '<i class="fa-solid fa-microphone"></i>', title: "Rode NT1-A", descKey: "setupItem3Desc" },
    { icon: '<i class="fa-solid fa-keyboard"></i>', title: "Akai MPK249", descKey: "setupItem4Desc" },
    { icon: '<i class="fa-solid fa-volume-high"></i>', title: "Yamaha HS8", descKey: "setupItem5Desc" }
  ];
  container.innerHTML = gear.map(g => `
    <div class="setup-item">
      <span class="setup-item-icon">${g.icon}</span>
      <div class="setup-item-title">${g.title}</div>
      <div class="setup-item-desc">${t(g.descKey)}</div>
    </div>
  `).join("");
}

function renderAbout() {
  const container = document.getElementById("aboutContent");
  if (!container) return;
  container.innerHTML = `
    <div class="about-photo-col">
      <div class="about-photo-wrapper">
        <img src="img/me.jpg" alt="Top Musician Gear — Founder" onerror="this.parentElement.innerHTML='<div style=\\'display:flex;align-items:center;justify-content:center;height:100%;font-size:64px;color:var(--accent);\\'>🎵</div>'">
      </div>
      <a href="mailto:danielcarnago@gmail.com" class="about-email-link"><i class="fa-solid fa-envelope"></i> danielcarnago@gmail.com</a>
    </div>
    <div class="about-content">
      <h2>${t("aboutTitle")}<span>${t("aboutName")}</span></h2>
      <div class="about-subtitle">${t("aboutSub")}</div>
      <p>${t("aboutP1")}</p>
      <p>${t("aboutP2")}</p>
      <p>${t("aboutP3")}</p>
      <div class="about-credits">
        <span class="credit-badge"><i class="fa-solid fa-film"></i> ${t("credit_jamesbond")}</span>
        <span class="credit-badge"><i class="fa-solid fa-globe"></i> ${t("credit_festivals")}</span>
        <span class="credit-badge"><i class="fa-solid fa-landmark"></i> ${t("credit_abbeyroad")}</span>
        <span class="credit-badge"><i class="fa-solid fa-film"></i> ${t("credit_universal")}</span>
        <span class="credit-badge"><i class="fa-solid fa-microphone"></i> ${t("credit_topaz")}</span>
        <span class="credit-badge"><i class="fa-solid fa-compact-disc"></i> ${t("credit_warner")}</span>
        <span class="credit-badge"><i class="fa-solid fa-star"></i> ${t("credit_columbia")}</span>
      </div>
    </div>
  `;
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.innerHTML = '<i class="fa-solid fa-circle-check" style="margin-right:6px;"></i> ' + msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

function handleNavClick(target) {
  document.querySelectorAll(".nav-link").forEach(n => n.classList.remove("active"));
  const navBtn = document.querySelector(`.nav-link[data-nav="${target}"]`);
  if (navBtn) navBtn.classList.add("active");
  document.getElementById("mobileNav").classList.remove("open");

  if (target === "guides") {
    currentGuideId = null;
    renderGuideGrid();
    setTimeout(() => {
      const el = document.querySelector("#guides .section-header") || document.getElementById("guides");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 200);
  } else if (target === "mysetup") {
    setTimeout(() => {
      const el = document.getElementById("mysetup");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 200);
  } else if (target === "about") {
    setTimeout(() => {
      const el = document.getElementById("about");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 200);
  }
}

function initVideoIntro() {
  const video = document.getElementById("aboutVideo");
  const overlay = document.getElementById("videoIntroOverlay");
  if (!video || !overlay) return;
  video.volume = 0;

  video.addEventListener("play", () => {
    fadeVideoAudio(video, 1, 1500);
  });

  video.addEventListener("timeupdate", () => {
    const remaining = video.duration - video.currentTime;
    if (remaining < 3 && remaining > 0 && !video.paused && video.volume > 0.05) {
      fadeVideoAudio(video, 0, 1500);
    }
    if (remaining < 3 && remaining > 0 && !video.paused) {
      overlay.classList.add("outro");
      requestAnimationFrame(() => {
        overlay.classList.add("show");
      });
    }
    if (remaining >= 3 && overlay.classList.contains("outro")) {
      overlay.classList.remove("outro", "show");
    }
  });

  video.addEventListener("ended", () => {
    overlay.classList.remove("outro", "show");
    video.volume = 0;
  });

  video.addEventListener("seeked", () => {
    if (video.currentTime < video.duration - 3) {
      video.volume = 1;
    }
  });
}

function fadeVideoAudio(video, target, duration) {
  const start = video.volume;
  const startTime = performance.now();
  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    video.volume = start + (target - start) * progress;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.lang = currentLang;
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  initLangSwitcher();
  renderGuideCats();
  const q = new URLSearchParams(window.location.search).get('g');
  if (q && guides.find(g => g.id === q)) {
    history.replaceState({}, '', '/?g=' + q);
    renderGuideDetail(q);
  } else if (location.hash) {
    const h = location.hash.slice(1);
    const guide = guides.find(g => g.id === h);
    if (guide) {
      history.replaceState({}, '', '/?g=' + h);
      renderGuideDetail(h);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      renderGuideGrid();
    }
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderGuideGrid();
  }
  renderAudioMini();
  renderMySetup();
  renderAbout();
  initVideoIntro();
  translatePage();

  document.getElementById("searchInput").addEventListener("input", e => {
    searchQuery = e.target.value;
    renderGuideGrid();
  });

  document.querySelectorAll(".nav-link[data-nav]").forEach(btn => {
    btn.addEventListener("click", () => handleNavClick(btn.dataset.nav));
  });

  document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("mobileNav").classList.toggle("open");
  });

  document.getElementById("disclosureLink").addEventListener("click", e => {
    e.preventDefault();
    document.getElementById("disclosureModal").style.display = "flex";
  });
  document.getElementById("disclosureModal").addEventListener("click", e => {
    if (e.target === e.currentTarget) e.target.style.display = "none";
  });

  window.filterCategory = function(cat) {
    currentCategory = cat;
    document.querySelectorAll(".cat-card").forEach(c => c.classList.toggle("active", c.dataset.cat === cat));
    renderGuideGrid();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const el = document.getElementById("guides");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  };

  window.addEventListener("popstate", () => {
    const q = new URLSearchParams(window.location.search).get('g');
    if (q && guides.find(g => g.id === q)) {
      renderGuideDetail(q);
    } else {
      renderGuideGrid();
      const el = document.getElementById("guides");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  });

  document.addEventListener('play', e => {
    if (e.target.tagName === 'VIDEO') {
      document.querySelectorAll('audio').forEach(a => { a.pause(); });
    }
    if (e.target.tagName === 'AUDIO') {
      document.querySelectorAll('video:not(.bg-video)').forEach(v => { v.pause(); });
    }
  }, true);

  document.addEventListener('keydown', e => {
    if (e.code === 'Space' && document.activeElement === document.body) {
      const video = document.getElementById('aboutVideo');
      if (video && (video.paused ? video.currentTime > 0 : true)) {
        e.preventDefault();
        video.paused ? video.play() : video.pause();
      }
    }
  });

  initialLoad = false;
});
