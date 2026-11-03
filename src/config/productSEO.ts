/**
 * SEO & GEO metadata configuration for each product page.
 * Maps product IDs to keyword-optimized titles, descriptions, keywords, and structured FAQs.
 */
export const productSEO: Record<string, {
  title: string;
  description: string;
  keywords: string;
  faqs: { q: string; a: string }[];
}> = {
  "mono-cartons": {
    title: "Custom Mono Cartons Manufacturer & Exporter India — Pharma, FMCG & Cosmetics | ADBPack",
    description: "ISO 9001:2015 certified custom mono carton manufacturer & exporter in New Delhi, India. High-definition offset printing on SBS, Duplex & Kraft board with Spot UV, foil stamping & embossing. MOQ 2,000 sheets. Request a B2B quote.",
    keywords: "mono carton manufacturer India, mono carton exporter, custom printed mono cartons, pharmaceutical carton manufacturer India, cosmetic box manufacturer, FMCG carton packaging, folding carton supplier India, mono carton printing Delhi",
    faqs: [
      {
        q: "What paperboard grades does ADBPack use for custom mono cartons?",
        a: "ADBPack manufactures mono cartons using virgin SBS (Solid Bleached Sulfate / FBB) board for pharmaceuticals and cosmetics, coated Duplex board for cost-effective FMCG retail packaging, and natural Kraft board for eco-friendly brands, typically ranging from 250 GSM to 450 GSM."
      },
      {
        q: "What is the minimum order quantity (MOQ) for printed mono cartons?",
        a: "Our standard MOQ for custom printed mono cartons starts at 2,000 sheets, which yields several thousand cartons depending on your box flat size (ups per sheet). Pricing is customized based on dimensions, board GSM, and finishing."
      },
      {
        q: "Can ADBPack supply mono cartons for international export orders?",
        a: "Yes. ADBPack exports custom folding cartons from India to brands in the Middle East, Europe, North America, Africa, and South Asia. Cartons are shipped flat-packed, shrink-wrapped, and palletized in export-grade master shippers."
      }
    ]
  },
  "rigid-boxes": {
    title: "Luxury Rigid Box Manufacturer & Exporter India — Magnetic & Gift Boxes | ADBPack",
    description: "Premium rigid box manufacturer & exporter in India. Custom magnetic closure boxes, shoulder-neck boxes, drawer boxes & EVA foam/velvet inserts for cosmetics, perfumes, liquor, jewelry & corporate gifting. MOQ 1,000 boxes.",
    keywords: "rigid box manufacturer India, luxury rigid boxes exporter, magnetic closure box supplier, custom gift box manufacturer India, perfume box manufacturer, liquor presentation box, corporate gifting boxes Delhi, luxury packaging India",
    faqs: [
      {
        q: "What types of luxury rigid boxes does ADBPack manufacture?",
        a: "ADBPack produces magnetic flap closure boxes, collapsible rigid boxes, two-piece lift-off lid (telescope) boxes, shoulder-neck boxes, and slide drawer boxes using 1.5mm to 3mm greyboard wrapped in specialty art or textured papers."
      },
      {
        q: "Do you provide custom inserts inside rigid boxes?",
        a: "Yes. We engineer die-cut EVA foam, velvet-flocked trays, satin linings, molded pulp, and paperboard inserts tailored to hold glass bottles, cosmetics, electronics, or gift sets securely during international transit."
      },
      {
        q: "What is the MOQ and lead time for custom rigid boxes?",
        a: "Our MOQ for custom rigid boxes is 1,000 units. Production typically takes 10 to 15 business days after structural sample and artwork approval."
      }
    ]
  },
  "corrugated-boxes": {
    title: "Corrugated Box Manufacturer & Exporter India — 3-Ply, 5-Ply & E-Flute Boxes | ADBPack",
    description: "High-strength custom corrugated box manufacturer in New Delhi, India. 3-ply, 4-ply, 5-ply & E-flute printed mailer boxes and master shipping cartons. 100% recyclable. MOQ 2,000 sheets. Factory-direct B2B quotes.",
    keywords: "corrugated box manufacturer India, printed E-flute mailer boxes, 3 ply 5 ply corrugated cartons, e-commerce packaging manufacturer India, export master cartons, custom shipping boxes Delhi, corrugated box exporter",
    faqs: [
      {
        q: "Should I choose 3-ply, 5-ply, or E-flute corrugated boxes?",
        a: "Choose E-flute 3-ply boxes for D2C mailer boxes and retail display packaging where crisp offset print quality matters. Choose B-flute or C-flute 3-ply for standard shipping up to 10 kg, and 5-ply double-wall corrugated boxes for heavy industrial goods or international export master cartons."
      },
      {
        q: "Can you print inside and outside of corrugated mailer boxes?",
        a: "Yes. ADBPack offers full-color offset litho-laminated and flexographic printing on both the exterior and interior of corrugated boxes, along with matte, gloss, or aqueous protective coatings."
      },
      {
        q: "Are ADBPack corrugated boxes recyclable and export-compliant?",
        a: "All our corrugated boxes are 100% recyclable and manufactured under ISO 9001:2015 quality controls with high bursting factor (BF) and edge crush test (ECT) strength suitable for domestic and international sea/air freight."
      }
    ]
  },
  "pouches": {
    title: "Custom Printed Pouches Manufacturer & Exporter India — Stand-Up & Barrier Pouches | ADBPack",
    description: "Flexible packaging pouch manufacturer in India. Stand-up zipper pouches, 3-side seal, center-seal & spout pouches in multi-layer PET/PE, BOPP & foil laminates. Up to 9-color rotogravure printing. MOQ 5,000 pouches.",
    keywords: "stand up pouch manufacturer India, custom printed pouches exporter, flexible packaging manufacturer India, food grade laminated pouches, coffee tea protein pouch supplier, resealable zipper pouches India, rotogravure printed pouches",
    faqs: [
      {
        q: "What laminate structures are used for food and supplement pouches?",
        a: "ADBPack manufactures multi-layer barrier pouches using PET/PE, BOPP/PE, PET/AL/PE (aluminum foil), and metallized PET structures that protect food, coffee, tea, spices, and nutraceutical powders from moisture, oxygen, and UV light."
      },
      {
        q: "What pouch styles and closures are available?",
        a: "We produce stand-up pouches (doypacks), flat 3-side seal pouches, center-seal gusseted bags, and spout pouches for liquids, with options for press-to-close zippers, tear notches, euro hang holes, degassing valves, and clear windows."
      },
      {
        q: "What is the MOQ for custom printed flexible pouches?",
        a: "The minimum order quantity starts at 5,000 pouches per SKU with up to 9-color high-definition rotogravure printing in matte, gloss, or holographic finishes."
      }
    ]
  },
  "cold-seal-blisters": {
    title: "Cold Seal Blister Packaging Manufacturer India — Heat-Free Pharma & FMCG Cards | ADBPack",
    description: "Pressure-sensitive cold seal blister card manufacturer in India. Heat-free sealing for pharmaceuticals, nutraceuticals, confectionery & FMCG. Tamper-evident SBS & Duplex blister cards. MOQ 3,000 sheets.",
    keywords: "cold seal blister manufacturer India, cold seal blister cards, pharmaceutical blister packaging supplier, heat-free blister packaging, cohesive coated blister cards, tamper evident blister cards India",
    faqs: [
      {
        q: "How does cold seal blister packaging work?",
        a: "Cold seal blister cards use a specialized cohesive coating that bonds only to itself under pressure, requiring zero heat during sealing. This protects heat-sensitive pharmaceuticals, probiotics, chocolates, and biologics from thermal degradation."
      },
      {
        q: "What is the MOQ and board specification for cold seal blister cards?",
        a: "Our MOQ is 3,000 to 5,000 sheets printed on high-stiffness SBS or Duplex board, available with security features like holographic lamination, foil stamping, and tamper-evident perforations."
      }
    ]
  },
  "hot-seal-blisters": {
    title: "Hot Seal Blister Packaging Manufacturer India — Retail Blister Cards | ADBPack",
    description: "Custom heat-seal blister card manufacturer in India. Coated SBS & Duplex backing cards engineered for strong bond with PVC/PET thermoformed blisters. Ideal for electronics, hardware, toys, stationery & personal care.",
    keywords: "hot seal blister packaging India, blister backing card manufacturer, heat seal coated blister cards, retail hanging blister packaging, PVC PET blister card supplier India",
    faqs: [
      {
        q: "What products are best suited for hot seal blister packaging?",
        a: "Hot seal blister cards are ideal for retail hanging items such as toothbrushes, razors, batteries, electronics accessories, hardware tools, stationery, automotive parts, and cosmetics that require crystal-clear visibility and theft deterrence."
      },
      {
        q: "Do your blister backing cards bond with both PVC and PET blisters?",
        a: "Yes. We apply formulated heat-sealable blister varnish compatible with PVC, PET, and PETG thermoformed blisters to ensure a fiber-tearing tamper-evident seal."
      }
    ]
  },
  "self-adhesive-labels": {
    title: "Self Adhesive Label Manufacturer & Exporter India — Roll & Sheet Product Labels | ADBPack",
    description: "Custom self-adhesive label manufacturer in New Delhi, India. Waterproof BOPP, PET, PE & Chromo paper roll labels for automated bottling lines in pharma, cosmetics, food, beverage & logistics. MOQ 5,000 labels.",
    keywords: "self adhesive label manufacturer India, custom roll labels exporter, BOPP waterproof labels India, cosmetic bottle labels, pharmaceutical vial label printer, product sticker manufacturer Delhi",
    faqs: [
      {
        q: "Are ADBPack roll labels compatible with automatic labeling machines?",
        a: "Yes. We supply die-cut self-adhesive labels on standardized core rolls (76mm / 3-inch or custom cores) with specified unwind directions and gap spacing for high-speed automatic bottle, jar, vial, and pouch applicators."
      },
      {
        q: "Which label material is waterproof and oil-resistant?",
        a: "White, clear, and metallized BOPP (polypropylene), PE, and PET film labels with gloss/matte lamination or UV varnish are waterproof, oil-resistant, and smudge-proof—ideal for cosmetics, hair oils, beverages, and chilled products."
      },
      {
        q: "What adhesive types do you offer?",
        a: "We offer permanent acrylic, high-tack rubber hot-melt (for curved or low-surface-energy containers), deep-freeze adhesives, and clean-peel removable adhesives."
      }
    ]
  },
  "canister-boxes": {
    title: "Paper Tube & Canister Box Manufacturer India — Cylindrical Packaging Exporter | ADBPack",
    description: "Custom composite paper tube & cylindrical canister box manufacturer in India. Food-grade foil-lined canisters with tinplate, plastic or paper lids for tea, coffee, matcha, spices, cosmetics & liquor tubes. MOQ 2,000 canisters.",
    keywords: "canister box manufacturer India, paper tube packaging exporter, composite can manufacturer India, tea coffee canister packaging, cosmetic paper tube supplier, cylindrical gift box manufacturer",
    faqs: [
      {
        q: "Are paper tube canisters airtight and food-safe?",
        a: "Yes. Our composite canisters can be lined with food-grade aluminum foil barriers and sealed with peel-off membrane lids plus tinplate or plastic overcaps to keep tea, coffee, spices, dry fruits, and nutritional powders fresh."
      },
      {
        q: "What diameters and heights can ADBPack customize?",
        a: "We manufacture custom diameters from 50mm to 150mm and custom heights to match your fill weight or bottle dimensions, with 360-degree printed wraps, foil stamping, embossing, and velvet lamination. MOQ starts at 2,000 canisters."
      }
    ]
  },
  "promotional-tape-roll": {
    title: "Custom Printed BOPP Packaging Tape Manufacturer India — Branded Logo Tape | ADBPack",
    description: "Custom logo printed BOPP packaging tape manufacturer in India. Tamper-evident 48mm & 72mm branded carton sealing rolls in up to 3 colors with strong acrylic or hot-melt adhesive. MOQ 500 rolls.",
    keywords: "custom printed packaging tape India, branded logo BOPP tape manufacturer, tamper evident carton sealing tape, promotional adhesive tape exporter, printed parcel tape supplier Delhi",
    faqs: [
      {
        q: "What is the minimum order quantity for custom logo printed tape?",
        a: "Our MOQ for custom printed BOPP packaging tape is 500 rolls, available in 48mm (2-inch) and 72mm (3-inch) widths and 65m or custom roll lengths with up to 3-color brand printing."
      },
      {
        q: "Does branded tape help prevent pilferage during shipping?",
        a: "Yes. Custom printed BOPP tape acts as a tamper-evident seal because cannot be replaced with generic clear or brown tape if opened in transit, protecting e-commerce and export shipments."
      }
    ]
  }
};
