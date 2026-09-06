/**
 * icons.js
 * A small set of original line-icons, one per scheme category.
 * Plain inline SVG strings (currentColor) — no image files, no
 * external requests, so nothing to break at deploy time.
 */

const ICONS = {
  "Agriculture": `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 28V14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M16 14C16 14 8 13 8 6C15 6 16 14 16 14Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="M16 18C16 18 24 17 24 10C17 10 16 18 16 18Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="M9 28H23" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
  </svg>`,

  "Housing": `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 15L16 6L26 15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9 13V26H23V13" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="M14 26V19H18V26" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  </svg>`,

  "Healthcare": `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 17H11L13.5 11L17.5 22L20 17H27" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 26C16 26 6 20.5 6 13.5C6 10 8.7 8 11.5 8C13.3 8 15 9 16 10.5C17 9 18.7 8 20.5 8C23.3 8 26 10 26 13.5C26 20.5 16 26 16 26Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/>
  </svg>`,

  "Household & Energy": `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 5C16 5 10 12 10 18C10 22 12.7 25 16 25C19.3 25 22 22 22 18C22 15.5 20.5 13.5 19.5 12C19.5 14 18 15 17 14C16.3 13.3 17 11 15.5 9C15.5 11 13 13 13 16C13 17.5 14 18.5 14 18.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  "Financial Inclusion": `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="10" width="22" height="15" rx="2" stroke="currentColor" stroke-width="1.6"/>
    <path d="M5 14H27" stroke="currentColor" stroke-width="1.6"/>
    <circle cx="22" cy="19.5" r="2.2" stroke="currentColor" stroke-width="1.4"/>
    <path d="M9 7L16 10L23 7" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  "Pension": `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4L26 8V15C26 21.5 21.7 26.5 16 28C10.3 26.5 6 21.5 6 15V8L16 4Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M16 12V17L19.5 19.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  "Education": `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 9L28 14L16 19L4 14L16 9Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="M9 16.5V22C9 22 12 25 16 25C20 25 23 22 23 22V16.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M28 14V21" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
  </svg>`,

  "Skilling & Employment": `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.5 8.5L23.5 12.5L13 23H9V19L19.5 8.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M17.5 10.5L21.5 14.5" stroke="currentColor" stroke-width="1.5"/>
    <path d="M5 27H27" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
  </svg>`,

  "Entrepreneurship": `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="12" width="22" height="14" rx="2" stroke="currentColor" stroke-width="1.6"/>
    <path d="M12 12V9C12 7.9 12.9 7 14 7H18C19.1 7 20 7.9 20 9V12" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="M5 18H27" stroke="currentColor" stroke-width="1.4"/>
  </svg>`,

  "Maternal Welfare": `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 25C16 25 6 19 6 12.5C6 9.5 8.3 7.5 11 7.5C13 7.5 14.8 8.6 16 10.4C17.2 8.6 19 7.5 21 7.5C23.7 7.5 26 9.5 26 12.5C26 19 16 25 16 25Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
    <circle cx="16" cy="14" r="1.4" fill="currentColor"/>
  </svg>`,

  "Girl Child Savings": `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 17C8 12 11.5 9 16 9C20.5 9 24 12 24 17C24 20 22 22.5 19 23.5V26H13V23.5C10 22.5 8 20 8 17Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
    <circle cx="20" cy="14" r="0.9" fill="currentColor"/>
    <path d="M24 16L27 15" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
  </svg>`,

  "Food Security": `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 15C7 15 9 24 16 24C23 24 25 15 25 15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M16 7V17M12 8L16 12L20 8M12 17L16 13L20 17" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  "Rural Livelihood": `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="11" r="3" stroke="currentColor" stroke-width="1.5"/>
    <circle cx="21" cy="11" r="3" stroke="currentColor" stroke-width="1.5"/>
    <path d="M5 24C5 19.5 7.7 17 11 17C13 17 14.7 17.9 15.7 19.3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M27 24C27 19.5 24.3 17 21 17C19 17 17.3 17.9 16.3 19.3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M11.5 24C11.5 21 13.4 19 16 19C18.6 19 20.5 21 20.5 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`
};

/* Small utility icons used in the UI chrome (nav, cards, states) */
const UI_ICONS = {
  heart: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 20.5C12 20.5 3.5 15.4 3.5 9.4C3.5 6.4 5.9 4.5 8.5 4.5C10.1 4.5 11.4 5.3 12 6.5C12.6 5.3 13.9 4.5 15.5 4.5C18.1 4.5 20.5 6.4 20.5 9.4C20.5 15.4 12 20.5 12 20.5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
  heartFilled: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 20.5C12 20.5 3.5 15.4 3.5 9.4C3.5 6.4 5.9 4.5 8.5 4.5C10.1 4.5 11.4 5.3 12 6.5C12.6 5.3 13.9 4.5 15.5 4.5C18.1 4.5 20.5 6.4 20.5 9.4C20.5 15.4 12 20.5 12 20.5Z"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="6.5" stroke="currentColor" stroke-width="1.7"/><path d="M20 20L16 16" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6L18 18M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 13L10 18L19 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3.5L14.6 9.3L21 10L16.2 14.2L17.6 20.5L12 17.2L6.4 20.5L7.8 14.2L3 10L9.4 9.3L12 3.5Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>`,
  starFilled: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 3.5L14.6 9.3L21 10L16.2 14.2L17.6 20.5L12 17.2L6.4 20.5L7.8 14.2L3 10L9.4 9.3L12 3.5Z"/></svg>`
};