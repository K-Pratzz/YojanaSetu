/**
 * schemes.js
 * ---------------------------------------------------------------
 * The "database" for the whole site — one array, no backend.
 * checker.html filters it with `rules`. schemes.html renders it
 * as a searchable directory using the extra descriptive fields.
 *
 * Rule fields on `rules` (all optional — omit = "no restriction"):
 *   minAge, maxAge          numbers, inclusive
 *   minIncome, maxIncome    annual household income in INR, inclusive
 *   occupations             array of allowed occupation values
 *   gender                  array of allowed gender values
 *   states                  array of allowed state values, or ["all"]
 *   requiresLand            true if applicant must own cultivable land
 * ---------------------------------------------------------------
 */

const SCHEMES = [
  {
    id: "pm-kisan",
    name: "PM-KISAN",
    fullName: "Pradhan Mantri Kisan Samman Nidhi",
    category: "Agriculture",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    benefit: "₹6,000/year in three instalments, paid directly to land-owning farmer families.",
    details: "A direct income-support scheme for small and marginal farmer families holding cultivable land, meant to help meet input costs for crops and household needs.",
    tags: ["farmer", "income support", "direct benefit transfer", "land"],
    rules: { occupations: ["farmer"], requiresLand: true }
  },
  {
    id: "pmfby",
    name: "PMFBY",
    fullName: "Pradhan Mantri Fasal Bima Yojana",
    category: "Agriculture",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    benefit: "Low-premium crop insurance against yield loss from natural calamities, pests or disease.",
    details: "Farmers pay a small, fixed premium share while the government subsidises the rest, covering losses from drought, flood, pest attack and more.",
    tags: ["farmer", "insurance", "crop loss"],
    rules: { occupations: ["farmer"] }
  },
  {
    id: "kcc",
    name: "KCC",
    fullName: "Kisan Credit Card",
    category: "Agriculture",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    benefit: "Short-term, low-interest credit for seeds, fertiliser and other farming needs.",
    details: "A revolving credit line issued by banks specifically for agricultural and allied expenses, with interest subvention for timely repayment.",
    tags: ["farmer", "credit", "loan"],
    rules: { occupations: ["farmer"], minAge: 18 }
  },
  {
    id: "pmay",
    name: "PMAY",
    fullName: "Pradhan Mantri Awas Yojana",
    category: "Housing",
    ministry: "Ministry of Housing & Urban Affairs",
    benefit: "Interest subsidy and financial assistance to build or buy a first home.",
    details: "Aims at 'Housing for All', offering credit-linked subsidy on home loans for economically weaker and middle-income households.",
    tags: ["housing", "home loan", "subsidy"],
    rules: { maxIncome: 1800000 }
  },
  {
    id: "pmjay",
    name: "Ayushman Bharat (PM-JAY)",
    fullName: "Pradhan Mantri Jan Arogya Yojana",
    category: "Healthcare",
    ministry: "Ministry of Health & Family Welfare",
    benefit: "Health cover of ₹5 lakh per family per year for secondary and tertiary hospital care.",
    details: "Cashless, paperless treatment at empanelled hospitals for eligible low-income families identified under SECC criteria.",
    tags: ["health insurance", "hospital", "cashless treatment"],
    rules: { maxIncome: 250000 }
  },
  {
    id: "ujjwala",
    name: "Ujjwala Yojana",
    fullName: "Pradhan Mantri Ujjwala Yojana",
    category: "Household & Energy",
    ministry: "Ministry of Petroleum & Natural Gas",
    benefit: "Free LPG connection with first refill and stove support for women from low-income households.",
    details: "Aims to replace unsafe cooking fuels (firewood, coal) with clean-burning LPG, reducing indoor air pollution and health risk.",
    tags: ["lpg", "clean cooking", "women"],
    rules: { gender: ["female"], maxIncome: 250000 }
  },
  {
    id: "jandhan",
    name: "Jan Dhan Yojana",
    fullName: "Pradhan Mantri Jan Dhan Yojana",
    category: "Financial Inclusion",
    ministry: "Ministry of Finance",
    benefit: "Zero-balance savings account with a free RuPay debit card and accident cover.",
    details: "The entry point to formal banking for unbanked citizens — no minimum balance requirement and access to overdraft facility over time.",
    tags: ["bank account", "zero balance", "rupay"],
    rules: { minAge: 10 }
  },
  {
    id: "apy",
    name: "Atal Pension Yojana",
    fullName: "Atal Pension Yojana",
    category: "Pension",
    ministry: "Ministry of Finance",
    benefit: "Guaranteed monthly pension of ₹1,000–₹5,000 after age 60, based on contribution.",
    details: "A voluntary, contribution-based pension scheme aimed at workers in the unorganised sector who lack employer-backed retirement cover.",
    tags: ["pension", "retirement", "savings"],
    rules: { minAge: 18, maxAge: 40 }
  },
  {
    id: "pmsym",
    name: "PM-SYM",
    fullName: "Pradhan Mantri Shram Yogi Maandhan",
    category: "Pension",
    ministry: "Ministry of Labour & Employment",
    benefit: "₹3,000/month pension after age 60 for unorganised-sector workers.",
    details: "A matching-contribution pension scheme for informal workers such as street vendors, rickshaw pullers, and domestic workers.",
    tags: ["pension", "informal worker", "unorganised sector"],
    rules: { minAge: 18, maxAge: 40, occupations: ["daily_wage", "self_employed"], maxIncome: 180000 }
  },
  {
    id: "ignoaps",
    name: "IGNOAPS",
    fullName: "Indira Gandhi National Old Age Pension Scheme",
    category: "Pension",
    ministry: "Ministry of Rural Development",
    benefit: "Monthly pension support for senior citizens from low-income (BPL) households.",
    details: "Part of the National Social Assistance Programme, providing a basic income floor for elderly citizens without other pension support.",
    tags: ["pension", "senior citizen", "bpl"],
    rules: { minAge: 60, maxIncome: 250000 }
  },
  {
    id: "pmvvy",
    name: "PMVVY",
    fullName: "Pradhan Mantri Vaya Vandana Yojana",
    category: "Pension",
    ministry: "Ministry of Finance (LIC)",
    benefit: "Assured-return pension plan for senior citizens investing a lump sum.",
    details: "A social-security scheme run through LIC that gives retirees a fixed, guaranteed monthly, quarterly or annual pension.",
    tags: ["pension", "senior citizen", "lic"],
    rules: { minAge: 60 }
  },
  {
    id: "nsp-pms",
    name: "Post-Matric Scholarship",
    fullName: "National Scholarship Portal – Post-Matric Scholarship",
    category: "Education",
    ministry: "Ministry of Social Justice & Empowerment / Education",
    benefit: "Tuition fees and maintenance allowance for students from low-income families.",
    details: "Covers course fees and a monthly allowance for students pursuing classes 11 and above, disbursed directly to bank accounts.",
    tags: ["scholarship", "student", "tuition"],
    rules: { occupations: ["student"], maxIncome: 250000 }
  },
  {
    id: "nmms",
    name: "NMMS",
    fullName: "National Means-cum-Merit Scholarship",
    category: "Education",
    ministry: "Ministry of Education",
    benefit: "₹12,000/year scholarship for meritorious students from economically weaker sections.",
    details: "Awarded to students who clear a state-level selection test in class 8, continuing through classes 9–12 to prevent drop-outs.",
    tags: ["scholarship", "student", "merit"],
    rules: { occupations: ["student"], maxIncome: 150000, minAge: 13, maxAge: 16 }
  },
  {
    id: "pmkvy",
    name: "PMKVY",
    fullName: "Pradhan Mantri Kaushal Vikas Yojana",
    category: "Skilling & Employment",
    ministry: "Ministry of Skill Development & Entrepreneurship",
    benefit: "Free short-term skill training with a certificate and placement assistance.",
    details: "Offers industry-aligned training across trades — electrician, tailoring, IT, hospitality and more — with a small monetary reward on certification.",
    tags: ["skill training", "certificate", "employment"],
    rules: { minAge: 15, maxAge: 45, occupations: ["unemployed", "student", "daily_wage"] }
  },
  {
    id: "standup",
    name: "Stand-Up India",
    fullName: "Stand-Up India Scheme",
    category: "Entrepreneurship",
    ministry: "Ministry of Finance",
    benefit: "Bank loans between ₹10 lakh and ₹1 crore for setting up a new enterprise.",
    details: "Specifically supports women and SC/ST entrepreneurs setting up greenfield enterprises in manufacturing, services or trading.",
    tags: ["loan", "women entrepreneur", "business"],
    rules: { gender: ["female"], occupations: ["self_employed", "unemployed"], minAge: 18 }
  },
  {
    id: "mudra",
    name: "Mudra Yojana",
    fullName: "Pradhan Mantri Mudra Yojana",
    category: "Entrepreneurship",
    ministry: "Ministry of Finance",
    benefit: "Collateral-free loans up to ₹10 lakh for micro and small businesses.",
    details: "Loans are offered in three slabs — Shishu, Kishor and Tarun — depending on the growth stage of the business.",
    tags: ["loan", "small business", "collateral-free"],
    rules: { occupations: ["self_employed"], minAge: 18 }
  },
  {
    id: "svanidhi",
    name: "PM SVANidhi",
    fullName: "PM Street Vendor's AtmaNirbhar Nidhi",
    category: "Entrepreneurship",
    ministry: "Ministry of Housing & Urban Affairs",
    benefit: "Working-capital loans starting at ₹10,000 for street vendors, with digital cashback incentives.",
    details: "Designed for urban street vendors to resume and grow their business, with easy renewal loans on timely repayment.",
    tags: ["street vendor", "microloan", "urban"],
    rules: { occupations: ["self_employed", "daily_wage"], minAge: 18 }
  },
  {
    id: "vishwakarma",
    name: "PM Vishwakarma",
    fullName: "PM Vishwakarma Yojana",
    category: "Entrepreneurship",
    ministry: "Ministry of MSME",
    benefit: "Skill training, toolkit support and collateral-free loans for traditional artisans and craftspeople.",
    details: "Covers 18 traditional trades — carpentry, pottery, weaving, blacksmithing and more — with certification and market linkage support.",
    tags: ["artisan", "craftsperson", "toolkit"],
    rules: { occupations: ["self_employed"], minAge: 18 }
  },
  {
    id: "pmmvy",
    name: "PMMVY",
    fullName: "Pradhan Mantri Matru Vandana Yojana",
    category: "Maternal Welfare",
    ministry: "Ministry of Women & Child Development",
    benefit: "Cash benefit of ₹5,000 to pregnant and lactating women for their first child.",
    details: "Partial compensation for wage loss during pregnancy, meant to improve maternal and infant nutrition and care-seeking behaviour.",
    tags: ["maternity", "women", "cash benefit"],
    rules: { gender: ["female"], maxIncome: 800000 }
  },
  {
    id: "ssy",
    name: "Sukanya Samriddhi Yojana",
    fullName: "Sukanya Samriddhi Yojana",
    category: "Girl Child Savings",
    ministry: "Ministry of Finance",
    benefit: "High-interest savings account for a girl child's future education and marriage expenses.",
    details: "A guardian can open this account for a girl child under 10, with deposits allowed until she turns 15 and maturity at 21.",
    tags: ["girl child", "savings", "education fund"],
    rules: { gender: ["female"], maxAge: 10 }
  },
  {
    id: "pmgkay",
    name: "PMGKAY",
    fullName: "Pradhan Mantri Garib Kalyan Anna Yojana",
    category: "Food Security",
    ministry: "Ministry of Consumer Affairs, Food & Public Distribution",
    benefit: "Free additional foodgrain ration for eligible low-income households.",
    details: "Provides free foodgrain over and above the regular subsidised quota under the National Food Security Act.",
    tags: ["ration", "foodgrain", "food security"],
    rules: { maxIncome: 200000 }
  },
  {
    id: "nrlm",
    name: "DAY-NRLM",
    fullName: "Deendayal Antyodaya Yojana – National Rural Livelihood Mission",
    category: "Rural Livelihood",
    ministry: "Ministry of Rural Development",
    benefit: "Support to join Self-Help Groups (SHGs) for savings, low-interest credit and skill-based livelihood activities.",
    details: "Organises rural women into SHGs to build financial discipline and access bank credit for small enterprises collectively.",
    tags: ["shg", "rural women", "livelihood"],
    rules: { gender: ["female"], occupations: ["homemaker", "self_employed", "daily_wage"], maxIncome: 300000 }
  }
];

