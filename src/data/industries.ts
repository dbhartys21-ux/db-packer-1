export interface IndustrySpecRow {
  packagingType: string;
  materialGrade: string;
  finishesAndFeatures: string;
  moq: string;
  bestFor: string;
}

export interface IndustryData {
  slug: string;
  title: string;
  shortTitle: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  heroSubtitle: string;
  aeoSummary: string;
  overview: string;
  heroImage: string;
  recommendedProductIds: string[];
  keyAdvantages: { title: string; desc: string }[];
  specTableTitle: string;
  specTable: IndustrySpecRow[];
  faqs: { q: string; a: string }[];
}

export const industriesData: IndustryData[] = [
  {
    slug: "pharmaceutical-packaging",
    title: "Pharmaceutical & Healthcare Packaging Manufacturer in India",
    shortTitle: "Pharmaceuticals & Healthcare",
    seoTitle: "Pharmaceutical Packaging Manufacturer & Exporter India — Mono Cartons, Blisters & Labels | ADBPack",
    seoDescription: "ISO 9001:2015 certified pharmaceutical packaging manufacturer in New Delhi, India. Custom printed pharma mono cartons, cold & hot seal blister cards, and high-tack vial/ampoule labels. Request a B2B quote.",
    seoKeywords: "pharmaceutical packaging manufacturer India, pharma mono carton manufacturer, blister packaging cards pharma, pharmaceutical label printer India, medicine box manufacturer Delhi, pharma packaging exporter India",
    heroSubtitle: "Precision-engineered mono cartons, tamper-evident blister cards, and high-tack vial labels produced under ISO 9001:2015 quality management.",
    aeoSummary: "ADBPack manufactures ISO 9001:2015 certified secondary and primary-adjacent pharmaceutical packaging in New Delhi, India—including virgin SBS mono cartons with Braille embossing and batch-coding zones, heat-free cold seal blister backing cards, hot seal blister packs, and high-tack roll labels for vials, bottles, and syringes.",
    overview: "Pharmaceutical and healthcare products demand zero-defect print clarity, batch traceability, tamper evidence, and structural resilience across cold-chain and ambient supply chains. Operating a 50,000 sq.ft automated facility in New Delhi with a capacity of 10 million+ units monthly, ADBPack partners with pharmaceutical formulators, contract manufacturers (CDMOs), and healthcare exporters across India, Asia, Africa, and the Middle East.",
    heroImage: "/assets/ind-logistics.png",
    recommendedProductIds: ["mono-cartons", "cold-seal-blisters", "hot-seal-blisters", "self-adhesive-labels", "corrugated-boxes"],
    keyAdvantages: [
      {
        title: "Sharp Dosage & Regulatory Typography",
        desc: "High-definition offset printing ensures crisp legibility for 4-point ingredient text, GS1/2D DataMatrix barcodes, and pharmacopoeia compliance."
      },
      {
        title: "Tamper-Evident & Anti-Counterfeit Options",
        desc: "Holographic strips, security micro-text, UV-visible inks, perforated tuck-in flaps, and fiber-tearing cold/hot seal blister coatings."
      },
      {
        title: "Unvarnished Batch-Coding Windows",
        desc: "Precision reserve zones for high-speed inkjet, laser, and thermal transfer printing of Batch No., Mfg. Date, Exp. Date, and MRP/GTIN."
      },
      {
        title: "High-Speed Auto-Cartoner Compatibility",
        desc: "Die-cut with accurate crease stiffness and pre-broken glue seams for smooth feeding on automatic horizontal and vertical cartoners."
      }
    ],
    specTableTitle: "Pharmaceutical Packaging Technical Specifications Matrix",
    specTable: [
      {
        packagingType: "Pharma Mono Cartons",
        materialGrade: "280–400 GSM Virgin SBS (FBB) / Coated Duplex Board",
        finishesAndFeatures: "Aqueous coating, Braille embossing, holographic foil, unvarnished inkjet zone",
        moq: "2,000 Sheets",
        bestFor: "Tablet strips, syrup bottles, ointments, ampoule trays, diagnostic kits"
      },
      {
        packagingType: "Cold Seal Blister Cards",
        materialGrade: "300–400 GSM SBS / Duplex with Cohesive Latex Coating",
        finishesAndFeatures: "Zero-heat pressure sealing, push-through or peelable backing",
        moq: "3,000 Sheets",
        bestFor: "Heat-sensitive biologics, probiotics, softgels, medical devices"
      },
      {
        packagingType: "Hot Seal Blister Cards",
        materialGrade: "300–450 GSM SBS / Duplex with Heat-Seal Varnish",
        finishesAndFeatures: "Bonds to PVC/PVDC/PET thermoformed blisters, tamper-evident",
        moq: "3,000 Sheets",
        bestFor: "OTC medicines, syringes, dental products, inhalers"
      },
      {
        packagingType: "Pharma Roll Labels",
        materialGrade: "Chromo Paper, Clear/White BOPP, PET (Roll form, 76mm core)",
        finishesAndFeatures: "High-tack mandrel adhesive for small-diameter vials, cryo/moisture resistant",
        moq: "5,000 Labels",
        bestFor: "Injectable vials, eye-drop bottles, syrup bottles, blood collection tubes"
      }
    ],
    faqs: [
      {
        q: "Can ADBPack manufacture pharmaceutical cartons compatible with automatic cartoning machines?",
        a: "Yes. Our pharmaceutical mono cartons are die-cut on precision flatbed die-cutters and folded on automated folder-gluers with controlled crease-recovery ratios, ensuring jam-free operation on high-speed blister and bottle cartoning lines."
      },
      {
        q: "Do you offer Braille embossing and anti-counterfeit finishes on medicine boxes?",
        a: "Yes. We provide Accubraille/rotary and flatbed Braille embossing, security holograms, micro-text, Spot UV, and tamper-evident glue flaps for domestic and export pharmaceutical packaging."
      },
      {
        q: "What is the minimum order quantity for custom pharma packaging?",
        a: "Our MOQ starts at 2,000 sheets for printed mono cartons, 3,000 sheets for blister backing cards, and 5,000 labels for roll-fed self-adhesive labels."
      }
    ]
  },
  {
    slug: "cosmetic-packaging",
    title: "Cosmetics, Beauty & Personal Care Packaging Manufacturer in India",
    shortTitle: "Cosmetics & Personal Care",
    seoTitle: "Cosmetic Packaging Manufacturer & Exporter India — Luxury Cartons, Rigid Boxes & Labels | ADBPack",
    seoDescription: "Custom cosmetic packaging manufacturer in India. Virgin SBS mono cartons with foil stamping & Spot UV, magnetic rigid gift boxes, paper tubes, and waterproof BOPP bottle labels. Request a quote.",
    seoKeywords: "cosmetic packaging manufacturer India, beauty box manufacturer, perfume rigid box supplier India, skincare mono carton printing, waterproof cosmetic bottle labels, custom makeup packaging exporter India",
    heroSubtitle: "Shelf-stopping SBS folding cartons, luxury magnetic rigid boxes, cylindrical paper tubes, and oil-proof BOPP labels for skincare, haircare, and fragrance brands.",
    aeoSummary: "ADBPack manufactures custom cosmetic and personal care packaging in India—specializing in 300–400 GSM virgin SBS mono cartons with soft-touch velvet lamination, hot foil stamping, Spot UV, and 3D embossing, alongside magnetic rigid gift boxes, cylindrical paper canisters, and waterproof/oil-resistant BOPP roll labels.",
    overview: "In beauty, skincare, haircare, and fragrance, the package defines perceived product efficacy before the customer ever opens the bottle. ADBPack helps D2C beauty startups and established cosmetic brands in India, the Middle East, Europe, and North America produce luxury retail cartons, PR gifting rigid boxes, and waterproof container labels with Pantone-matched color consistency.",
    heroImage: "/assets/ind-cosmetics.png",
    recommendedProductIds: ["mono-cartons", "rigid-boxes", "self-adhesive-labels", "canister-boxes", "corrugated-boxes"],
    keyAdvantages: [
      {
        title: "Luxury Tactile Finishes",
        desc: "Soft-touch velvet lamination, raised Spot UV, gold/rose-gold/silver hot foil stamping, drip-off texture effects, and multi-level embossing."
      },
      {
        title: "Internal Bottle & Dropper Protection",
        desc: "Integrated corrugated flutes (E/F-flute), die-cut neck holders, and EVA foam inserts that prevent glass serum and perfume bottles from breaking in transit."
      },
      {
        title: "Waterproof & Oil-Proof Roll Labels",
        desc: "Clear-on-clear, white, and metallic BOPP/PET labels that resist essential oils, shower moisture, and squeezing without peeling or ink smudging."
      },
      {
        title: "Sustainable & Plastic-Free Options",
        desc: "Uncoated Kraft boards, soy/vegetable-based inks, and biodegradable cylindrical paper tube canisters for clean-beauty brands."
      }
    ],
    specTableTitle: "Cosmetic & Fragrance Packaging Specification Guide",
    specTable: [
      {
        packagingType: "Skincare & Serum Mono Cartons",
        materialGrade: "300–400 GSM Virgin SBS / Metallized PET Laminated Board",
        finishesAndFeatures: "Velvet matte lamination, hot foil stamping, Spot UV, internal bottle flute insert",
        moq: "2,000 Sheets",
        bestFor: "Face serums, creams, sunscreens, lipsticks, essential oils, hair growth oils"
      },
      {
        packagingType: "Perfume & Gift Set Rigid Boxes",
        materialGrade: "1.8mm–2.5mm Greyboard + 150 GSM Art/Textured Wrap",
        finishesAndFeatures: "Magnetic closure or shoulder-neck box, die-cut EVA foam / velvet cavity",
        moq: "1,000 Boxes",
        bestFor: "Eau de Parfum bottles, festival beauty kits, influencer PR boxes"
      },
      {
        packagingType: "Oil & Water-Resistant Labels",
        materialGrade: "50–60 Micron Clear, White, or Silver Metallized BOPP / PE",
        finishesAndFeatures: "Matte/Gloss UV varnish, foil accents, permanent acrylic adhesive",
        moq: "5,000 Labels",
        bestFor: "Shampoo bottles, body washes, cosmetic jars, dropper bottles"
      },
      {
        packagingType: "Eco Paper Tube Canisters",
        materialGrade: "Spiral-wound Kraft + Printed Art Paper Wrap (50–120mm dia.)",
        finishesAndFeatures: "360° offset print, foil stamping, rolled paper or tinplate lid",
        moq: "2,000 Canisters",
        bestFor: "Perfume bottles, bath salts, organic skincare jars, candles"
      }
    ],
    faqs: [
      {
        q: "How do you prevent glass serum and perfume bottles from breaking inside mono cartons?",
        a: "We design mono cartons with integrated inner E-flute corrugated liners or custom die-cut cardboard partitions (neck-lock inserts) that suspend the glass bottle away from the outer walls during e-commerce shipping."
      },
      {
        q: "Which label material will not peel or smudge when exposed to cosmetic oils?",
        a: "We recommend BOPP (Biaxially Oriented Polypropylene) or PET film labels laminated with a protective matte or gloss film. Unlike paper stickers, BOPP labels are 100% waterproof and impervious to carrier oils, alcohols, and bathroom humidity."
      },
      {
        q: "Can we order matching mono cartons, rigid PR boxes, and bottle labels from ADBPack?",
        a: "Yes. Manufacturing your folding cartons, rigid gift boxes, labels, and printed D2C mailer boxes under one roof at ADBPack guarantees identical Pantone color matching across your entire brand line."
      }
    ]
  },
  {
    slug: "nutraceutical-supplement-packaging",
    title: "Nutraceutical, Protein & Fitness Supplement Packaging Manufacturer",
    shortTitle: "Fitness Supplements & Nutraceuticals",
    seoTitle: "Nutraceutical & Supplement Packaging Manufacturer India — Pouches, Cartons & Canisters | ADBPack",
    seoDescription: "Custom packaging for protein powders, vitamins, gummies & Ayurvedic supplements in India. High-barrier stand-up pouches, composite canisters, blister packs & holographic mono cartons.",
    seoKeywords: "nutraceutical packaging manufacturer India, protein powder pouch supplier, supplement packaging boxes India, vitamin blister packaging, composite canister protein, ayurvedic packaging manufacturer",
    heroSubtitle: "High-barrier laminated pouches, composite canisters, moisture-lock blister cards, and metallic mono cartons built for sports nutrition and wellness brands.",
    aeoSummary: "ADBPack supplies custom packaging for nutraceutical, sports nutrition, and Ayurvedic brands—producing multi-layer PET/AL/PE barrier stand-up pouches with resealable zippers, foil-lined cylindrical paper canisters, holographic mono cartons, cold seal blister packs, and wrap-around HDPE jar labels.",
    overview: "Whey proteins, effervescent tablets, gummies, herbal extracts, and vitamin capsules are highly hygroscopic—meaning even minor moisture or oxygen ingress causes clumping, oxidation, and potency loss. ADBPack engineers high-barrier flexible pouches, airtight composite canisters, and metallic retail cartons that protect shelf life while commanding attention in gyms, pharmacies, and online marketplaces.",
    heroImage: "/assets/ind-fitness.png",
    recommendedProductIds: ["pouches", "canister-boxes", "mono-cartons", "self-adhesive-labels", "cold-seal-blisters"],
    keyAdvantages: [
      {
        title: "Zero-Moisture Aluminum & Metallized Barriers",
        desc: "3-layer and 4-layer PET/AL/PE and MET-PET pouch laminates block humidity, oxygen, and UV light to prevent powder caking."
      },
      {
        title: "Anti-Counterfeit Holographic Security",
        desc: "Protect high-value sports nutrition and supplement SKUs from counterfeiting with custom holographic lamination, scratch codes, and 3D foil."
      },
      {
        title: "Heavy-Duty Zippers & Scoop-Friendly Openings",
        desc: "Wide-mouth stand-up doypacks with powder-proof press-to-close zippers and laser-scored tear notches for daily consumer use."
      },
      {
        title: "Wrap-Around Jar & Tub Labels",
        desc: "Large-format metallic BOPP labels with high-tack hot-melt adhesive engineered to stick firmly to curved HDPE protein tubs."
      }
    ],
    specTableTitle: "Nutraceutical & Sports Supplement Packaging Specifications",
    specTable: [
      {
        packagingType: "Stand-Up Protein & Superfood Pouches",
        materialGrade: "PET / Aluminum Foil (AL) or MET-PET / Food-Grade PE",
        finishesAndFeatures: "Up to 9-color rotogravure, matte/spot gloss, powder-proof zipper, tear notch",
        moq: "5,000 Pouches",
        bestFor: "Whey protein (500g–2kg), creatine, collagen, greens powders, hydration mixes"
      },
      {
        packagingType: "Composite Paper Canisters",
        materialGrade: "Rigid Kraft Tube + Food-Grade Aluminum Foil Inner Liner",
        finishesAndFeatures: "Peel-off aluminum membrane + tinplate/plastic lid, 360° metallic print",
        moq: "2,000 Canisters",
        bestFor: "Pre-workout powders, herbal teas, effervescent या gummy supplements"
      },
      {
        packagingType: "Nutraceutical Mono Cartons",
        materialGrade: "320–400 GSM SBS / Metallized Polyester Laminated Board",
        finishesAndFeatures: "Holographic lamination, drip-off UV, embossing, security seal flaps",
        moq: "2,000 Sheets",
        bestFor: "Capsule bottles, vitamin strips, energy bars, Ayurvedic drops"
      },
      {
        packagingType: "HDPE Tub & Bottle Roll Labels",
        materialGrade: "White / Silver Metallized BOPP with High-Tack Adhesive",
        finishesAndFeatures: "Scuff-resistant UV coating, metallic foil highlights, waterproof",
        moq: "5,000 Labels",
        bestFor: "1kg–5lb protein jars, vitamin gummy bottles, shaker bottles"
      }
    ],
    faqs: [
      {
        q: "Why are flexible stand-up pouches replacing plastic tubs for protein and supplement brands?",
        a: "Multi-layer barrier stand-up pouches reduce packaging cost by 40–60%, cut warehouse storage and freight volume by up to 80% before filling, and provide equal moisture/oxygen barrier protection via aluminum foil or metallized PET inner layers."
      },
      {
        q: "Do your labels stick reliably to low-surface-energy HDPE supplement jars?",
        a: "Yes. Standard acrylic adhesives can lift at the edges on HDPE/PP plastic tubs; we use high-tack rubber hot-melt or specialized permanent adhesives formulated specifically for curved polyolefin supplement containers."
      }
    ]
  },
  {
    slug: "liquor-spirits-packaging",
    title: "Liquor, Wine & Spirits Packaging Manufacturer & Exporter",
    shortTitle: "Liquor, Spirits & Beverages",
    seoTitle: "Liquor & Spirits Packaging Manufacturer India — Rigid Boxes, Canisters & Cartons | ADBPack",
    seoDescription: "Custom liquor packaging manufacturer & exporter in India. High-strength fluted mono cartons, cylindrical composite bottle tubes & luxury rigid boxes. Trusted by distilleries in India & Nepal.",
    seoKeywords: "liquor packaging manufacturer India, whisky box manufacturer, spirits canister tube supplier, wine gift box manufacturer India, distillery carton exporter, Shree Distillery packaging partner",
    heroSubtitle: "Heavy-duty auto-lock bottom cartons, composite cylindrical bottle tubes, and magnetic rigid presentation boxes trusted by leading distilleries.",
    aeoSummary: "ADBPack is a proven liquor and spirits packaging manufacturer and exporter in New Delhi, India—supplying high-burst-strength mono cartons, litho-laminated fluted cartons, cylindrical composite canisters, and luxury rigid presentation boxes to distilleries in India and international markets including Shree Distillery Limited in Nepal.",
    overview: "Glass liquor bottles (180ml nip, 375ml pint, 750ml quart, and 1000ml) require packaging that combines high bottom-load strength with unmistakable shelf prestige. With a proven export track record—including supplying flagship liquor packaging to Shree Distillery Limited in Nepal—ADBPack manufactures metallic, embossed, and foil-stamped cartons and canisters engineered for high-speed bottling lines.",
    heroImage: "/assets/ind-fmcg.png",
    recommendedProductIds: ["mono-cartons", "canister-boxes", "rigid-boxes", "self-adhesive-labels", "corrugated-boxes"],
    keyAdvantages: [
      {
        title: "Proven Distillery Export Partner",
        desc: "Trusted by international beverage brands including Shree Distillery Limited (Nepal) for consistent print quality, structural strength, and timely cross-border delivery."
      },
      {
        title: "Crash-Lock / Auto-Bottom Engineering",
        desc: "Reinforced auto-lock bottom cartons and E-flute litho-laminated boxes engineered to support heavy 750ml and 1L glass bottles without base blowout."
      },
      {
        title: "Metallic, Holographic & Tactile Prestige",
        desc: "MET-PET silver/gold board lamination, deep 3D embossing, drip-off texture UV, and multi-foil stamping for premium whisky, gin, rum, and vodka SKUs."
      },
      {
        title: "Ice-Bucket Resistant Bottle Labels",
        desc: "Wet-strength textured paper and clear/metallic BOPP bottle labels that stay intact in chilled storage and ice buckets."
      }
    ],
    specTableTitle: "Liquor & Spirits Packaging Technical Specifications",
    specTable: [
      {
        packagingType: "750ml / 180ml Liquor Mono Cartons",
        materialGrade: "350–450 GSM High-BF Duplex / SBS or E-Flute Litho-Laminated",
        finishesAndFeatures: "MET-PET lamination, drip-off UV, gold foil stamping, crash-lock bottom",
        moq: "2,000 Sheets",
        bestFor: "Whisky, rum, vodka, gin retail cartons (180ml, 375ml, 750ml)"
      },
      {
        packagingType: "Cylindrical Bottle Canister Tubes",
        materialGrade: "Heavy-Duty Spiral Kraft Core + Printed Art/Textured Wrap",
        finishesAndFeatures: "Tinplate base and cap, foil stamping, velvet touch, 75–110mm diameter",
        moq: "2,000 Canisters",
        bestFor: "Single malt whisky, craft gin, reserve wines, duty-free editions"
      },
      {
        packagingType: "Luxury Collector Rigid Boxes",
        materialGrade: "2.5mm–3.0mm Greyboard + Textured Paper / Velvet Lining",
        finishesAndFeatures: "Magnetic clamshell or hinged neck box with custom EVA foam bottle + glass recess",
        moq: "1,000 Boxes",
        bestFor: "Limited-edition spirits, corporate gifting sets with tasting glasses"
      },
      {
        packagingType: "5-Ply Export Master Shippers",
        materialGrade: "5-Ply High-ECT Virgin Kraft Corrugated + Partitions",
        finishesAndFeatures: "Die-cut 6-cell / 12-cell interlocking bottle dividers, pallet-ready",
        moq: "2,000 Boxes",
        bestFor: "Distillery-to-distributor palletized transport & export freight"
      }
    ],
    faqs: [
      {
        q: "Does ADBPack export liquor packaging outside India?",
        a: "Yes. ADBPack actively exports custom liquor cartons, labels, and bottle packaging from New Delhi, India—including supplying flagship brand packaging to Shree Distillery Limited in Nepal as well as beverage brands across South Asia, the Middle East, and Africa."
      },
      {
        q: "How do you prevent heavy 750ml glass bottles from breaking through the bottom of a carton?",
        a: "For 750ml and 1000ml glass bottles, we use either 400+ GSM high-stiffness board with a reinforced Himes/crash-lock bottom or litho-laminated E-flute micro-corrugated board that provides superior vertical load capacity."
      }
    ]
  },
  {
    slug: "food-confectionery-packaging",
    title: "Food, Tea, Coffee & Confectionery Packaging Manufacturer in India",
    shortTitle: "Food, Tea, Coffee & Confectionery",
    seoTitle: "Food & Confectionery Packaging Manufacturer India — Pouches, Cartons & Canisters | ADBPack",
    seoDescription: "Custom food-grade packaging manufacturer in India. Stand-up barrier pouches, tea & coffee paper canisters, bakery/sweet rigid boxes, and FMCG mono cartons. ISO 9001:2015 certified.",
    seoKeywords: "food packaging manufacturer India, tea canister box manufacturer, coffee pouch supplier India, confectionery box printer, dry fruit rigid gift boxes, bakery mono cartons Delhi",
    heroSubtitle: "Food-safe virgin SBS cartons, aroma-locking laminated pouches, and airtight foil-lined canisters for tea, coffee, spices, snacks, and artisanal confectionery.",
    aeoSummary: "ADBPack manufactures custom food, beverage, and confectionery packaging in India—offering virgin food-grade SBS mono cartons, multi-layer aroma-lock stand-up pouches, aluminum-foil-lined cylindrical canisters for tea and coffee, cold seal chocolate blister packs, and luxury rigid gift boxes for mithai, dry fruits, and chocolates.",
    overview: "Food and beverage packaging must preserve aroma, crunch, and hygiene while standing out in crowded supermarket aisles and quick-commerce apps. ADBPack supplies odour-free printed cartons, moisture-barrier flexible pouches, and artisanal canisters to FMCG food processors, specialty tea/coffee estates, spice exporters, and gourmet confectionery brands.",
    heroImage: "/assets/ind-food.png",
    recommendedProductIds: ["pouches", "canister-boxes", "mono-cartons", "rigid-boxes", "self-adhesive-labels"],
    keyAdvantages: [
      {
        title: "Aroma & Freshness Barrier Engineering",
        desc: "Multi-layer laminates and foil-lined canisters keep moisture and oxygen out while locking essential oils and roasted aromas inside."
      },
      {
        title: "Virgin Food-Safe Paperboards",
        desc: "Low-odour, virgin-fiber SBS and natural Kraft boards printed with food-safe, non-tainting inks and aqueous coatings."
      },
      {
        title: "Freezer, Chilled & Dry Storage Ready",
        desc: "Poly-coated cartons and moisture-resistant BOPP labels that hold their structure in refrigerated and deep-freeze retail displays."
      },
      {
        title: "Festive & Gourmet Gifting Expertise",
        desc: "Custom partitioned rigid boxes and metallic canisters for chocolates, dry fruits, specialty teas, and festive corporate hampers."
      }
    ],
    specTableTitle: "Food, Tea, Coffee & Confectionery Packaging Matrix",
    specTable: [
      {
        packagingType: "Tea, Coffee & Spice Canisters",
        materialGrade: "Spiral Kraft Tube + Food-Grade Aluminum Foil Inner Lining",
        finishesAndFeatures: "Airtight peel-off membrane + tinplate/plastic lid, matte/foil outer wrap",
        moq: "2,000 Canisters",
        bestFor: "Loose-leaf tea, specialty coffee, matcha, spices, dry fruits, cookies"
      },
      {
        packagingType: "Resealable Food Pouches",
        materialGrade: "PET/PE, BOPP/MET-PET/PE, or PET/AL/PE Food-Grade Laminate",
        finishesAndFeatures: "Up to 9-color rotogravure, press-to-close zipper, clear product window",
        moq: "5,000 Pouches",
        bestFor: "Snacks, namkeen, roasted coffee, dry fruits, spices, ready-to-eat mixes"
      },
      {
        packagingType: "FMCG Food Mono Cartons",
        materialGrade: "280–380 GSM Virgin SBS / Kraft / Duplex Board",
        finishesAndFeatures: "PVC window patching, aqueous food-safe coating, auto-bottom or tuck-end",
        moq: "2,000 Sheets",
        bestFor: "Cereal boxes, tea bag cartons, spice boxes, frozen foods, pasta, chocolates"
      },
      {
        packagingType: "Gourmet Confectionery Rigid Boxes",
        materialGrade: "2.0mm Greyboard + Art/Textured Paper + Food-Safe Cavity Tray",
        finishesAndFeatures: "Magnetic closure, gold foil stamping, partitioned chocolate/dry-fruit tray",
        moq: "1,000 Boxes",
        bestFor: "Artisanal chocolates, baklava, luxury mithai, gourmet gift hampers"
      }
    ],
    faqs: [
      {
        q: "Are your paper tube canisters suitable for direct or secondary packaging of tea and coffee?",
        a: "Yes. Our canisters feature a food-grade aluminum foil interior liner and can be fitted with a hermetic peel-off membrane lid plus a tinplate overcap to protect tea leaves, coffee beans, and spices from humidity and aroma loss."
      },
      {
        q: "Can you add transparent windows to food mono cartons and pouches?",
        a: "Yes. We offer die-cut PVC/PET window patching on mono cartons and demetallized clear viewing windows on stand-up pouches so shoppers can see the product inside."
      }
    ]
  },
  {
    slug: "ecommerce-d2c-packaging",
    title: "E-Commerce, D2C & Retail Logistics Packaging Manufacturer",
    shortTitle: "E-Commerce & D2C Brands",
    seoTitle: "E-Commerce & D2C Packaging Manufacturer India — Printed Mailer Boxes, Shippers & Tape | ADBPack",
    seoDescription: "Custom D2C & e-commerce packaging manufacturer in India. Inside-out printed E-flute mailer boxes, 3-ply/5-ply corrugated shipping boxes, rigid unboxing kits & custom logo BOPP tape.",
    seoKeywords: "D2C packaging manufacturer India, custom printed mailer boxes India, e-commerce shipping boxes manufacturer, branded packaging tape supplier, subscription box manufacturer Delhi",
    heroSubtitle: "Inside-out printed E-flute mailer boxes, crush-resistant 3-ply & 5-ply shippers, and tamper-evident branded tapes designed for memorable unboxing and zero transit damage.",
    aeoSummary: "ADBPack manufactures custom e-commerce and D2C packaging in New Delhi, India—including inside-out printed E-flute corrugated mailer boxes, high-ECT 3-ply and 5-ply shipping cartons, luxury rigid subscription boxes, product labels, and custom logo-printed BOPP tamper-evident packaging tape.",
    overview: "For D2C and e-commerce brands, the shipping box is the only physical store your customer visits. At the same time, packages must survive courier sorting hubs, stacking loads, and last-mile handling. ADBPack produces litho-laminated E-flute mailer boxes, heavy-duty corrugated shippers, and branded BOPP tapes that cut transit damage while turning every delivery into social-media-worthy unboxing.",
    heroImage: "/assets/ind-ecommerce.png",
    recommendedProductIds: ["corrugated-boxes", "rigid-boxes", "promotional-tape-roll", "self-adhesive-labels", "pouches"],
    keyAdvantages: [
      {
        title: "Inside-Out Unboxing Print",
        desc: "Print your brand colors, QR codes, and welcome messages inside the box lid while keeping a durable protective exterior."
      },
      {
        title: "High Burst & Edge Crush Strength",
        desc: "Engineered 3-ply (B/C/E-flute) and 5-ply corrugated board grades that prevent crushed corners during courier and air-cargo handling."
      },
      {
        title: "Flat-Shipped to Save 80% Warehouse Space",
        desc: "Self-locking roll-end tuck-top (RETT) mailer boxes and RSC shippers arrive flat-packed and assemble in seconds without glue."
      },
      {
        title: "Tamper-Evident Branded BOPP Tape",
        desc: "Custom 3-color printed packaging tape seals master cartons securely and deters pilferage across third-party logistics (3PL) networks."
      }
    ],
    specTableTitle: "E-Commerce & D2C Packaging Comparison Matrix",
    specTable: [
      {
        packagingType: "Printed E-Flute D2C Mailer Boxes",
        materialGrade: "3-Ply E-Flute Corrugated + 250 GSM Duplex/Kraft Top Liner",
        finishesAndFeatures: "Offset litho-laminated, inside-out printing, matte/gloss lamination, self-locking",
        moq: "2,000 Sheets",
        bestFor: "D2C subscription boxes, apparel, cosmetics kits, electronics, footwear"
      },
      {
        packagingType: "3-Ply & 5-Ply Shipping Cartons (RSC)",
        materialGrade: "150–250 GSM High-BF Virgin/Recycled Kraft Liners (B/C Flute)",
        finishesAndFeatures: "1–2 color flexo logo & handling icons, high stacking ECT, 100% recyclable",
        moq: "2,000 Boxes",
        bestFor: "Amazon FBA / Quick-Commerce replenishment, bulk B2B shipments, heavy goods"
      },
      {
        packagingType: "Custom Printed BOPP Packaging Tape",
        materialGrade: "48mm / 72mm BOPP Film + High-Tack Acrylic or Hot-Melt Adhesive",
        finishesAndFeatures: "Up to 3-color brand logo & tamper-warning print, 65m or custom length",
        moq: "500 Rolls",
        bestFor: "Sealing e-commerce parcels & master export cartons with tamper evidence"
      },
      {
        packagingType: "Shipping & Barcode Roll Labels",
        materialGrade: "Chromo Paper / Direct Thermal / Waterproof BOPP on Rolls",
        finishesAndFeatures: "Strong permanent adhesive for corrugated kraft surfaces, smudge-proof",
        moq: "5,000 Labels",
        bestFor: "SKU barcode stickers, thank-you seals, return address & hazard labels"
      }
    ],
    faqs: [
      {
        q: "What is the difference between an E-flute mailer box and a standard 3-ply shipping carton?",
        a: "An E-flute mailer box uses a thin, dense 1.5mm flute profile laminated with an offset-printed sheet—giving magazine-sharp graphics and a rigid, self-locking unboxing experience. A standard 3-ply RSC shipping carton uses thicker B or C flutes (3–4mm) with flexo printing for economical outer transit protection."
      },
      {
        q: "Can small D2C brands start with branded packaging tape before ordering custom boxes?",
        a: "Yes. Custom logo-printed BOPP tape has an MOQ of just 500 rolls and immediately transforms plain brown corrugated boxes into branded, tamper-evident parcels."
      }
    ]
  }
];

export const getIndustryBySlug = (slug: string): IndustryData | undefined =>
  industriesData.find((ind) => ind.slug === slug);

