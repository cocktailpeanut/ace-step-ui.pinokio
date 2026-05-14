const products = [
  // ===== MICROPHONES =====
  {
    id: 1,
    title: "Shure SM7B",
    title_es: "Shure SM7B",
    category: "microphones",
    price: 399,
    rating: 4.8,
    reviews: 18453,
    badge: "legend",
    desc: "The industry-standard dynamic microphone for broadcast, podcasting, and vocal recording. Warm, smooth sound with excellent rejection.",
    desc_es: "El micrófono dinámico estándar de la industria para transmisión, podcasting y grabación vocal. Sonido cálido y suave con excelente rechazo.",
    img: "https://media.sweetwater.com/m/products/image/6d2c512a92Rov0eryrfK2jdkFSLhFkOUiy3nNCLK.jpg?quality=82&width=1080&height=1080&fit=bounds&canvas=1080%2C1080&ha=6d2c512a928017f5",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/SM7B--shure-sm7b-cardioid-dynamic-vocal-microphone",
      thomann: "https://www.thomann.co.uk/shure_sm_7_db.htm",
      gear4music: "https://www.gear4music.com/Recording-and-Computers/Shure-SM7B-Dynamic-Studio-Microphone/G6X",

      musikproduktiv: "https://www.musik-produktiv.de/shure-sm7b.html",
      baxmusic: "https://www.bax-shop.co.uk/dynamic-vocal-microphones/shure-sm7b-dynamic-vocal-studio-microphone"
    }
  },
  {
    id: 2,
    title: "Neumann U 87 Ai",
    title_es: "Neumann U 87 Ai",
    category: "microphones",
    price: 3599,
    rating: 4.9,
    reviews: 3456,
    badge: "premium",
    desc: "The world's most famous studio condenser microphone. Used on countless hit records. Three polar patterns, 10dB pad, and legendary Neumann sound.",
    desc_es: "El micrófono de condensador de estudio más famoso del mundo. Usado en innumerables éxitos discográficos. Tres patrones polares, pad de 10dB y legendario sonido Neumann.",
    img: "https://media.sweetwater.com/m/products/image/f759b6ae09I6HOqlkPqK2z6BNiVZitPMA6qDgFfQ.jpg?quality=82&width=1080&height=1080&fit=bounds&canvas=1080%2C1080&ha=f759b6ae09fda8c7",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/U87Ai--neumann-u-87-ai-large-diaphragm-condenser-microphone-nickel",
      thomann: "https://www.thomann.co.uk/neumann_u87_ai.htm",
      gear4music: "https://www.gear4music.com/Recording-and-Computers/Neumann-U87-AI-Studio-Microphone-Set-Nickel/6ED",

      musikproduktiv: "https://www.musik-produktiv.de/search",
      baxmusic: "https://www.bax-shop.co.uk/large-diaphragm-condenser-microphones/neumann-u-87-ai-studio-set-large-diaphragm-condenser-microphone"
    }
  },
  {
    id: 3,
    title: "Rode NT1-A",
    title_es: "Rode NT1-A",
    category: "microphones",
    price: 269,
    rating: 4.6,
    reviews: 21345,
    badge: "bestSeller",
    desc: "The world's quietest studio condenser microphone. Pristine audio quality with a warm, smooth character. Includes shock mount and pop filter.",
    desc_es: "El micrófono de condensador de estudio más silencioso del mundo. Calidad de audio impecable con un carácter cálido y suave. Incluye soporte antigolpes y filtro antipop.",
    img: "https://thumbs.static-thomann.de/thumb/thumb600x600/pics/prod/235937.jpg",
    stores: {
      thomann: "https://www.thomann.co.uk/rode_nt1a_complete_vocal_recording.htm",
      gear4music: "https://www.gear4music.com/G4M/Rode-NT1A-Studio-Condenser-Secondhand/7XKK",

      musikproduktiv: "https://www.musik-produktiv.de/search",
      baxmusic: "https://www.bax-shop.co.uk/large-diaphragm-condenser-microphones/rode-nt1-signature-series-black-large-diaphragm-condenser-microphone"
    }
  },
  {
    id: 4,
    title: "AKG C414 XLII",
    title_es: "AKG C414 XLII",
    category: "microphones",
    price: 1099,
    rating: 4.7,
    reviews: 5678,
    badge: "topQuality",
    desc: "Versatile large-diaphragm condenser with 5 polar patterns. From vocals to piano, the C414 handles it all with breathtaking detail.",
    desc_es: "Condensador versátil de diafragma grande con 5 patrones polares. Desde voces hasta piano, el C414 lo maneja todo con un detalle impresionante.",
    img: "https://thumbs.static-thomann.de/thumb/thumb600x600/pics/prod/240602.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/C414XLII--akg-c414-xlii-large-diaphragm-condenser-microphone",
      thomann: "https://www.thomann.co.uk/akg_c414_xlii.htm",
      gear4music: "https://www.gear4music.com/PA-DJ-and-Lighting/AKG-C414XL-II-Condenser-Microphone/1ZV",

      musikproduktiv: "https://www.musik-produktiv.de/search",
      baxmusic: "https://www.bax-shop.co.uk/large-diaphragm-condenser-microphones/akg-c-414-xlii-studio-condenser-microphone"
    }
  },
  {
    id: 5,
    title: "Shure SM57",
    title_es: "Shure SM57",
    category: "microphones",
    price: 99,
    rating: 4.7,
    reviews: 45210,
    badge: "legend",
    desc: "The most recorded instrument microphone in history. Indestructible, affordable, and incredible on guitar cabs, snares, and horns. Every musician should own one.",
    desc_es: "El micrófono de instrumento más grabado de la historia. Indestructible, asequible e increíble en gabinetes de guitarra, cajas y trompetas. Todo músico debería tener uno.",
    img: "https://media.sweetwater.com/m/products/image/8cc557164ei09SdpOiJJ8j2UgW5tRIRPcRVVipe6.jpg?quality=82&width=1080&height=1080&fit=bounds&canvas=1080%2C1080&ha=8cc557164e165612",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/SM57--shure-sm57-cardioid-dynamic-instrument-microphone",
      thomann: "https://www.thomann.co.uk/shure_sm57_lc.htm",
      gear4music: "https://www.gear4music.com/Recording-and-Computers/Shure-SM57-Dynamic-Instrument-Microphone/4ZV",

      musikproduktiv: "https://www.musik-produktiv.de/shure-sm57.html",
      baxmusic: "https://www.bax-shop.co.uk/dynamic-instrument-microphones/shure-sm-57-dynamic-instrument-microphone"
    }
  },
  {
    id: 50,
    title: "Shure SM58",
    title_es: "Shure SM58",
    category: "microphones",
    price: 99,
    rating: 4.8,
    reviews: 35678,
    badge: "legend",
    desc: "The world's most popular vocal microphone. Used by presidents, pop stars, and pub singers alike. Built like a tank with a tailored frequency response for vocals that cut through any mix.",
    desc_es: "El micrófono vocal más popular del mundo. Usado por presidentes, estrellas pop y cantantes de bar por igual. Construido como un tanque con respuesta de frecuencia adaptada para voces que cortan cualquier mezcla.",
    img: "img/sm58.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/SM58--shure-sm58-cardioid-dynamic-vocal-microphone",
      thomann: "https://www.thomann.co.uk/shure_sm_58_lce.htm",
      gear4music: "https://www.gear4music.com/PA-DJ-and-Lighting/Shure-SM58-Vocal-Microphone/G5D",
      musikproduktiv: "https://www.musik-produktiv.de/search",
      amazon: "https://www.amazon.com/dp/B000CZ0R42",
      baxmusic: "https://www.bax-shop.co.uk/dynamic-vocal-microphones/shure-sm-58-dynamic-vocal-microphone"
    }
  },
  {
    id: 51,
    title: "Sennheiser MD 421",
    title_es: "Sennheiser MD 421",
    category: "microphones",
    price: 399,
    rating: 4.7,
    reviews: 8765,
    badge: "topQuality",
    desc: "The tom-tom king and guitar cab legend. Five-position bass roll-off switch, handles SPLs up to 160dB. The industry standard dynamic for instruments since 1960.",
    desc_es: "El rey de los toms y leyenda de gabinetes de guitarra. Interruptor de corte de graves de cinco posiciones, maneja SPLs de hasta 160dB. El dinámico estándar de la industria para instrumentos desde 1960.",
    img: "img/md421.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/MD421II--sennheiser-md-421-ii-cardioid-dynamic-microphone",
      thomann: "https://www.thomann.co.uk/sennheiser_md_421_ii.htm",
      gear4music: "https://www.gear4music.com/PA-DJ-and-Lighting/Sennheiser-MD421-II/1ZX",
      musikproduktiv: "https://www.musik-produktiv.de/search",
      amazon: "https://www.amazon.com/dp/B0002H0RBS"
    }
  },
  {
    id: 52,
    title: "Electro-Voice RE20",
    title_es: "Electro-Voice RE20",
    category: "microphones",
    price: 449,
    rating: 4.8,
    reviews: 6543,
    badge: "legend",
    desc: "The broadcast standard. Variable-D technology eliminates proximity effect. The definitive choice for podcasting, voiceover, and kick drums.",
    desc_es: "El estándar de transmisión. La tecnología Variable-D elimina el efecto de proximidad. La elección definitiva para podcasting, locución y bombos.",
    img: "img/re20.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/RE20--electro-voice-re20-broadcast-microphone",
      thomann: "https://www.thomann.co.uk/electro_voice_re20.htm",
      gear4music: "https://www.gear4music.com/PA-DJ-and-Lighting/Electro-Voice-RE20/2KVR",
      musikproduktiv: "https://www.musik-produktiv.de/search",
      amazon: "https://www.amazon.com/dp/B08P7QTZM5"
    }
  },

  // ===== GUITARS =====
  {
    id: 6,
    title: "Fender American Professional II Stratocaster",
    title_es: "Fender American Professional II Stratocaster",
    category: "guitars",
    price: 1799,
    rating: 4.8,
    reviews: 7890,
    badge: "bestSeller",
    desc: "The iconic Stratocaster, refined. V-Mod II pickups, Deep C neck profile, and a sleek satin finish. From blues to pop, it's the sound of modern music.",
    desc_es: "La icónica Stratocaster, refinada. Pastillas V-Mod II, perfil de mástil Deep C y un elegante acabado satinado. Del blues al pop, es el sonido de la música moderna.",
    img: "https://thumbs.static-thomann.de/thumb/thumb600x600/pics/prod/500467.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/StratAP2MMB--fender-american-professional-ii-stratocaster-miami-blue-with-maple-fingerboard",
      gear4music: "https://www.gear4music.com/G4M/Fender-American-Professional-II-Stratocaster-2021-Mercury-Secondhand/7AQW",

      musikproduktiv: "https://www.musik-produktiv.de/search"
    }
  },
  {
    id: 7,
    title: "Gibson Les Paul Standard '60s",
    title_es: "Gibson Les Paul Standard '60s",
    category: "guitars",
    price: 2699,
    rating: 4.9,
    reviews: 4567,
    badge: "premium",
    desc: "The ultimate rock machine. Burstbucker pickups, mahogany body with maple top, and that unmistakable Les Paul sustain.",
    desc_es: "La máquina de rock definitiva. Pastillas Burstbucker, cuerpo de caoba con tapa de arce y ese inconfundible sustain Les Paul.",
    img: "https://media.sweetwater.com/m/products/image/7f6aefa01649sOZjanoDlBOmYlvvPxgDS7FfbIng.jpg?quality=82&width=1080&height=1080&fit=bounds&canvas=1080%2C1080&ha=7f6aefa01626914a",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/LPS6ITNH--gibson-les-paul-standard-60s-iced-tea",
      thomann: "https://www.thomann.co.uk/gibson_les_paul_standard_60s_bb.htm",
      gear4music: "https://www.gear4music.com/Guitar-and-Bass/Gibson-Les-Paul-Standard-60s-Double-Trouble-Vintage-Tobacco-Burst-Gloss-219150043/6Y3C",

      musikproduktiv: "https://www.musik-produktiv.de/search"
    }
  },
  {
    id: 8,
    title: "Taylor 314ce",
    title_es: "Taylor 314ce",
    category: "guitars",
    price: 1899,
    rating: 4.7,
    reviews: 3456,
    badge: "topQuality",
    desc: "A masterpiece of acoustic craftsmanship. Solid Sitka spruce top, Tasmanian blackwood back and sides, and Taylor's legendary playability.",
    desc_es: "Una obra maestra de artesanía acústica. Tapa de abeto Sitka macizo, fondo y aros de palo negro de Tasmania, y la legendaria tocabilidad de Taylor.",
    img: "https://thumbs.static-thomann.de/thumb/thumb600x600/pics/prod/443306.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/314ceVClNMB--taylor-314ce-v-class-grand-auditorium-acoustic-electric-guitar-natural",
      thomann: "https://www.thomann.co.uk/taylor_314ce_next_generation.htm",
      gear4music: "https://www.gear4music.com/Guitar-and-Bass/Taylor-314ce-Natural/2KX6",

      musikproduktiv: "https://www.musik-produktiv.de/search"
    }
  },
  {
    id: 9,
    title: "Ibanez RG550 Genesis",
    title_es: "Ibanez RG550 Genesis",
    category: "guitars",
    price: 999,
    rating: 4.6,
    reviews: 6789,
    badge: "recommended",
    desc: "The original shred machine. Super Wizard neck, Edge tremolo, and DiMarzio pickups. Made for speed and precision.",
    desc_es: "La máquina de shred original. Mástil Super Wizard, trémolo Edge y pastillas DiMarzio. Hecha para velocidad y precisión.",
    img: "https://thumbs.static-thomann.de/thumb/thumb600x600/pics/prod/429087.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/RG550EB--ibanez-genesis-collection-rg550-electric-guitar-electric-blue",
      thomann: "https://www.thomann.co.uk/ibanez_rg550_pn.htm",
      gear4music: "https://www.gear4music.com/Guitar-and-Bass/Ibanez-RG550-Genesis-Purple-Neon/28PZ",

      musikproduktiv: "https://www.musik-produktiv.de/search"
    }
  },
  {
    id: 10,
    title: "PRS McCarty 594",
    title_es: "PRS McCarty 594",
    category: "guitars",
    price: 4299,
    rating: 4.9,
    reviews: 2345,
    badge: "premium",
    desc: "Paul Reed Smith's tribute to the golden era of electric guitars. 58/15 LT pickups, pattern vintage neck, and impeccable build quality.",
    desc_es: "El tributo de Paul Reed Smith a la era dorada de las guitarras eléctricas. Pastillas 58/15 LT, mástil pattern vintage y calidad de construcción impecable.",
    img: "https://thumbs.static-thomann.de/thumb/thumb600x600/pics/prod/581957.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/MC59410BGWBst--prs-mccarty-594-10-top-electric-guitar-black-gold-wraparound-burst",
      thomann: "https://www.thomann.co.uk/prs_mccarty_sc594_yellow_tiger_602869.htm",

      musikproduktiv: "https://www.musik-produktiv.de/search"
    }
  },

  // ===== KEYBOARDS =====
  {
    id: 11,
    title: "Nord Stage 4 88",
    title_es: "Nord Stage 4 88",
    category: "keyboards",
    price: 4999,
    rating: 4.9,
    reviews: 1890,
    badge: "premium",
    desc: "The ultimate stage piano. Triple Sensor keybed, seamless transitions, and Nord's legendary piano, organ, and synth engines in one instrument.",
    desc_es: "El piano de escenario definitivo. Teclado Triple Sensor, transiciones perfectas y los legendarios motores de piano, órgano y sintetizador de Nord en un solo instrumento.",
    img: "https://thumbs.static-thomann.de/thumb/thumb600x600/pics/prod/560977.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/Stage4-88--nord-stage-4-88-stage-keyboard",
      thomann: "https://www.thomann.co.uk/clavia_nord_stage_4_88.htm",
      gear4music: "https://www.gear4music.com/Keyboards-and-Pianos/Nord-Stage-4-88-88-Key-Digital-Stage-Piano/5ET3",

      musikproduktiv: "https://www.musik-produktiv.de/search"
    }
  },
  {
    id: 12,
    title: "Yamaha Montage M8x",
    title_es: "Yamaha Montage M8x",
    category: "keyboards",
    price: 4699,
    rating: 4.8,
    reviews: 1567,
    badge: "premium",
    desc: "Flagship synthesizer with AN-X and FM-X engines. 88-key weighted action, motion control, and seamless DAW integration.",
    desc_es: "Sintetizador insignia con motores AN-X y FM-X. 88 teclas de acción con peso, control de movimiento e integración perfecta con DAW.",
    img: "https://thumbs.static-thomann.de/thumb/thumb600x600/pics/prod/629663.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/MontageM8X--yamaha-montage-m8x-88-key-synthesizer",
      gear4music: "https://www.gear4music.com/Keyboards-and-Pianos/Yamaha-Montage-M8X-Synthesizer/7H6C",

      musikproduktiv: "https://www.musik-produktiv.de/search"
    }
  },
  {
    id: 13,
    title: "Arturia KeyLab Essential 61 MkIII",
    title_es: "Arturia KeyLab Essential 61 MkIII",
    category: "keyboards",
    price: 299,
    rating: 4.5,
    reviews: 12345,
    badge: "bestSeller",
    desc: "The ultimate DAW controller. Deep integration with Analog Lab, Ableton Live, and Logic. 61 velocity-sensitive keys with polyphonic aftertouch.",
    desc_es: "El controlador DAW definitivo. Integración profunda con Analog Lab, Ableton Live y Logic. 61 teclas sensibles a la velocidad con aftertouch polifónico.",
    img: "https://thumbs.static-thomann.de/thumb/thumb600x600/pics/prod/567153.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/KeyLabEss3-61--arturia-keylab-essential-mk3-61-key-keyboard-controller-white",
      thomann: "https://www.thomann.co.uk/arturia_keylab_essential_61_mk3_white.htm",
      gear4music: "https://www.gear4music.com/Recording-and-Computers/Arturia-KeyLab-Essential-61-MK3-Aqumarine/7SGI",

      musikproduktiv: "https://www.musik-produktiv.de/search"
    }
  },
  {
    id: 14,
    title: "Native Instruments Komplete Kontrol S61",
    title_es: "Native Instruments Komplete Kontrol S61",
    category: "keyboards",
    price: 599,
    rating: 4.6,
    reviews: 6789,
    badge: "recommended",
    desc: "Smart keyboard controller with NI ecosystem integration. Light guide, NKS browsing, and premium Fatar keybed.",
    desc_es: "Controlador de teclado inteligente con integración al ecosistema NI. Guía de luz, navegación NKS y teclado Fatar premium.",
    img: "https://thumbs.static-thomann.de/thumb/thumb600x600/pics/prod/570926.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/KontS3-61--native-instruments-kontrol-s61-mk3-61-key-smart-keyboard-controller",
      thomann: "https://www.thomann.co.uk/native_instruments_kontrol_s61_mk3_komplete_15.htm",

      musikproduktiv: "https://www.musik-produktiv.de/search"
    }
  },

  // ===== INTERFACES =====
  {
    id: 15,
    title: "Focusrite Scarlett 2i2 4th Gen",
    title_es: "Focusrite Scarlett 2i2 4ª Gen",
    category: "interfaces",
    price: 199,
    rating: 4.7,
    reviews: 34567,
    badge: "bestSeller",
    desc: "The world's best-selling audio interface just got better. 120dB dynamic range, Air mode, and Loopback for streaming. Studio-grade conversion.",
    desc_es: "La interfaz de audio más vendida del mundo acaba de mejorar. 120dB de rango dinámico, modo Air y Loopback para streaming. Conversión de grado estudio.",
    img: "https://thumbs.static-thomann.de/thumb/thumb600x600/pics/prod/566684.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/Scar2i2G4--focusrite-scarlett-2i2-4th-gen-usb-audio-interface",
      thomann: "https://www.thomann.co.uk/focusrite_scarlett_2i2_studio_4th_gen.htm",
      gear4music: "https://www.gear4music.com/Recording-and-Computers/Focusrite-Scarlett-2i2-4th-Gen-Audio-Interface/5O8G",

      musikproduktiv: "https://www.musik-produktiv.de/focusrite-scarlett-2i2-4th-gen.html",
      baxmusic: "https://www.bax-shop.co.uk/external-audio-interfaces/focusrite-scarlett-2i2-4th-gen-audio-interface"
    }
  },
  {
    id: 16,
    title: "Universal Audio Apollo Twin X",
    title_es: "Universal Audio Apollo Twin X",
    category: "interfaces",
    price: 899,
    rating: 4.8,
    reviews: 5678,
    badge: "premium",
    desc: "Professional-grade Thunderbolt interface with UAD DSP processing. Real-time UAD plugins with near-zero latency. Unison preamps.",
    desc_es: "Interfaz Thunderbolt de grado profesional con procesamiento UAD DSP. Plugins UAD en tiempo real con latencia casi nula. Preamplificadores Unison.",
    img: "https://thumbs.static-thomann.de/thumb/thumb600x600/pics/prod/571436.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/ApolloTXDHE--universal-audio-apollo-twin-by-duo-heritage-edition-10x6-thunderbolt-audio-interface-with-uad-dsp",
      thomann: "https://www.thomann.co.uk/universal_audio_apollo_twin_x_usb_heritage.htm",

      musikproduktiv: "https://www.musik-produktiv.de/search",
      baxmusic: "https://www.bax-shop.co.uk/external-audio-interfaces/universal-audio-apollo-twin-x-quad-gen-2-studio-edition-audio-interface"
    }
  },
  {
    id: 17,
    title: "RME Babyface Pro FS",
    title_es: "RME Babyface Pro FS",
    category: "interfaces",
    price: 949,
    rating: 4.9,
    reviews: 3456,
    badge: "topQuality",
    desc: "The gold standard for portable recording. Legendary RME drivers, SteadyClock FS jitter suppression, and pristine AD/DA conversion.",
    desc_es: "El estándar de oro para grabación portátil. Legendarios drivers RME, supresión de jitter SteadyClock FS y conversión AD/DA impecable.",
    img: "https://thumbs.static-thomann.de/thumb/thumb600x600/pics/prod/476426.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/BabyfaceProFS--rme-babyface-pro-fs-24-channel-usb-audio-interface",
      thomann: "https://www.thomann.co.uk/rme_babyface_pro_fs.htm",
      gear4music: "https://www.gear4music.com/Recording-and-Computers/RME-Babyface-Pro-FS/37CM",

      musikproduktiv: "https://www.musik-produktiv.de/search",
      andertons: "https://www.andertons.co.uk/rme-babyface-pro-fs-24-channel-192-khz-bus-powered-pro-usb-20-audio-interface/",
      baxmusic: "https://www.bax-shop.co.uk/external-audio-interface/rme-babyface-pro-fs-audio-interface"
    }
  },
  {
    id: 18,
    title: "SSL 2+",
    title_es: "SSL 2+",
    category: "interfaces",
    price: 299,
    rating: 4.7,
    reviews: 8901,
    badge: "recommended",
    desc: "Solid State Logic in an interface. Legendary SSL 4K preamps, Legacy 4K analogue channel strip, and professional monitoring features.",
    desc_es: "Solid State Logic en una interfaz. Legendarios preamplificadores SSL 4K, channel strip analógico Legacy 4K y funciones profesionales de monitoreo.",
    img: "https://thumbs.static-thomann.de/thumb/thumb600x600/pics/prod/601306.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/SSL2Plus--solid-state-logic-ssl2-usb-audio-interface",
      thomann: "https://www.thomann.co.uk/ssl_2_mkii_601306.htm",
      gear4music: "https://www.gear4music.com/Recording-and-Computers/SSL-2and-MKII-2-Channel-USB-Audio-Interface/6OZA",

      musikproduktiv: "https://www.musik-produktiv.de/search",
      baxmusic: "https://www.bax-shop.co.uk/external-audio-interfaces/solid-state-logic-ssl-2-mkii-audio-interface"
    }
  },
  {
    id: 53,
    title: "Audient iD14 MkII",
    title_es: "Audient iD14 MkII",
    category: "interfaces",
    price: 299,
    rating: 4.7,
    reviews: 3456,
    badge: "topQuality",
    desc: "Console-grade preamps in a compact interface. The same Class-A mic pres found in Audient's $50,000 ASP8024 console. Dual headphone outputs and JFET DI input for instruments.",
    desc_es: "Preamplificadores de grado consola en una interfaz compacta. Los mismos previos de micrófono Clase A que se encuentran en la consola ASP8024 de $50,000 de Audient. Salidas de auriculares duales y entrada DI JFET para instrumentos.",
    img: "img/audient-id14.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/iD14mkII--audient-id14-mkii-usb-audio-interface",
      thomann: "https://www.thomann.co.uk/audient_id14_mkii.htm",
      gear4music: "https://www.gear4music.com/Recording-and-Computers/Audient-iD14-MKII-USB-Audio-Interface/3L4B",
      musikproduktiv: "https://www.musik-produktiv.de/search",
      baxmusic: "https://www.bax-shop.co.uk/external-audio-interface/audient-id14-mkii-usb-c-audio-interface"
    }
  },
  {
    id: 54,
    title: "MOTU M2",
    title_es: "MOTU M2",
    category: "interfaces",
    price: 199,
    rating: 4.6,
    reviews: 4567,
    badge: "recommended",
    desc: "The best value in its class. Full-color LCD metering, ESS Sabre32 Ultra DAC, and loopback for streaming. The only interface under $200 with real-time level monitoring.",
    desc_es: "El mejor valor en su clase. Medición LCD a todo color, DAC ESS Sabre32 Ultra y loopback para streaming. La única interfaz por menos de $200 con monitoreo de nivel en tiempo real.",
    img: "img/motu-m2.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/M2--motu-m2-2x2-usb-c-audio-interface",
      thomann: "https://www.thomann.co.uk/motu_m2.htm",
      gear4music: "https://www.gear4music.com/Recording-and-Computers/MOTU-M2-2x2-USB-C-Audio-Interface/3GRT",
      musikproduktiv: "https://www.musik-produktiv.de/search",
      baxmusic: "https://www.bax-shop.co.uk/external-audio-interface/motu-m2-audio-interface"
    }
  },
  {
    id: 55,
    title: "Universal Audio Volt 2",
    title_es: "Universal Audio Volt 2",
    category: "interfaces",
    price: 189,
    rating: 4.5,
    reviews: 2345,
    badge: "bestSeller",
    desc: "UA quality at an entry-level price. Vintage Mic Preamp mode emulates the classic UA 610 tube preamp. MIDI I/O and solid build quality with a retro design that stands out.",
    desc_es: "Calidad UA a precio de entrada. El modo Vintage Mic Preamp emula el clásico previo de tubo UA 610. MIDI I/O y construcción sólida con diseño retro que destaca.",
    img: "img/ua-volt2.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/Volt2--universal-audio-volt-2-usb-audio-interface",
      thomann: "https://www.thomann.co.uk/universal_audio_volt_2.htm",
      gear4music: "https://www.gear4music.com/Recording-and-Computers/Universal-Audio-Volt-2-USB-Audio-Interface/5N5B",
      musikproduktiv: "https://www.musik-produktiv.de/search"
    }
  },

  // ===== MONITORS =====
  {
    id: 19,
    title: "Yamaha HS8",
    title_es: "Yamaha HS8",
    category: "monitors",
    price: 698,
    rating: 4.7,
    reviews: 12345,
    badge: "bestSeller",
    desc: "The industry standard for mixing. 8-inch cone woofer with Kevlar coating, 1-inch dome tweeter, and room control for accurate monitoring.",
    desc_es: "El estándar de la industria para mezcla. Woofer de cono de 8 pulgadas con revestimiento de Kevlar, tweeter de domo de 1 pulgada y control de sala para monitoreo preciso.",
    img: "https://thumbs.static-thomann.de/thumb/thumb600x600/pics/prod/315822.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/HS8pr--yamaha-hs8-8-inch-powered-studio-monitor-pair-black",
      thomann: "https://www.thomann.co.uk/yamaha_hs_8_bundle.htm",
      gear4music: "https://www.gear4music.com/Recording-and-Computers/Yamaha-HS8-Active-Studio-Monitor-Pair/6V1J",

      musikproduktiv: "https://www.musik-produktiv.de/yamaha-hs-8.html",
      baxmusic: "https://www.bax-shop.co.uk/studio-monitor/yamaha-hs8-mp-matched-pair-active-studio-monitors-set-of-2-black"
    }
  },
  {
    id: 20,
    title: "KRK Rokit 7 G4",
    title_es: "KRK Rokit 7 G4",
    category: "monitors",
    price: 498,
    rating: 4.5,
    reviews: 18907,
    badge: "recommended",
    desc: "Professional bi-amped studio monitors with Kevlar drivers, DSP-driven EQ, and a front-firing bass port ideal for smaller studios.",
    desc_es: "Monitores de estudio bi-amplificados profesionales con drivers de Kevlar, ecualizador DSP y puerto de graves frontal ideal para estudios pequeños.",
    img: "img/krk-rokit7.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/Rokit7G5Pr--krk-rokit-7-g5-7-inch-powered-studio-monitor-pair-black",
      thomann: "https://www.thomann.co.uk/krk_rokit_rp7_g5_stand_bundle.htm",
      gear4music: "https://www.gear4music.com/Recording-and-Computers/KRK-ROKIT-RP7-G5-Studio-Monitor-Pair/68YW",

      musikproduktiv: "https://www.musik-produktiv.de/search"
    }
  },
  {
    id: 21,
    title: "Adam Audio A7V",
    title_es: "Adam Audio A7V",
    category: "monitors",
    price: 799,
    rating: 4.8,
    reviews: 4567,
    badge: "premium",
    desc: "Cutting-edge 2-way monitor with S-ART folded ribbon tweeter. Unmatched transient response, deep bass, and 3D imaging.",
    desc_es: "Monitor de 2 vías de vanguardia con tweeter de cinta plegada S-ART. Respuesta transitoria inigualable, graves profundos e imagen 3D.",
    img: "https://thumbs.static-thomann.de/thumb/thumb600x600/pics/prod/540683.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/A7V--adam-audio-a7v-7-inch-powered-studio-monitor",
      thomann: "https://www.thomann.co.uk/adam_a7v.htm",
      gear4music: "https://www.gear4music.com/Recording-and-Computers/ADAM-Audio-A7V-Active-Studio-Monitor-Single/4QAJ",

      musikproduktiv: "https://www.musik-produktiv.de/search",
      baxmusic: "https://www.bax-shop.co.uk/studio-monitor/adam-a7v-active-studio-monitor-single-unit"
    }
  },
  {
    id: 22,
    title: "Genelec 8040B",
    title_es: "Genelec 8040B",
    category: "monitors",
    price: 1198,
    rating: 4.9,
    reviews: 2345,
    badge: "premium",
    desc: "Finnish precision at its finest. 6.5-inch woofer, metal dome tweeter, and Genelec's renowned Directivity Control waveguide.",
    desc_es: "Precisión finlandesa en su máxima expresión. Woofer de 6.5 pulgadas, tweeter de domo metálico y la reconocida guía de onda Directivity Control de Genelec.",
    img: "https://thumbs.static-thomann.de/thumb/thumb600x600/pics/prod/311111.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/8040BPM--genelec-8040b-6.5-inch-powered-studio-monitor",
      thomann: "https://www.thomann.co.uk/genelec_8040_bpm.htm",
      gear4music: "https://www.gear4music.com/Recording-and-Computers/Genelec-8040B-Bi-Amped-Studio-Monitor-Dark-Grey-Single/V2L",

      musikproduktiv: "https://www.musik-produktiv.de/search"
    }
  },

  // ===== HEADPHONES =====
  {
    id: 23,
    title: "Beyerdynamic DT 770 Pro",
    title_es: "Beyerdynamic DT 770 Pro",
    category: "headphones",
    price: 159,
    rating: 4.7,
    reviews: 32109,
    badge: "legend",
    desc: "The studio standard for closed-back monitoring. 250 Ohm drivers, velour ear pads, and exceptional comfort for marathon sessions.",
    desc_es: "El estándar de estudio para monitoreo cerrado. Drivers de 250 Ohm, almohadillas de velour y comodidad excepcional para sesiones maratonianas.",
    img: "img/dt770pro.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/DT770pro80--beyerdynamic-dt-770-pro-80-ohm-closed-back-studio-mixing-headphones",
      thomann: "https://www.thomann.co.uk/beyerdynamic_dt770pro.htm",
      gear4music: "https://www.gear4music.com/Recording-and-Computers/beyerdynamic-DT-770-Pro-Headphones-250-Ohm/8GU",

      musikproduktiv: "https://www.musik-produktiv.de/beyerdynamic-dt-770-pro-250-ohm.html",
      baxmusic: "https://www.bax-shop.co.uk/studio-headphones/beyerdynamic-dt770-pro-80-ohm"
    }
  },
  {
    id: 24,
    title: "Sennheiser HD 600",
    title_es: "Sennheiser HD 600",
    category: "headphones",
    price: 399,
    rating: 4.8,
    reviews: 18907,
    badge: "legend",
    desc: "Audiophile open-back reference headphones. Natural, neutral sound with incredible detail. The mixing engineer's choice for critical listening.",
    desc_es: "Auriculares de referencia abiertos audiófilos. Sonido natural y neutro con detalle increíble. La elección del ingeniero de mezcla para escucha crítica.",
    img: "https://thumbs.static-thomann.de/thumb/thumb600x600/pics/prod/471751.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/HD600--sennheiser-hd-600-open-back-audiophile-professional-headphones",
      thomann: "https://www.thomann.co.uk/sennheiser_hd_600_new_version_2019.htm",

      musikproduktiv: "https://www.musik-produktiv.de/search"
    }
  },
  {
    id: 25,
    title: "Audio-Technica ATH-M50x",
    title_es: "Audio-Technica ATH-M50x",
    category: "headphones",
    price: 169,
    rating: 4.6,
    reviews: 45678,
    badge: "bestSeller",
    desc: "The most popular studio headphones in the world. Critically acclaimed clarity, deep bass, and collapsible design for portability.",
    desc_es: "Los auriculares de estudio más populares del mundo. Claridad aclamada por la crítica, graves profundos y diseño plegable para portabilidad.",
    img: "https://thumbs.static-thomann.de/thumb/thumb600x600/pics/prod/331905.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/ATHM50x--audio-technica-ath-m50x-closed-back-studio-monitoring-headphones",
      thomann: "https://www.thomann.co.uk/audio_technica_ath_m50_x.htm",
      gear4music: "https://www.gear4music.com/PA-DJ-and-Lighting/Audio-Technica-ATH-M50x-Headphones-Black/X9G",

      musikproduktiv: "https://www.musik-produktiv.de/search"
    }
  },
  {
    id: 26,
    title: "Sony MDR-7506",
    title_es: "Sony MDR-7506",
    category: "headphones",
    price: 99,
    rating: 4.5,
    reviews: 56789,
    badge: "legend",
    desc: "The broadcast standard since 1991. Closed-back, collapsible, and incredibly reliable. Trusted by professionals worldwide.",
    desc_es: "El estándar de transmisión desde 1991. Cerrados, plegables e increíblemente confiables. Usados por profesionales en todo el mundo.",
    img: "https://thumbs.static-thomann.de/thumb/thumb600x600/pics/prod/135709.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/MDR7506--sony-mdr-7506-closed-back-professional-headphones",
      thomann: "https://www.thomann.co.uk/sony_mdr7506_kopfhoerer.htm",
      gear4music: "https://www.gear4music.com/Recording-and-Computers/Sony-MDR-7506-1-Professional-Stereo-Headphones/26Z8",

      musikproduktiv: "https://www.musik-produktiv.de/sony-mdr-7506.html",
      baxmusic: "https://www.bax-shop.co.uk/studio-headphones/sony-mdr-7506-headphones"
    }
  },
  {
    id: 56,
    title: "Beyerdynamic DT 990 Pro",
    title_es: "Beyerdynamic DT 990 Pro",
    category: "headphones",
    price: 169,
    rating: 4.7,
    reviews: 28901,
    badge: "legend",
    desc: "Open-back mixing headphones with legendary bass extension. The spacious soundstage reveals reverb tails and stereo placement with surgical precision. The DT 770's open-back sibling.",
    desc_es: "Auriculares de mezcla abiertos con legendaria extensión de graves. El escenario sonoro espacioso revela colas de reverb y colocación estéreo con precisión quirúrgica. El hermano abierto del DT 770.",
    img: "img/dt990pro.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/DT990Pro--beyerdynamic-dt-990-pro-250-ohm-open-back-studio-headphones",
      thomann: "https://www.thomann.co.uk/beyerdynamic_dt990pro.htm",
      gear4music: "https://www.gear4music.com/Recording-and-Computers/beyerdynamic-DT-990-Pro-Headphones-250-Ohm/8GW",
      musikproduktiv: "https://www.musik-produktiv.de/search"
    }
  },
  {
    id: 57,
    title: "AKG K371",
    title_es: "AKG K371",
    category: "headphones",
    price: 155,
    rating: 4.5,
    reviews: 12340,
    badge: "recommended",
    desc: "Harman-target tuned for the most natural closed-back sound under $200. Foldable design, detachable cables, and the flattest frequency response in its class.",
    desc_es: "Sintonizado al objetivo Harman para el sonido cerrado más natural por menos de $200. Diseño plegable, cables desmontables y la respuesta de frecuencia más plana en su clase.",
    img: "img/akg-k371.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/K371--akg-k371-closed-back-professional-studio-headphones",
      thomann: "https://www.thomann.co.uk/akg_k371.htm",
      gear4music: "https://www.gear4music.com/PA-DJ-and-Lighting/AKG-K371-Closed-Back-Studio-Headphones/4Q7C",
      musikproduktiv: "https://www.musik-produktiv.de/search",
      baxmusic: "https://www.bax-shop.co.uk/studio-headphones/akg-k371-closed-folding-studio-headphones"
    }
  },

  // ===== PLUGINS =====
  {
    id: 28,
    title: "Native Instruments Kontakt 8",
    title_es: "Native Instruments Kontakt 8",
    category: "plugins",
    price: 399,
    rating: 4.8,
    reviews: 18907,
    badge: "premium",
    desc: "The world's leading sampler platform. Kontakt 8 with new browser, wavetable module, MIDI tools, and 900+ instruments. The industry standard for sampled instruments.",
    desc_es: "La plataforma de sampler líder mundial. Kontakt 8 con nuevo navegador, módulo wavetable, herramientas MIDI y más de 900 instrumentos. El estándar de la industria para instrumentos sampleados.",
    img: "img/kontakt8.jpg",
    stores: {
      pluginboutique: "https://www.pluginboutique.com/product/1-Instruments/55-Kontakt-Instrument/13633-Kontakt-8",
      gear4music: "https://www.gear4music.com/Recording-and-Computers/Native-Instruments-Kontakt-8/6NPI",

      musikproduktiv: "https://www.musik-produktiv.de/search",
      baxmusic: "https://www.bax-shop.co.uk/instrument-plugins/native-instruments-kontakt-8-download"
    }
  },
  {
    id: 29,
    title: "FabFilter Total Bundle",
    title_es: "FabFilter Total Bundle",
    category: "plugins",
    price: 1069,
    rating: 4.9,
    reviews: 12345,
    badge: "premium",
    desc: "The ultimate mixing and mastering toolkit. Pro-Q 4, Pro-C 3, Pro-L 2, Pro-R 2, Saturn 2, Timeless 3, Volcano 3, Twin 3, and more.",
    desc_es: "El kit definitivo de mezcla y masterización. Pro-Q 4, Pro-C 3, Pro-L 2, Pro-R 2, Saturn 2, Timeless 3, Volcano 3, Twin 3 y más.",
    img: "img/fabfilter-total.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/FFTotalBun--fabfilter-total-plug-in-bundle",
      pluginboutique: "https://www.pluginboutique.com/product/1-Instruments/57-Complete-Collection/16649-FabFilter-Total-Bundle",
      thomann: "https://www.thomann.co.uk/fabfilter_total_bundle.htm",
      gear4music: "https://www.gear4music.com/Recording-and-Computers/FabFilter-Total-Bundle/3NUP",

      musikproduktiv: "https://www.musik-produktiv.de/search"
    }
  },
  {
    id: 30,
    title: "iZotope Ozone 12 Advanced",
    title_es: "iZotope Ozone 12 Advanced",
    category: "plugins",
    price: 499,
    rating: 4.7,
    reviews: 8901,
    badge: "topQuality",
    desc: "Next-gen AI-powered mastering suite. 20 pro modules including Stem EQ, Clarity, Stabilizer, and improved stem splitting with neural networks.",
    desc_es: "Suite de masterización de nueva generación impulsada por IA. 20 módulos profesionales incluyendo Stem EQ, Clarity, Stabilizer y separación de stems mejorada con redes neuronales.",
    img: "img/ozone12.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/Ozone12Ad--izotope-ozone-12-advanced-mastering-software-suite",
      pluginboutique: "https://www.pluginboutique.com/product/2-Effects/52-Mastering-Suite/15503-Ozone-12-Advanced",
      gear4music: "https://www.gear4music.com/Recording-and-Computers/iZotope-Ozone-12-Advanced/7IC5",

      musikproduktiv: "https://www.musik-produktiv.de/search"
    }
  },
  {
    id: 32,
    title: "Soundtoys 5.5 Bundle",
    title_es: "Soundtoys 5.5 Bundle",
    category: "plugins",
    price: 599,
    rating: 4.8,
    reviews: 6789,
    badge: "topQuality",
    desc: "23 iconic effects including Decapitator, EchoBoy, Little AlterBoy, SuperPlate, SpaceBlender, and Effect Rack. The creative producer's toolbox.",
    desc_es: "23 efectos icónicos incluyendo Decapitator, EchoBoy, Little AlterBoy, SuperPlate, SpaceBlender y Effect Rack. La caja de herramientas del productor creativo.",
    img: "img/soundtoys5.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/Soundtoys5--soundtoys-5-plug-in-bundle-download",
      pluginboutique: "https://www.pluginboutique.com/product/81-Bundles/89-Complete-Collection/15254-Soundtoys-5-5",
      gear4music: "https://www.gear4music.com/Recording-and-Computers/Soundtoys-55/7F1S",

      musikproduktiv: "https://www.musik-produktiv.de/search"
    }
  },

  // ===== PERCUSSION =====
  {
    id: 33,
    title: "Roland TR-8S",
    title_es: "Roland TR-8S",
    category: "percussion",
    price: 749,
    rating: 4.7,
    reviews: 4567,
    badge: "topQuality",
    desc: "The ultimate rhythm machine. Authentic 808, 909, and 707 sounds combined with sample import and advanced sequencing.",
    desc_es: "La máquina de ritmo definitiva. Sonidos auténticos de 808, 909 y 707 combinados con importación de samples y secuenciación avanzada.",
    img: "https://thumbs.static-thomann.de/thumb/thumb600x600/pics/prod/434284.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/TR8S--roland-tr-8s-rhythm-performer",
      thomann: "https://www.thomann.co.uk/roland_tr_8s.htm",
      gear4music: "https://www.gear4music.com/Keyboards-and-Pianos/Roland-TR-8S-Rhythm-Performer/2D82",

      musikproduktiv: "https://www.musik-produktiv.de/search"
    }
  },
  {
    id: 34,
    title: "Akai MPC One+",
    title_es: "Akai MPC One+",
    category: "percussion",
    price: 499,
    rating: 4.6,
    reviews: 5678,
    badge: "bestSeller",
    desc: "Beat-making powerhouse with Wi-Fi and Bluetooth. 7-inch touchscreen, 16 velocity-sensitive pads, and the legendary MPC workflow.",
    desc_es: "Potencia de creación de beats con Wi-Fi y Bluetooth. Pantalla táctil de 7 pulgadas, 16 pads sensibles a la velocidad y el legendario flujo de trabajo MPC.",
    img: "https://thumbs.static-thomann.de/thumb/thumb600x600/pics/prod/567619.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/MPCOnePlus--akai-professional-mpc-one-plus-standalone-sampler-and-sequencer",
      gear4music: "https://www.gear4music.com/Recording-and-Computers/Akai-Professional-MPC-One-Plus-Standalone-Music-Production-Centre/5MUP",

      musikproduktiv: "https://www.musik-produktiv.de/search"
    }
  },
  {
    id: 35,
    title: "Zildjian K Custom Dark Pack",
    title_es: "Zildjian K Custom Dark Pack",
    category: "percussion",
    price: 1499,
    rating: 4.8,
    reviews: 2345,
    badge: "premium",
    desc: "Hand-hammered Turkish cymbals with warm, complex tones. Includes 14-inch hi-hats, 16-inch + 18-inch crashes, and 20-inch ride.",
    desc_es: "Platillos turcos martillados a mano con tonos cálidos y complejos. Incluye hi-hats de 14 pulgadas, crashes de 16 + 18 pulgadas y ride de 20 pulgadas.",
    img: "https://thumbs.static-thomann.de/thumb/thumb600x600/pics/prod/374175.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/KCD900--zildjian-k-custom-dark-4-piece-cymbal-pack",

      musikproduktiv: "https://www.musik-produktiv.de/search"
    }
  },
  {
    id: 36,
    title: "Tama Starclassic Walnut/Birch",
    title_es: "Tama Starclassic Nogal/Abedul",
    category: "percussion",
    price: 2499,
    rating: 4.9,
    reviews: 1234,
    badge: "premium",
    desc: "Professional-grade drum kit with walnut/birch shells. Incredible depth, attack, and resonance. Perfect for studio and stage.",
    desc_es: "Batería de grado profesional con cascos de nogal/abedul. Profundidad, ataque y resonancia increíbles. Perfecta para estudio y escenario.",
    img: "https://thumbs.static-thomann.de/thumb/thumb600x600/pics/prod/361976.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/WBS42SMBR--tama-starclassic-walnut-birch-lacquer-4-piece-shell-pack-molten-brown-burst",

      musikproduktiv: "https://www.musik-produktiv.de/search"
    }
  },

  // ===== ACCESSORIES =====
  {
    id: 38,
    title: "Mogami Gold Studio XLR Cable (3m)",
    title_es: "Cable XLR Mogami Gold Studio (3m)",
    category: "accessories",
    price: 39,
    rating: 4.7,
    reviews: 8901,
    badge: "topQuality",
    desc: "The industry standard for studio cabling. Neglex OFC conductors, REAN connectors, and legendary Mogami reliability.",
    desc_es: "El estándar de la industria para cableado de estudio. Conductores Neglex OFC, conectores REAN y la legendaria fiabilidad Mogami.",
    img: "img/mogami-xlr.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/GoldStu10--mogami-gold-studio-microphone-cable-10-foot-xlr-xlr",
      gear4music: "https://www.gear4music.com/G4M/Studiospares-Pro-Neutrik-XLR-Mogami-Cable-5m-Black-with-Gold-Plated-Pins/6URJ",

      musikproduktiv: "https://www.musik-produktiv.de/search"
    }
  },
  {
    id: 39,
    title: "Stedman Proscreen XL Pop Filter",
    title_es: "Filtro Antipop Stedman Proscreen XL",
    category: "accessories",
    price: 49,
    rating: 4.5,
    reviews: 5678,
    badge: null,
    desc: "Professional metal mesh pop filter. Dual-layer screen eliminates plosives without high-frequency loss. Adjustable goose-neck stand.",
    desc_es: "Filtro antipop profesional de malla metálica. Pantalla de doble capa elimina oclusivas sin pérdida de altas frecuencias. Soporte de cuello de ganso ajustable.",
    img: "https://thumbs.static-thomann.de/thumb/thumb600x600/pics/prod/561297.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/StedmanXL--stedman-corporation-proscreen-xl-black",

      musikproduktiv: "https://www.musik-produktiv.de/search"
    }
  },
  {
    id: 41,
    title: "Gator Cases 61-Key Keyboard Case",
    title_es: "Estuche para Teclado 61 Teclas Gator",
    category: "accessories",
    price: 179,
    rating: 4.6,
    reviews: 3456,
    badge: null,
    desc: "ATA-approved molded case with EPS foam interior. Heavy-duty hardware, recessed latches, and wheels for easy transport.",
    desc_es: "Estuche moldeado aprobado ATA con interior de espuma EPS. Herrajes de alta resistencia, pestillos empotrados y ruedas para fácil transporte.",
    img: "https://thumbs.static-thomann.de/thumb/thumb600x600/pics/prod/409664.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/GK61--gator-gk-61-semi-rigid-keyboard-case",

      musikproduktiv: "https://www.musik-produktiv.de/search"
    }
  },
  {
    id: 42,
    title: "SSL UF8 DAW Controller",
    title_es: "Controlador DAW SSL UF8",
    category: "accessories",
    price: 1199,
    rating: 4.7,
    reviews: 2345,
    badge: "premium",
    desc: "8-channel motorized fader controller with SSL's legendary console workflow. Touch-sensitive faders, MCU/HUI protocol, and premium build.",
    desc_es: "Controlador de faders motorizados de 8 canales con el legendario flujo de trabajo de consola SSL. Faders sensibles al tacto, protocolo MCU/HUI y construcción premium.",
    img: "https://thumbs.static-thomann.de/thumb/thumb600x600/pics/prod/508557.jpg",
    stores: {
      sweetwater: "https://www.sweetwater.com/store/detail/UF8control--solid-state-logic-uf8-advanced-daw-controller",
      thomann: "https://www.thomann.co.uk/ssl_uf8.htm",
      gear4music: "https://www.gear4music.com/Recording-and-Computers/SSL-UF8-Advanced-DAW-Controller/3QTK",

      musikproduktiv: "https://www.musik-produktiv.de/search",
      baxmusic: "https://www.bax-shop.co.uk/midi-studio-controllers/solid-state-logic-uf8-daw-controller"
    }
  },
  {
    id: 43,
    title: "Thomann Tres Cubano Deluxe",
    title_es: "Tres Cubano Deluxe Thomann",
    category: "tres",
    price: 469,
    rating: 4.6,
    reviews: 7,
    badge: "recommended",
    desc: "Professional-grade Cuban Tres with solid spruce top for exceptional clarity, sustain, and definition. No cutaway for maximum resonance. Mother of pearl inlays around sound hole, mahogany neck, walnut back and sides. The studio standard for authentic Cuban sound.",
    desc_es: "Tres Cubano de grado profesional con tapa sólida de abeto para claridad, sustain y definición excepcionales. Sin cutaway para máxima resonancia. Incrustaciones de nácar alrededor de la boca, mástil de caoba, fondo y aros de nogal. El estándar de estudio para sonido cubano auténtico.",
    img: "https://thumbs.static-thomann.de/thumb/thumb600x600/pics/prod/336551.jpg",
    stores: {
      thomann: "https://www.thomann.co.uk/thomann_tres_cubano_deluxe.htm"
    }
  },
  {
    id: 44,
    title: "Thomann Tres Cubano Standard Acacia",
    title_es: "Tres Cubano Standard Acacia Thomann",
    category: "tres",
    price: 279,
    rating: 4.7,
    reviews: 6,
    badge: null,
    desc: "Solid acacia top Cuban Tres. Maple neck, acacia fingerboard and bridge. Includes gig bag. Tuning: G-B-E or G-C-E. Excellent value for students and touring musicians.",
    desc_es: "Tres Cubano con tapa sólida de acacia. Mástil de arce, diapasón y puente de acacia. Incluye funda de transporte. Afinación: G-B-E o G-C-E. Excelente relación calidad-precio para estudiantes y músicos de gira.",
    img: "https://thumbs.static-thomann.de/thumb/thumb600x600/pics/prod/415715.jpg",
    stores: {
      thomann: "https://www.thomann.co.uk/thomann_tres_cubano_standard_acacia.htm"
    }
  },
  {
    id: 45,
    title: "Thomann Tres Cubano Standard CCW",
    title_es: "Tres Cubano Standard CCW Thomann",
    category: "tres",
    price: 333,
    rating: 4.3,
    reviews: 654,
    badge: null,
    desc: "Cuban Tres with cutaway for upper fret access. Cedar top, sapele back and sides, maple neck with acacia fingerboard. Built-in pickup system. Tuning: G-B-E or G-C-E. Great mid-range option with stage-ready electronics.",
    desc_es: "Tres Cubano con cutaway para acceso a trastes superiores. Tapa de cedro, fondo y aros de sapeli, mástil de arce con diapasón de acacia. Sistema de pastilla incorporado. Afinación: G-B-E o G-C-E. Excelente opción de gama media con electrónica lista para el escenario.",
    img: "https://thumbs.static-thomann.de/thumb/thumb600x600/pics/prod/357834.jpg",
    stores: {
      thomann: "https://www.thomann.co.uk/thomann_tres_cubano_standard_ccw.htm"
    }
  },
  {
    id: 46,
    title: "Thomann Tres Cubano Deluxe CCW",
    title_es: "Tres Cubano Deluxe CCW Thomann",
    category: "tres",
    price: 502,
    rating: 4.0,
    reviews: 25,
    badge: null,
    desc: "Premium Cuban Tres with cutaway. Cedar top, walnut back and sides, maple neck with acacia fingerboard. Built-in pickup system. The top-tier Thomann tres for players who need cutaway access and stage-ready electronics.",
    desc_es: "Tres Cubano premium con cutaway. Tapa de cedro, fondo y aros de nogal, mástil de arce con diapasón de acacia. Sistema de pastilla incorporado. El tres Thomann de más alta gama para músicos que necesitan acceso al cutaway y electrónica lista para el escenario.",
    img: "https://thumbs.static-thomann.de/thumb/thumb600x600/pics/prod/357835.jpg",
    stores: {
      thomann: "https://www.thomann.co.uk/thomann_tres_cubano_deluxe_ccw.htm"
    }
  }
];

