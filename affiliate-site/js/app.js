let currentLang = localStorage.getItem("lang") || "en";
let currentCategory = "all";
let searchQuery = "";
let currentGuideId = null;

function t(key) {
  return translations[currentLang]?.[key] || translations.en[key] || key;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
  translatePage();
  renderGuideCats();
  if (currentGuideId) {
    renderGuideDetail(currentGuideId);
  } else {
    renderGuideGrid();
  }
  renderAbout();
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
  const discBar = document.querySelector(".disclosure");
  if (discBar) {
    const discText = discBar.childNodes[0];
    if (discText) discText.textContent = t("disclosureBar") + " ";
  }
}

function updateLangSwitcher() {
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });
  document.querySelectorAll("#mobileNav .nav-link, nav .nav-link").forEach((btn, i) => {
    const keys = ["navGuides", "navSetup", "navAbout"];
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
      return { id, name: info.name, icon: info.icon, count: catMap[id] };
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
      g.intro.toLowerCase().includes(q) ||
      g.sections.some(s => s.heading.toLowerCase().includes(q) || s.content.toLowerCase().includes(q)) ||
      (categoryInfo[g.category]?.name || g.category).toLowerCase().includes(q)
    );
  }
  return filtered;
}

function getResolvedStores(product) {
  const s = {};
  Object.entries(product.stores).forEach(([key, url]) => {
    if (key === 'gear4music' && url === 'https://www.gear4music.com/search') {
      s[key] = `https://www.gear4music.com/search?q=${encodeURIComponent(product.title)}`;
    } else if (key === 'pluginboutique' && url.includes('search?q=serum')) {
      s[key] = 'https://www.pluginboutique.com/product/2-Effects/25-Wavetable/15536-Serum-2';
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

function renderProductChip(id) {
  const p = products.find(x => x.id === id);
  if (!p) return "";
  const stores = Object.entries(getResolvedStores(p)).slice(0, 2).map(([key, url]) =>
    `<a href="${url}" target="_blank" rel="noopener sponsored" class="chip-store" style="background:${storeColors[key] || '#555'}">${storeNames[key] || key}</a>`
  ).join("");
  return `
    <div class="guide-product-chip">
      <div class="chip-img"><img src="${p.img}" alt="${p.title}" loading="lazy"></div>
      <div class="chip-body">
        <div class="chip-title">${p.title}</div>
        <div class="chip-price">${formatPrice(p.price)} <small>USD</small></div>
        <div class="chip-stores">${stores}</div>
      </div>
    </div>
  `;
}

function renderGuideGrid() {
  currentGuideId = null;
  const grid = document.getElementById("guideGrid");
  const count = document.getElementById("guideCount");
  const container = document.getElementById("guideContainer");
  if (!grid) return;
  container.classList.remove("guide-detail-open");
  const filtered = getFilteredGuides();
  count.textContent = `${filtered.length} ${t("guides")}`;
  if (filtered.length === 0) {
    grid.innerHTML = `<div class="no-results"><h3><i class="fa-solid fa-music"></i> ${t("noGuides")}</h3><p>${t("noGuidesDesc")}</p></div>`;
    return;
  }
  grid.innerHTML = filtered.map(g => {
    const catName = categoryInfo[g.category]?.name || g.category;
    const badgeText = g.badge ? g.badge.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase()).trim() : null;
    const badgeClass = g.badge ? getBadgeClass(g.badge) : "";
    return `
      <div class="guide-card" data-guide="${g.id}">
        <div class="guide-card-img">
          <img src="${g.image}" alt="${g.title}" loading="lazy">
          <span class="guide-card-cat">${catName}</span>
          ${badgeText ? `<span class="guide-card-badge ${badgeClass}">${badgeText}</span>` : ""}
        </div>
        <div class="guide-card-body">
          <h3 class="guide-card-title">${g.title}</h3>
          <p class="guide-card-intro">${g.intro.length > 150 ? g.intro.slice(0, 150) + '…' : g.intro}</p>
          <div class="guide-card-footer">
            <span class="guide-card-meta"><i class="fa-regular fa-clock"></i> 6 min read</span>
            <span class="guide-card-btn">${t("readGuide")}</span>
          </div>
        </div>
      </div>
    `;
  }).join("");
  grid.querySelectorAll(".guide-card").forEach(card => {
    card.addEventListener("click", () => renderGuideDetail(card.dataset.guide));
  });
}

function renderGuideDetail(id) {
  const guide = guides.find(g => g.id === id);
  if (!guide) return;
  currentGuideId = guide.id;
  const grid = document.getElementById("guideGrid");
  const container = document.getElementById("guideContainer");
  container.classList.add("guide-detail-open");

  const catName = categoryInfo[guide.category]?.name || guide.category;
  const badgeText = guide.badge ? guide.badge.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase()).trim() : null;
  const badgeClass = guide.badge ? getBadgeClass(guide.badge) : "";

  let sectionsHtml = guide.sections.map(s => {
    const productChips = s.products.map(id => renderProductChip(id)).join("");
    return `
      <div class="guide-section">
        <h3 class="guide-section-heading">${s.heading}</h3>
        <div class="guide-section-content">${s.content}</div>
        ${productChips ? `<div class="guide-section-products">${productChips}</div>` : ""}
      </div>
    `;
  }).join("");

  let featuredHtml = guide.featuredProducts.map(id => {
    const p = products.find(x => x.id === id);
    if (!p) return "";
    const stars = "★".repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? "½" : "");
    const stores = Object.entries(getResolvedStores(p)).map(([key, url]) =>
      `<a href="${url}" target="_blank" rel="noopener sponsored" class="store-btn" style="background:${storeColors[key] || '#555'}"><span class="icon">${storeIcons[key] || ''}</span> ${storeNames[key] || key}</a>`
    ).join("");
    return `
      <div class="guide-featured-card">
        <div class="guide-featured-img"><img src="${p.img}" alt="${p.title}" loading="lazy"></div>
        <div class="guide-featured-body">
          <div class="guide-featured-title">${p.title}</div>
          <div class="guide-featured-price">${formatPrice(p.price)} <small>USD</small></div>
          <div class="guide-featured-rating">${stars} <span>${p.reviews.toLocaleString()}</span></div>
          <div class="guide-featured-desc">${p.desc}</div>
          <div class="guide-featured-stores">${stores}</div>
        </div>
      </div>
    `;
  }).join("");

  grid.innerHTML = `
    <div class="guide-detail">
      <button class="guide-back-btn" id="guideBackBtn"><i class="fa-solid fa-arrow-left"></i> ${t("backToGuides")}</button>
      <div class="guide-detail-header">
        <div class="guide-detail-meta">
          <span class="guide-card-cat">${catName}</span>
          ${badgeText ? `<span class="guide-card-badge ${badgeClass}">${badgeText}</span>` : ""}
        </div>
        <h1 class="guide-detail-title">${guide.title}</h1>
        <div class="guide-detail-author">${t("guideAuthors")}</div>
      </div>
      <div class="guide-detail-img"><img src="${guide.image}" alt="${guide.title}"></div>
      <div class="guide-detail-intro"><p>${guide.intro}</p></div>
      <div class="guide-detail-sections">${sectionsHtml}</div>
      <div class="guide-verdict">
        <span class="verdict-label">${t("verdict")}</span>
        <span class="verdict-text">${guide.verdict}</span>
      </div>
      ${featuredHtml ? `<div class="guide-featured"><h3 class="guide-featured-label">${t("relatedGear")}</h3><div class="guide-featured-grid">${featuredHtml}</div></div>` : ""}
      <div class="guide-conclusion">
        <h3>Final Thoughts</h3>
        <p>${guide.conclusion}</p>
      </div>
    </div>
  `;
  document.getElementById("guideBackBtn").addEventListener("click", () => {
    renderGuideGrid();
    document.getElementById("guides").scrollIntoView({ behavior: "smooth" });
  });
}

function renderAudioDemos() {
  const container = document.getElementById("audioGrid");
  if (!container) return;
  const demos = [
    { title: "Vocal Recording — Shure SM7B", desc: "Raw vocal take through UA Apollo Twin X", file: "", tag: "Microphones" },
    { title: "Guitar DI — Fender Stratocaster", desc: "Direct input through SSL 2+", file: "", tag: "Guitars" },
    { title: "Drum Loop — Roland TR-8S", desc: "Live programmed beat with processing", file: "", tag: "Percussion" },
    { title: "Synth Patch — Serum", desc: "Custom wavetable sound design", file: "", tag: "Plugins" }
  ];
  container.innerHTML = demos.map(d => `
    <div class="audio-card">
      <div class="audio-card-title">${d.title}</div>
      <div class="audio-card-desc">${d.desc}</div>
      <div class="audio-player-wrapper">
        <audio controls preload="none">
          <source src="${d.file || 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'}" type="audio/mpeg">
        </audio>
      </div>
      <span class="gear-tag">${d.tag}</span>
    </div>
  `).join("");
}

function renderMySetup() {
  const container = document.getElementById("setupGrid");
  if (!container) return;
  const gear = [
    { icon: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="5" width="22" height="14" rx="2"/><rect x="4" y="9" width="3" height="6" rx="0.8" fill="currentColor" opacity="0.6"/><circle cx="14" cy="12" r="3"/><circle cx="14" cy="12" r="1.2" fill="currentColor"/><rect x="19" y="10" width="1.5" height="4" rx="0.5" fill="currentColor" opacity="0.6"/></svg>', title: "Focusrite Scarlett 2i2 4th Gen", desc: "Latest gen audio interface" },
    { icon: '<i class="fa-solid fa-headphones"></i>', title: "Beyerdynamic DT 770 Pro", desc: "Professional monitoring headphones" },
    { icon: '<i class="fa-solid fa-microphone"></i>', title: "Rode NT1-A", desc: "Premium condenser for acoustic guitars" },
    { icon: '<i class="fa-solid fa-guitar"></i>', title: "Yamaha Cuban Tres Guitar", desc: "My signature sound" },
    { icon: '<i class="fa-solid fa-volume-high"></i>', title: "Yamaha HS8", desc: "Professional monitor speakers" }
  ];
  container.innerHTML = gear.map(g => `
    <div class="setup-item">
      <span class="setup-item-icon">${g.icon}</span>
      <div class="setup-item-title">${g.title}</div>
      <div class="setup-item-desc">${g.desc}</div>
    </div>
  `).join("");
}

function renderAbout() {
  const container = document.getElementById("aboutContent");
  if (!container) return;
  container.innerHTML = `
    <div class="about-photo-wrapper">
      <img src="img/me.jpg" alt="Top Musician Gear — Founder" onerror="this.parentElement.innerHTML='<div style=\\'display:flex;align-items:center;justify-content:center;height:100%;font-size:64px;color:var(--accent);\\'>🎵</div>'">
    </div>
    <div class="about-content">
      <h2>${t("aboutTitle")}<span>${t("aboutName")}</span></h2>
      <div class="about-subtitle">${t("aboutSub")}</div>
      <p>${t("aboutP1")}</p>
      <p>${t("aboutP2")}</p>
      <p>${t("aboutP3")}</p>
      <div class="about-credits">
        <span class="credit-badge"><i class="fa-solid fa-film"></i> ${t("credit1")}</span>
        <span class="credit-badge"><i class="fa-solid fa-building"></i> ${t("credit2")}</span>
        <span class="credit-badge"><i class="fa-solid fa-globe"></i> ${t("credit3")}</span>
        <span class="credit-badge"><i class="fa-solid fa-landmark"></i> ${t("credit4")}</span>
        <span class="credit-badge"><i class="fa-solid fa-film"></i> ${t("credit5")}</span>
        <span class="credit-badge"><i class="fa-solid fa-microphone"></i> ${t("credit6")}</span>
        <span class="credit-badge"><i class="fa-solid fa-compact-disc"></i> ${t("credit7")}</span>
        <span class="credit-badge"><i class="fa-solid fa-star"></i> ${t("credit8")}</span>
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
    document.getElementById("guides").scrollIntoView({ behavior: "smooth" });
  } else if (target === "mysetup") {
    document.getElementById("mysetup").scrollIntoView({ behavior: "smooth" });
  } else if (target === "about") {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.lang = currentLang;
  initLangSwitcher();
  renderGuideCats();
  renderGuideGrid();
  renderAudioDemos();
  renderMySetup();
  renderAbout();
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

  document.getElementById("newsletterForm").addEventListener("submit", e => {
    e.preventDefault();
    const input = document.getElementById("newsletterEmail");
    if (input.value) {
      showToast(t("newsletterThanks"));
      input.value = "";
    }
  });

  document.getElementById("footerDisclosure").addEventListener("click", e => {
    e.preventDefault();
    document.getElementById("disclosureModal").style.display = "flex";
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
    document.getElementById("guides").scrollIntoView({ behavior: "smooth" });
    renderGuideGrid();
  };
});
