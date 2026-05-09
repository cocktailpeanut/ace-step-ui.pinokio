# TopMusicianGear

**From Studio To Stage — Gear Reviewed By A Pro**

Honest, hands-on reviews of professional music gear. Every product personally tested by a touring Cuban musician.

## Features

- 🎵 **42+ Products** across 9 categories
- 🎤 **Microphones** — SM7B, U87, NT1-A, C414, SM57
- 🎸 **Instruments** — Fender, Gibson, Taylor, PRS, Nord, Yamaha
- 🔌 **Interfaces** — Focusrite, UA Apollo, RME, SSL
- 💻 **Plugins** — Serum, Kontakt, FabFilter, Ozone, Valhalla
- 🔊 **Audio Demos** — Hear gear in action
- 🛒 **Multi-store shopping** — Thomann, Plugin Boutique, Loopmasters, Amazon
- 📱 **Fully responsive** — Mobile, tablet, desktop
- ⚡ **100% static** — Zero server, instant load

## File structure

```
├── index.html           # Main page
├── css/
│   └── style.css        # Dark theme with orange accents
├── js/
│   ├── products.js      # Product catalog (edit this!)
│   └── app.js           # Application logic
├── img/
│   └── me.jpg           # About Me photo
└── README.md
```

## How to customize products

Edit `js/products.js`. Each product:

```js
{
  id: 1,
  title: "Shure SM7B",
  category: "microphones",   // microphones, guitars, keyboards, interfaces, monitors, headphones, plugins, percussion, accessories
  price: 399,
  rating: 4.8,
  reviews: 18453,
  badge: "bestSeller",       // bestSeller, legend, premium, topQuality, recommended, savings, or null
  desc: "Product description",
  img: "https://...image.jpg",
  stores: {
    thomann: "https://www.thomann.de/...",
    pluginboutique: "https://www.pluginboutique.com/...",
    loopmasters: "https://www.loopmasters.com/...",
    amazon: "https://amzn.to/..."
  }
}
```

## Deployment

1. Create a GitHub repo (e.g., `topmusiciangear/topmusiciangear.github.io`)
2. Push the `affiliate-site/` contents to the repo
3. Enable GitHub Pages in repo settings (branch: `main`, folder: `/`)
4. Your site will be live at `https://topmusiciangear.github.io/`

## Customize your photo

Place your photo at `img/me.jpg` (recommended: 400x400px square).