const categoryInfo = {
  microphones: { name: "Microphones", icon: '<i class="fa-solid fa-microphone"></i>', desc: "Capture every nuance with the best microphones for studio, broadcast, and stage." },
  guitars: { name: "Guitars", icon: '<i class="fa-solid fa-guitar"></i>', desc: "From strats to acoustics, find your perfect axe." },
  strings: { name: "Strings", icon: '<i class="fa-solid fa-guitar"></i>', desc: "Guitars, basses, and everything with strings." },
  keyboards: { name: "Keyboards", icon: '<i class="fa-solid fa-keyboard"></i>', desc: "Pianos, synths, and controllers for every player." },
  interfaces: { name: "Interfaces", icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="5" width="22" height="14" rx="2"/><rect x="4" y="9" width="3" height="6" rx="0.8" fill="currentColor" opacity="0.6"/><circle cx="14" cy="12" r="3"/><circle cx="14" cy="12" r="1.2" fill="currentColor"/><rect x="19" y="10" width="1.5" height="4" rx="0.5" fill="currentColor" opacity="0.6"/></svg>', desc: "Connect your sound with pristine audio conversion." },
  monitors: { name: "Monitors", icon: '<i class="fa-solid fa-volume-high"></i>', desc: "Hear the truth with professional studio monitoring." },
  headphones: { name: "Headphones", icon: '<i class="fa-solid fa-headphones"></i>', desc: "Critical listening and mixing on the go." },
  plugins: { name: "Plugins", icon: '<i class="fa-solid fa-sliders"></i>', desc: "Virtual instruments and effects for your DAW." },
  percussion: { name: "Percussion", icon: '<i class="fa-solid fa-drum"></i>', desc: "Drum machines, electronic percussion, and acoustic drums." },
  tres: { name: "Cuban Tres", icon: '<i class="fa-solid fa-guitar"></i>', desc: "The heartbeat of Cuban music. Authentic tres guitars for studio and stage." },
  accessories: { name: "Accessories", icon: '<i class="fa-solid fa-wrench"></i>', desc: "Cables, stands, cases, and studio treatment." }
};

const storeNames = {
  thomann: "Thomann",
  pluginboutique: "Plugin Boutique",
  gear4music: "Gear4Music",
  sweetwater: "Sweetwater",
  musikproduktiv: "Musik Produktiv",
  amazon: "Amazon",
  reverb: "Reverb",
  andertons: "Andertons",
  baxmusic: "Bax Music",
  musicstore: "Music Store"
};

const storeColors = {
  thomann: "#3b82f6",
  pluginboutique: "#6366f1",
  gear4music: "#8b5cf6",
  sweetwater: "#6b7280",
  musikproduktiv: "#78716c",
  amazon: "#ff9900",
  reverb: "#d6562b",
  andertons: "#000000",
  baxmusic: "#c30067",
  musicstore: "#1a3a5c"
};

const storeIcons = {
  thomann: '<img src="img/thomann-icon.png" alt="Thomann" class="store-icon-img">',
  pluginboutique: '<img src="img/pluginboutique-icon.png" alt="Plugin Boutique" class="store-icon-img">',
  gear4music: '<img src="img/gear4music-icon.png" alt="Gear4Music" class="store-icon-img">',
  sweetwater: '<img src="img/sweetwater-icon.png" alt="Sweetwater" class="store-icon-img">',
  musikproduktiv: '<img src="img/musikproduktiv-icon.png" alt="Musik Produktiv" class="store-icon-img" style="width:28px">',
  amazon: '<i class="fa-brands fa-amazon" style="font-size:15px;"></i>',
  reverb: "<span style='font-weight:900;font-size:14px;line-height:1;display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;background:#d6562b;color:#fff;border-radius:2px;vertical-align:middle;'>R</span>",
  andertons: "<span style='font-weight:900;font-size:14px;line-height:1;display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;background:#000;color:#fff;border-radius:2px;vertical-align:middle;'>A</span>",
  baxmusic: "<span style='display:inline-flex;align-items:end;justify-content:center;gap:1px;width:16px;height:16px;background:#c30067;border-radius:2px;overflow:hidden;vertical-align:middle;padding:0 0 2px;'><span style='display:block;width:2px;height:6px;background:#000;border-radius:1px 1px 0 0;'></span><span style='display:block;width:2px;height:12px;background:#000;border-radius:1px 1px 0 0;'></span><span style='display:block;width:2px;height:9px;background:#000;border-radius:1px 1px 0 0;'></span><span style='display:block;width:2px;height:14px;background:#000;border-radius:1px 1px 0 0;'></span></span>",
  musicstore: '<img src="img/musicstore-icon.png" alt="Music Store" class="store-icon-img">'
};