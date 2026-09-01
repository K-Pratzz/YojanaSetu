/**
 * schemes.js
 * ---------------------------------------------------------------
 * A hardcoded dataset standing in for a database. Each scheme has
 * plain-language info plus a `rules` object the matching engine
 * (script.js) reads to decide a match. No network calls, no DB.
 *
 * Rule fields (all optional — omit a field to mean "no restriction"):
 *   minAge, maxAge        numbers, inclusive
 *   maxIncome, minIncome  annual household income in INR, inclusive
 *   occupations           array of allowed occupation values
 *   gender                array of allowed gender values
 *   states                array of allowed state values, or ['all']
 *   requiresLand          true if the applicant must own cultivable land
 * ---------------------------------------------------------------
 */

const SCHEMES = [
  {
    id: "pm-kisan",
    name: "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)",
    category: "Agriculture",
    benefit: "₹6,000/year in three instalments, paid directly to land-owning farmer families.",
    rules: { occupations: ["farmer"], requiresLand: true }
  },
  {
    id: "pmfby",
    name: "Pradhan Mantri Fasal Bima Yojana",
    category: "Agriculture",
    benefit: "Low-premium crop insurance against yield loss from natural calamities.",
    rules: { occupations: ["farmer"] }
  },
  {
    id: "kcc",
    name: "Kisan Credit Card",
    category: "Agriculture",
    benefit: "Short-term, low-interest credit for farming needs and inputs.",
    rules: { occupations: ["farmer"], minAge: 18 }
  },
  {
    id: "pmay",
    name: "Pradhan Mantri Awas Yojana",
    category: "Housing",
    benefit: "Interest subsidy and assistance for building or buying a first home.",
    rules: { maxIncome: 1800000 }
  },
  {
    id: "pmjay",
    name: "Ayushman Bharat – PM Jan Arogya Yojana",
    category: "Healthcare",
    benefit: "Health cover of ₹5 lakh/year per family for secondary and tertiary hospital care.",
    rules: { maxIncome: 250000 }
  },
  {
    id: "ujjwala",
    name: "Pradhan Mantri Ujjwala Yojana",
    category: "Household & Energy",
    benefit: "Free LPG connection for women from low-income households.",
    rules: { gender: ["female"], maxIncome: 250000 }
  },
  {
    id: "jandhan",
    name: "Pradhan Mantri Jan Dhan Yojana",
    category: "Financial Inclusion",
    benefit: "Zero-balance bank account with RuPay debit card and accident cover.",
    rules: { minAge: 10 }
  },
  {
    id: "apy",
    name: "Atal Pension Yojana",
    category: "Pension",
    benefit: "Guaranteed monthly pension of ₹1,000–₹5,000 after age 60.",
    rules: { minAge: 18, maxAge: 40 }
  },
  {
    id: "pmsym",
    name: "PM Shram Yogi Maandhan",
    category: "Pension",
    benefit: "₹3,000/month pension after 60 for unorganised-sector workers.",
    rules: { minAge: 18, maxAge: 40, occupations: ["daily_wage", "self_employed"], maxIncome: 180000 }
  },
  {
    id: "ivvvy",
    name: "Indira Gandhi National Old Age Pension Scheme",
    category: "Pension",
    benefit: "Monthly pension support for senior citizens from low-income households.",
    rules: { minAge: 60, maxIncome: 250000 }
  },
  {
    id: "pmvvy",
    name: "Pradhan Mantri Vaya Vandana Yojana",
    category: "Pension",
    benefit: "Assured-return pension scheme for senior citizens.",
    rules: { minAge: 60 }
  },
  {
    id: "nsp",
    name: "National Scholarship Portal – Post-Matric Scholarship",
    category: "Education",
    benefit: "Tuition and maintenance allowance for students from low-income families.",
    rules: { occupations: ["student"], maxIncome: 250000 }
  },
  {
    id: "pmkvy",
    name: "Pradhan Mantri Kaushal Vikas Yojana",
    category: "Skilling & Employment",
    benefit: "Free short-term skill training with a certificate and placement support.",
    rules: { minAge: 15, maxAge: 45, occupations: ["unemployed", "student", "daily_wage"] }
  },
  {
    id: "standup",
    name: "Stand-Up India",
    category: "Entrepreneurship",
    benefit: "Bank loans of ₹10 lakh–₹1 crore for setting up a new enterprise.",
    rules: { gender: ["female"], occupations: ["self_employed", "unemployed"], minAge: 18 }
  },
  {
    id: "mudra",
    name: "Pradhan Mantri Mudra Yojana",
    category: "Entrepreneurship",
    benefit: "Collateral-free loans up to ₹10 lakh for micro and small businesses.",
    rules: { occupations: ["self_employed"], minAge: 18 }
  },
  {
    id: "pmmvy",
    name: "Pradhan Mantri Matru Vandana Yojana",
    category: "Maternal Welfare",
    benefit: "Cash benefit of ₹5,000 to pregnant and lactating women for the first child.",
    rules: { gender: ["female"], maxIncome: 800000 }
  },
  {
    id: "ssy",
    name: "Sukanya Samriddhi Yojana",
    category: "Girl Child Savings",
    benefit: "High-interest savings account for a girl child's education and marriage.",
    rules: { gender: ["female"], maxAge: 10 }
  },
  {
    id: "pmgkay",
    name: "Pradhan Mantri Garib Kalyan Anna Yojana",
    category: "Food Security",
    benefit: "Free additional foodgrain ration for eligible low-income households.",
    rules: { maxIncome: 200000 }
  }
];
