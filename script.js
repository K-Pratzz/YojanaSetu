/**
 * script.js
 * All client-side. No fetch, no backend, no build step —
 * open index.html directly (or via Live Server) and it works.
 */

(function () {
  const form = document.getElementById("eligibility-form");
  const resetBtn = document.getElementById("reset-btn");

  const resultsEmpty = document.getElementById("results-empty");
  const resultsNone = document.getElementById("results-none");
  const resultsList = document.getElementById("results-list");
  const resultsCount = document.getElementById("results-count");

  // Fill the {SCHEME_COUNT} placeholder in the "no matches" message.
  resultsNone.querySelector("p").textContent = resultsNone
    .querySelector("p")
    .textContent.replace("{SCHEME_COUNT}", SCHEMES.length);

  /**
   * Pure rule-based matcher — no ML, no external calls.
   * Returns true only if every rule present on the scheme passes.
   */
  function isEligible(user, rules) {
    if (rules.minAge != null && user.age < rules.minAge) return false;
    if (rules.maxAge != null && user.age > rules.maxAge) return false;
    if (rules.minIncome != null && user.income < rules.minIncome) return false;
    if (rules.maxIncome != null && user.income > rules.maxIncome) return false;
    if (rules.occupations && !rules.occupations.includes(user.occupation)) return false;
    if (rules.gender && !rules.gender.includes(user.gender)) return false;
    if (rules.states && !rules.states.includes("all") && !rules.states.includes(user.state)) return false;
    if (rules.requiresLand && !user.hasLand) return false;
    return true;
  }

  function readForm() {
    const data = new FormData(form);
    return {
      age: Number(data.get("age")),
      income: Number(data.get("income")),
      occupation: data.get("occupation"),
      gender: data.get("gender"),
      state: data.get("state") || "all",
      hasLand: form.elements["hasLand"].checked
    };
  }

  function renderResults(matches) {
    resultsList.innerHTML = "";

    if (matches.length === 0) {
      resultsEmpty.hidden = true;
      resultsList.hidden = true;
      resultsNone.hidden = false;
      resultsCount.textContent = "0 matches";
      return;
    }

    resultsEmpty.hidden = true;
    resultsNone.hidden = true;
    resultsList.hidden = false;
    resultsCount.textContent = `${matches.length} match${matches.length === 1 ? "" : "es"}`;

    matches.forEach((scheme, index) => {
      const li = document.createElement("li");
      li.className = "scheme-card";
      li.style.setProperty("--i", index);

      li.innerHTML = `
        <div class="scheme-card__stamp" aria-hidden="true">
          <svg viewBox="0 0 40 40" width="30" height="30">
            <circle cx="20" cy="20" r="17" fill="none" stroke="currentColor" stroke-width="1.3"/>
            <path d="M12 20 L18 26 L29 13" fill="none" stroke="currentColor" stroke-width="1.6"/>
          </svg>
        </div>
        <div class="scheme-card__body">
          <p class="scheme-card__category">${scheme.category}</p>
          <h3 class="scheme-card__name">${scheme.name}</h3>
          <p class="scheme-card__benefit">${scheme.benefit}</p>
        </div>
      `;
      resultsList.appendChild(li);
    });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.reportValidity()) return;

    const user = readForm();
    const matches = SCHEMES.filter((scheme) => isEligible(user, scheme.rules));
    renderResults(matches);

    // Scroll results into view on small screens
    if (window.innerWidth < 860) {
      document.getElementById("results-heading").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  resetBtn.addEventListener("click", function () {
    form.reset();
    resultsList.hidden = true;
    resultsNone.hidden = true;
    resultsEmpty.hidden = false;
    resultsCount.textContent = "—";
  });
})();
