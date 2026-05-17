const fs = require('fs');
const path = require('path');

// ===== LOAD DATA =====
const dir = path.join(__dirname, 'affiliate-site');

// Eval-import products.js and guides.js
eval(fs.readFileSync(path.join(dir, 'js', 'products.js'), 'utf8').replace(/^const /gm, 'var '));
eval(fs.readFileSync(path.join(dir, 'js', 'guides.js'), 'utf8').replace(/^const /gm, 'var '));

const storeColorsBuild = {
  thomann: "#3b82f6", pluginboutique: "#6366f1", gear4music: "#8b5cf6",
  sweetwater: "#6b7280", musikproduktiv: "#78716c", amazon: "#ff9900", reverb: "#d6562b"
};

function getResolvedStores(product) {
  const s = {};
  Object.entries(product.stores).forEach(([key, url]) => {
    if (key === 'gear4music' && url === 'https://www.gear4music.com/search') {
      s[key] = `https://www.gear4music.com/search?q=${encodeURIComponent(product.title)}`;
    } else if (key === 'musikproduktiv' && url === 'https://www.musik-produktiv.de/search') {
      s[key] = `https://www.musik-produktiv.de/`;
    } else {
      s[key] = url;
    }
  });
  if (product.category !== 'plugins' && product.category !== 'tres') {
    s.amazon = `https://www.amazon.com/s?k=${encodeURIComponent(product.title)}&tag=topmusicg-20`;
    if (product.stores.amazon && product.stores.amazon.startsWith('https://www.amazon.com/dp/')) {
      s.amazon = product.stores.amazon + '?tag=topmusicg-20';
    }
  }
  s.reverb = `https://reverb.com/marketplace?query=${encodeURIComponent(product.title)}`;
  return s;
}

function formatPrice(price) {
  if (price >= 1000) return `$${(price / 1000).toFixed(1)}k`;
  return `$${price}`;
}

function stars(rating) {
  return "★".repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? "½" : "");
}

function productCard(p, lang) {
  const title = lang === 'es' && p.title_es ? p.title_es : p.title;
  const desc = lang === 'es' && p.desc_es ? p.desc_es : p.desc;
  const stores = Object.entries(getResolvedStores(p)).map(([key, url]) => {
    let iconHtml = '';
    if (key === 'thomann') iconHtml = '<span class="icon"><img src="../img/thomann-icon.png" alt="Thomann" class="store-icon-img"></span>';
    else if (key === 'sweetwater') iconHtml = '<span class="icon"><img src="../img/sweetwater-icon.png" alt="Sweetwater" class="store-icon-img"></span>';
    else if (key === 'gear4music') iconHtml = '<span class="icon"><img src="../img/gear4music-icon.png" alt="Gear4Music" class="store-icon-img"></span>';
    else if (key === 'pluginboutique') iconHtml = '<span class="icon"><img src="../img/pluginboutique-icon.png" alt="Plugin Boutique" class="store-icon-img"></span>';
    else if (key === 'musikproduktiv') iconHtml = '<span class="icon"><img src="../img/musikproduktiv-icon.png" alt="Musik Produktiv" class="store-icon-img" style="width:28px"></span>';
    else if (key === 'amazon') iconHtml = '<span class="icon"><i class="fa-brands fa-amazon" style="font-size:15px;"></i></span>';
    else if (key === 'reverb') iconHtml = '<span class="icon"><span style="font-weight:900;font-size:14px;line-height:1;display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;background:#d6562b;color:#fff;border-radius:2px;vertical-align:middle;">R</span></span>';
    const name = key.charAt(0).toUpperCase() + key.slice(1);
    return `<a href="${url}" target="_blank" rel="noopener noreferrer sponsored" class="chip-store" style="background:${storeColorsBuild[key] || '#555'}">${iconHtml} ${name}</a>`;
  }).join("");
  return `<div class="guide-product-card">
    <div class="guide-product-card-img"><img src="${p.img.startsWith('http') ? p.img : '../' + p.img}" alt="${title}" loading="lazy"></div>
    <div class="guide-product-card-body">
      <div class="guide-product-card-title">${title}</div>
      <div class="guide-product-card-rating">${stars(p.rating)} <span>${p.reviews.toLocaleString()}</span></div>
      <div class="guide-product-card-price">${formatPrice(p.price)} <small>USD</small></div>
      <div class="guide-product-card-desc">${desc}</div>
      <div class="guide-product-card-stores">${stores}</div>
    </div>
  </div>`;
}

function jsonLdScript(data) {
  return `<script type="application/ld+json">\n${JSON.stringify(data, null, 2)}\n</script>`;
}

