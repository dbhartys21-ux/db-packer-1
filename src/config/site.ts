/**
 * Single source of truth for business identity (NAP: Name, Address, Phone).
 * Keep this identical to Google Business Profile, IndiaMART, LinkedIn, etc.
 * Search engines and AI answer engines cross-check these details across the web.
 */
export const SITE_URL = "https://adbpack.com";

export const SITE_CONFIG = {
  name: "ADBPack",
  legalName: "ADBPack",
  tagline: "Excellence in Packaging Solutions",
  url: SITE_URL,
  logo: `${SITE_URL}/fevicon.png`,
  foundingYear: "2018",
  founder: "Latika Upadhyay",
  contact: {
    // No public street address: area-level only (service-area business)
    address: [
      "Trilokpuri,",
      "New Delhi, India"
    ],
    locality: "New Delhi",
    region: "Delhi",
    postalCode: "110091",
    country: "IN",
    // Comma-separated display string (kept for existing components)
    phone: "+91 97114 92120, +91 88825 67498",
    phones: [
      { display: "+91 97114 92120", e164: "+919711492120" },
      { display: "+91 88825 67498", e164: "+918882567498" }
    ],
    whatsapp: "919711492120",
    email: "info@adbpack.com",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM IST"
  },
  social: {
    instagram: "https://www.instagram.com/adbpack/",
    // Add real URLs when profiles are created; empty strings are hidden in UI & schema
    facebook: "",
    linkedin: "",
    youtube: "",
    indiamart: ""
  },
  stats: {
    facility: "50,000 sq.ft",
    monthlyCapacity: "10 million+ units",
    certifications: ["ISO 9001:2015", "GeM Registered", "MSME Registered"]
  }
};

/** All non-empty social / directory profile URLs, used for schema `sameAs`. */
export const SAME_AS: string[] = Object.values(SITE_CONFIG.social).filter(Boolean);

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
