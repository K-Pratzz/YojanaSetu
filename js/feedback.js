/**
 * feedback.js — powers contact.html
 * No backend: submissions are kept in localStorage purely as an
 * in-browser demo log, and a mailto: link is offered as the real
 * way to reach the project author.
 */
(function () {
  const form = document.getElementById("feedback-form");
  const successBanner = document.getElementById("form-success");
  const logContainer = document.getElementById("feedback-log");
  const starButtons = document.querySelectorAll(".star-rating button");
  const ratingInput = document.getElementById("rating-value");

  const STORAGE_KEY = "yojanasetu:feedback";
  let currentRating = 0;

  function getEntries() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  function saveEntry(entry) {
    const entries = getEntries();
    entries.unshift(entry);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries.slice(0, 20)));
  }

  function renderStarsStatic(rating) {
    let out = "";
    for (let i = 1; i <= 5; i++) out += i <= rating ? UI_ICONS.starFilled : UI_ICONS.star;
    return out;
  }

  function renderLog() {
    const entries = getEntries();
    if (entries.length === 0) {
      logContainer.innerHTML = `<p style="color:var(--ink-faint); font-size:0.88rem;">No feedback submitted yet on this device — be the first.</p>`;
      return;
    }
    logContainer.innerHTML = entries
      .map(
        (e, i) => `
      <div class="feedback-entry" style="animation-delay:${i * 0.05}s">
        <div class="feedback-entry__top">
          <span class="feedback-entry__name">${e.name}</span>
          <span class="feedback-entry__date">${e.date}</span>
        </div>
        <p class="feedback-entry__msg">${e.message}</p>
        <div class="feedback-entry__stars">${renderStarsStatic(e.rating)}</div>
      </div>`
      )
      .join("");
  }

  starButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentRating = Number(btn.dataset.value);
      ratingInput.value = currentRating;
      starButtons.forEach((b) => b.classList.toggle("selected", Number(b.dataset.value) <= currentRating));
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const entry = {
      name: data.get("name") || "Anonymous",
      message: data.get("message"),
      rating: currentRating || 0,
      date: new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })
    };

    saveEntry(entry);
    renderLog();

    form.reset();
    currentRating = 0;
    starButtons.forEach((b) => b.classList.remove("selected"));

    successBanner.classList.add("show");
    setTimeout(() => successBanner.classList.remove("show"), 4000);
  });

  renderLog();
})();