function buildGuidePage(guide, lang) {
  const isEs = lang === 'es';
  const title = isEs && guide.title_es ? guide.title_es : guide.title;
  const intro = isEs && guide.intro_es ? guide.intro_es : guide.intro;
  const conclusion = isEs && guide.conclusion_es ? guide.conclusion_es : guide.conclusion;
  const verdict = isEs && guide.verdict_es ? guide.verdict_es : guide.verdict;
  const image = guide.image || '../img/og-image.svg';
  const fullImage = guide.image && guide.image.startsWith('http') ? guide.image : 'https://topmusiciangear.com/' + (guide.image || 'img/og-image.svg');
  const filename = isEs ? `${guide.id}_es.html` : `${guide.id}.html`;
  const canonical = `https://topmusiciangear.com/guides/${guide.id}.html`;
  const alternateEn = `https://topmusiciangear.com/guides/${guide.id}.html`;
  const alternateEs = `https://topmusiciangear.com/guides/${guide.id}_es.html`;

  const allProductIds = [...new Set(guide.sections.flatMap(s => s.products))];
  const productCards = allProductIds.map(pid => {
    const p = products.find(pr => pr.id === pid);
    return p ? productCard(p, lang) : '';
  }).join('');

  const sectionsHtml = guide.sections.map(s => {
    const h = isEs && s.heading_es ? s.heading_es : s.heading;
    const c = isEs && s.content_es ? s.content_es : s.content;
    const secProductIds = s.products || [];
    const secCards = secProductIds.map(pid => {
      const p = products.find(pr => pr.id === pid);
      return p ? productCard(p, lang) : '';
    }).join('');
    return `<div class="guide-section">
      <h2 class="guide-section-heading">${h}</h2>
      <div class="guide-section-content">${c}</div>
      ${secCards ? `<div class="guide-products-inline">${secCards}</div>` : ''}
    </div>`;
  }).join('');

  ogMeta = `  <meta property="og:type" content="article">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${intro.substring(0, 200).replace(/"/g, '&quot;')}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${fullImage}">
  <meta property="og:locale" content="${isEs ? 'es_ES' : 'en_US'}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${intro.substring(0, 200).replace(/"/g, '&quot;')}">
  <meta name="twitter:image" content="${fullImage}">`;

  // JSON-LD
  const ldArticle = {
    "@context": "https://schema.org", "@type": "Article",
    "headline": title,
    "description": intro.substring(0, 200),
    "author": { "@type": "Person", "name": "Daniel" },
    "publisher": { "@type": "Organization", "name": "TopMusicianGear", "url": "https://topmusiciangear.com" },
    "image": fullImage,
    "datePublished": "2026-01-15", "dateModified": "2026-05-15",
    "mainEntityOfPage": { "@type": "WebPage", "@id": canonical }
  };

  const items = [];
  guide.featuredProducts.forEach((pid, idx) => {
    const p = products.find(pr => pr.id === pid);
    if (p) {
      items.push({
        "@type": "ListItem", "position": idx + 1,
        "item": {
          "@type": "Product",
          "name": isEs && p.title_es ? p.title_es : p.title,
          "brand": { "@type": "Brand", "name": p.brand || "" },
          "mpn": p.mpn || "",
          "description": (isEs && p.desc_es ? p.desc_es : p.desc).substring(0, 200),
          "offers": { "@type": "Offer", "price": p.price, "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
          "aggregateRating": p.reviews > 0 ? { "@type": "AggregateRating", "ratingValue": p.rating, "reviewCount": p.reviews } : undefined,
          "image": p.img.startsWith('http') ? p.img : `https://topmusiciangear.com/${p.img}`
        }
      });
    }
  });

  return ko`<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | TopMusicianGear</title>
  <meta name="description" content="${intro.substring(0, 200).replace(/"/g, '&quot;')}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${canonical}">
  <link rel="alternate" hreflang="en" href="${alternateEn}">
  <link rel="alternate" hreflang="es" href="${alternateEs}">
${ogMeta}
  <link rel="stylesheet" href="../css/style.css?v=5">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  ${jsonLdScript(ldArticle)}
  ${items.length ? jsonLdScript({ "@context": "https://schema.org", "@type": "ItemList", "itemListElement": items }) : ''}
  ${jsonLdScript({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://topmusiciangear.com/" },
    { "@type": "ListItem", "position": 2, "name": title, "item": canonical }
  ]})}
  <style>
    .static-guide { max-width: 900px; margin: 0 auto; padding: 120px 24px 60px; }
    .static-guide h1 { font-size: 2rem; margin-bottom: 24px; color: var(--text); }
    .static-guide .guide-detail-img { margin-bottom: 32px; }
    .static-guide .guide-detail-img img { width: 100%; max-height: 400px; object-fit: cover; border-radius: var(--radius-lg); }
    .static-guide .guide-detail-intro { font-size: 1.1rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 40px; }
    .static-guide .guide-section { margin-bottom: 40px; }
    .static-guide .guide-section-heading { font-size: 1.4rem; margin-bottom: 16px; color: var(--accent); }
    .static-guide .guide-section-content { line-height: 1.7; color: var(--text-secondary); margin-bottom: 20px; }
    .static-guide .guide-verdict { background: var(--bg-card); padding: 20px 24px; border-radius: var(--radius); margin-bottom: 32px; border-left: 4px solid var(--accent); }
    .static-guide .guide-verdict .verdict-label { font-weight: 700; color: var(--accent); }
    .static-guide .guide-verdict .verdict-text { color: var(--text-secondary); }
    .static-guide .guide-conclusion { margin-top: 40px; padding-top: 32px; border-top: 1px solid var(--border); }
    .static-guide .guide-conclusion h3 { font-size: 1.4rem; margin-bottom: 16px; }
    .static-guide .guide-conclusion p { line-height: 1.7; color: var(--text-secondary); }
    .static-guide .guide-products-inline { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; margin-top: 20px; }
    .static-guide .guide-back-link { display: inline-flex; align-items: center; gap: 8px; color: var(--accent); margin-bottom: 32px; font-weight: 500; text-decoration: none; }
    .static-guide .guide-back-link:hover { text-decoration: underline; }
    .static-guide .lang-toggle { text-align: right; margin-bottom: 16px; }
    .static-guide .lang-toggle a { color: var(--accent); text-decoration: none; font-weight: 500; }
    .static-guide .lang-toggle a:hover { text-decoration: underline; }
    nav.static-nav { background: var(--bg-secondary); border-bottom: 1px solid var(--border); padding: 12px 24px; position: fixed; top: 0; left: 0; right: 0; z-index: 100; display: flex; justify-content: space-between; align-items: center; }
    nav.static-nav a { color: var(--text); text-decoration: none; font-weight: 600; font-size: 0.95rem; }
    nav.static-nav a:hover { color: var(--accent); }
    footer.static-footer { text-align: center; padding: 24px; border-top: 1px solid var(--border); color: var(--text-muted); font-size: 0.85rem; margin-top: 60px; }
    footer.static-footer a { color: var(--accent); text-decoration: none; }
  </style>
</head>
<body>
  <nav class="static-nav">
    <a href="/">← ${isEs ? 'Todas las Guías' : 'All Guides'}</a>
    <a href="/">TopMusicianGear</a>
  </nav>
  <div class="static-guide">
    <div class="lang-toggle">
      <a href="${isEs ? `/${guide.id}.html` : `/${guide.id}_es.html`}">${isEs ? 'English' : 'Español'}</a>
    </div>
    <a href="/" class="guide-back-link"><i class="fa-solid fa-arrow-left"></i> ${isEs ? 'Todas las Guías' : 'Back to All Guides'}</a>
    <h1>${title}</h1>
    <div class="guide-detail-img"><img src="${image}" alt="${title}"></div>
    <div class="guide-detail-intro"><p>${intro}</p></div>
    <div class="guide-detail-sections">${sectionsHtml}</div>
    <div class="guide-verdict">
      <span class="verdict-label">${isEs ? 'Veredicto' : 'Verdict'}: </span>
      <span class="verdict-text">${verdict}</span>
    </div>
    <div class="guide-conclusion">
      <h3>${isEs ? 'Conclusión' : 'Final Thoughts'}</h3>
      <p>${conclusion}</p>
    </div>
    <div class="guide-related">
      <h3>${isEs ? 'Guías Relacionadas' : 'Related Guides'}</h3>
      <div class="guide-related-list">
        ${guides.filter(g => g.id !== guide.id && g.category === guide.category).slice(0, 4).map(g => {
          var gt = isEs && g.title_es ? g.title_es : g.title;
          return '<a href="/guides/' + g.id + '.html" class="guide-related-link">' + gt + '</a>';
        }).join('')}
      </div>
    </div>
  </div>
  <footer class="static-footer">
    <a href="/">TopMusicianGear</a> &mdash; ${isEs ? 'Opiniones honestas de equipo musical por un músico profesional.' : 'Honest music gear reviews by a pro musician.'}
    <br><small>&copy; ${new Date().getFullYear()}</small>
  </footer>
</body>
</html>`;
}

function ko(strings, ...values) {
  return strings.reduce((acc, s, i) => acc + s + (values[i] || ''), '');
}

// ===== GENERATE =====
const outDir = path.join(dir, 'guides');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

guides.forEach(guide => {
  ['en', 'es'].forEach(lang => {
    const html = buildGuidePage(guide, lang);
    const filename = lang === 'es' ? `${guide.id}_es.html` : `${guide.id}.html`;
    fs.writeFileSync(path.join(outDir, filename), html, 'utf8');
    console.log(`Generated: guides/${filename}`);
  });
});

console.log(`\nDone! Generated ${guides.length * 2} guide pages.`);