/** Turns a scheme's `rules` object into a short, readable summary line. */
function describeRules(rules) {
  const parts = [];

  if (rules.minAge != null || rules.maxAge != null) {
    if (rules.minAge != null && rules.maxAge != null) parts.push(`Age ${rules.minAge}–${rules.maxAge}`);
    else if (rules.minAge != null) parts.push(`Age ${rules.minAge}+`);
    else parts.push(`Age up to ${rules.maxAge}`);
  }

  if (rules.maxIncome != null) parts.push(`Income up to ₹${rules.maxIncome.toLocaleString("en-IN")}`);
  if (rules.minIncome != null) parts.push(`Income from ₹${rules.minIncome.toLocaleString("en-IN")}`);

  const occLabels = {
    farmer: "Farmer", student: "Student", unemployed: "Unemployed",
    daily_wage: "Daily-wage worker", self_employed: "Self-employed",
    salaried: "Salaried", homemaker: "Homemaker", retired: "Retired", other: "Any occupation"
  };
  if (rules.occupations) parts.push(rules.occupations.map(o => occLabels[o] || o).join(" / "));

  if (rules.gender) parts.push(rules.gender.map(g => g[0].toUpperCase() + g.slice(1)).join("/") + " only");
  if (rules.requiresLand) parts.push("Must own cultivable land");
  if (rules.states && !rules.states.includes("all")) parts.push(rules.states.join(", "));

  return parts.length ? parts.join(" · ") : "Open to all applicants";
}