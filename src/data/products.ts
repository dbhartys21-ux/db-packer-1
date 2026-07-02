export interface Product {
  id: string;
  title: string;
  category: string;
  desc: string;
  fullDesc: string;
  img: string;
  gallery: string[];
  features: string[];
  specifications: Record<string, string>;
}

export const products: Product[] = [
  {
    id: "corrugated-boxes",
    title: "Corrugated Boxes",
    category: "Boxes",
    desc: "Strong, durable & customizable boxes for safe packaging of goods of all sizes.",
    fullDesc: "Our heavy-duty corrugated boxes are engineered to provide maximum protection for your products during transit, storage, and handling. Manufactured from high-quality kraft paper, these boxes offer superior stacking strength and crush resistance.",
    img: "/assets/boxes.png",
    gallery: ["/assets/boxes.png", "/assets/boxes.png", "/assets/boxes.png"], // Placeholders for gallery
    features: [
      "High crush resistance and stacking strength",
      "100% recyclable and eco-friendly",
      "Available in Single, Double, and Triple Wall",
      "Custom printing options available for branding",
      "Shipped flat to save storage space"
    ],
    specifications: {
      "Material": "Kraft Paper / Fluting Medium",
      "Flute Types": "A, B, C, E, or Double-wall (BC, AB)",
      "Bursting Strength": "10 - 45 kg/cm²",
      "Color Options": "Brown Kraft, White Top",
      "Customization": "Size, Print, Die-cut available"
    }
  },
  {
    id: "stretch-film-rolls",
    title: "Stretch Film Rolls",
    category: "Films",
    desc: "High-performance stretch wraps for secure bundling and palletizing.",
    fullDesc: "Our high-performance stretch film is designed for securing pallets and bundling items together. It offers excellent puncture resistance, superior stretchability, and strong cling, ensuring your loads remain tight and secure during transport.",
    img: "/assets/stretch-film.png",
    gallery: ["/assets/stretch-film.png", "/assets/stretch-film.png"],
    features: [
      "High puncture and tear resistance",
      "Up to 300% stretchability for maximum yield",
      "Excellent clarity for barcode reading",
      "Leaves no sticky residue on products",
      "Quiet release during application"
    ],
    specifications: {
      "Material": "LLDPE (Linear Low-Density Polyethylene)",
      "Thickness": "12 - 35 Microns",
      "Width": "100mm - 500mm",
      "Color": "Transparent / Black / Custom",
      "Type": "Hand Roll & Machine Roll"
    }
  },
  {
    id: "bubble-wrap-rolls",
    title: "Bubble Wrap Rolls",
    category: "Protection",
    desc: "Protective cushioning for fragile & delicate items during transit.",
    fullDesc: "Premium bubble wrap offering superior cushioning and protection for fragile items. The air-filled bubbles absorb shocks and impacts, keeping your delicate products safe from damage during shipping and handling.",
    img: "/assets/bubble-wrap.png",
    gallery: ["/assets/bubble-wrap.png", "/assets/bubble-wrap.png"],
    features: [
      "Excellent shock absorption and cushioning",
      "Lightweight to reduce shipping costs",
      "Flexible material conforms to any shape",
      "Water-resistant and dust-proof",
      "Available in anti-static variants for electronics"
    ],
    specifications: {
      "Material": "LDPE (Low-Density Polyethylene)",
      "Bubble Diameter": "10mm (Small) / 25mm (Large)",
      "Roll Width": "0.5m, 1m, 1.5m",
      "Roll Length": "100m standard",
      "Color": "Clear (Standard), Pink (Anti-static)"
    }
  },
  {
    id: "packing-tape",
    title: "Packing Tape",
    category: "Tapes",
    desc: "High-adhesion tapes for secure sealing of cartons and packages.",
    fullDesc: "Industrial-grade BOPP packing tape featuring strong adhesion and high tensile strength. Perfect for sealing cartons securely, this tape withstands temperature variations and rough handling.",
    img: "/assets/tape.png", // Fallback if missing: use stretch-film or similar
    gallery: ["/assets/tape.png"],
    features: [
      "High tack acrylic or hot-melt adhesive",
      "Resistant to splitting and tearing",
      "Works in extreme temperature conditions",
      "Compatible with all standard tape dispensers",
      "Custom logo printing available"
    ],
    specifications: {
      "Material": "BOPP (Biaxially Oriented Polypropylene)",
      "Width": "24mm, 48mm, 72mm",
      "Length": "65m, 100m, 1000m (Machine)",
      "Thickness": "38 - 55 Microns",
      "Colors": "Clear, Brown, Custom Print"
    }
  },
  {
    id: "pp-strapping-roll",
    title: "PP Strapping Roll",
    category: "Strapping",
    desc: "Heavy-duty strapping for load securement and reinforcement.",
    fullDesc: "High-tensile Polypropylene (PP) strapping designed for medium to heavy-duty unitizing and palletizing. It offers an economical and safe alternative to steel strapping.",
    img: "/assets/strapping.png",
    gallery: ["/assets/strapping.png"],
    features: [
      "High break strength and elasticity",
      "Safe to handle (no sharp edges like steel)",
      "Rust and corrosion free",
      "Compatible with manual, semi-auto, and auto machines",
      "Embossed surface for better joint strength"
    ],
    specifications: {
      "Material": "Polypropylene (PP)",
      "Width": "9mm - 19mm",
      "Thickness": "0.5mm - 0.9mm",
      "Core Size": "200mm, 280mm, 406mm",
      "Break Strength": "Up to 300 kg"
    }
  },
  {
    id: "zip-lock-pouches",
    title: "Zip Lock Pouches",
    category: "Pouches",
    desc: "Durable pouches for safe storage, packaging, and retail display.",
    fullDesc: "Resealable zip lock pouches providing an airtight seal to keep contents fresh and secure. Ideal for retail packaging, hardware, food items, and document storage.",
    img: "/assets/pouches.png",
    gallery: ["/assets/pouches.png"],
    features: [
      "Airtight and moisture-proof seal",
      "Easy open and close zip mechanism",
      "High clarity for product visibility",
      "Food-grade and non-toxic materials",
      "Stand-up pouch variants available"
    ],
    specifications: {
      "Material": "LDPE / LLDPE",
      "Thickness": "40 - 100 Microns",
      "Closure Type": "Press-to-close zipper",
      "Sizes": "Custom sizes available",
      "Printing": "Up to 8 colors rotogravure"
    }
  },
  {
    id: "mailing-envelopes",
    title: "Mailing Envelopes",
    category: "Envelopes",
    desc: "Tear-resistant, waterproof envelopes for secure document and small item shipping.",
    fullDesc: "Poly mailers and courier bags offering a lightweight, secure, and waterproof solution for e-commerce shipping. Features a tamper-evident self-seal adhesive strip.",
    img: "/assets/boxes.png", // reusing image
    gallery: ["/assets/boxes.png"],
    features: [
      "Tear and puncture resistant",
      "Waterproof and opaque for privacy",
      "High-tack tamper-evident seal",
      "POD jacket option available",
      "Lightweight to minimize shipping costs"
    ],
    specifications: {
      "Material": "Co-extruded Polyethylene",
      "Thickness": "50 - 75 Microns",
      "Adhesive": "Hot-melt self-seal strip",
      "Sizes": "Multiple standard e-commerce sizes",
      "Customization": "Brand printing available"
    }
  },
  {
    id: "foam-sheets",
    title: "Foam Sheets",
    category: "Protection",
    desc: "Lightweight, non-abrasive foam for surface protection and void fill.",
    fullDesc: "EPE (Expanded Polyethylene) foam sheets provide excellent surface protection against scratches and impacts. Ideal for wrapping electronics, glassware, and polished surfaces.",
    img: "/assets/bubble-wrap.png", // reusing image
    gallery: ["/assets/bubble-wrap.png"],
    features: [
      "Non-abrasive surface protects polished goods",
      "Excellent thermal insulation properties",
      "CFC-free and environmentally friendly",
      "Highly flexible and easy to cut",
      "Moisture and chemical resistant"
    ],
    specifications: {
      "Material": "EPE (Expanded Polyethylene)",
      "Thickness": "1mm - 100mm",
      "Density": "18 - 35 kg/m³",
      "Format": "Rolls, Sheets, or Custom Die-cut",
      "Color": "White, Pink (Anti-static)"
    }
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};
