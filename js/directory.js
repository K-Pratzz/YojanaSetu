/**
 * directory.js — powers schemes.html
 * Search + category filters + "Saved" filter (localStorage) + detail modal.
 * All client-side; localStorage only, nothing leaves the browser.
 */
(function () {
  const grid = document.getElementById("scheme-grid");
  const searchInput = document.getElementById("scheme-search");
  const chipsContainer = document.getElementById("filter-chips");
  const resultsMeta = document.getElementById("results-meta");
  const noResults = document.getElementById("no-results");

  const modalOverlay = document.getElementById("scheme-modal");
  const modalClose = document.getElementById("modal-close");

  const STORAGE_KEY = "yojanasetu:bookmarks";

  function getBookmarks() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  function toggleBookmark(id) {
    const list = getBookmarks();
    const idx = list.indexOf(id);
    if (idx === -1) list.push(id);
    else list.splice(idx, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    return list;
  }

  const categories = ["All", "Saved", ...Array.from(new Set(SCHEMES.map((s) => s.category)))];
  let activeCategory = "All";
  let query = "";

  function renderChips() {
    chipsContainer.innerHTML = categories
      .map((cat) => {
        const count = cat === "All" ? SCHEMES.length : cat === "Saved" ? getBookmarks().length : SCHEMES.filter((s) => s.category === cat).length;
        return `<button class="chip ${cat === activeCategory ? "active" : ""}" data-cat="${cat}">${cat} <span style="opacity:.6">(${count})</span></button>`;
      })
      .join("");

    chipsContainer.querySelectorAll(".chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        activeCategory = chip.dataset.cat;
        renderChips();
        renderGrid();
      });
    });
  }

  function matchesQuery(scheme, q) {
    if (!q) return true;
    const haystack = [scheme.name, scheme.fullName, scheme.category, scheme.benefit, ...(scheme.tags || [])]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q.toLowerCase());
  }

  function renderGrid() {
    const bookmarks = getBookmarks();
    let list = SCHEMES.filter((s) => matchesQuery(s, query));

    if (activeCategory === "Saved") list = list.filter((s) => bookmarks.includes(s.id));
    else if (activeCategory !== "All") list = list.filter((s) => s.category === activeCategory);

    resultsMeta.textContent = `${list.length} scheme${list.length === 1 ? "" : "s"} found`;

    if (list.length === 0) {
      grid.hidden = true;
      noResults.hidden = false;
      return;
    }

    grid.hidden = false;
    noResults.hidden = true;

    grid.innerHTML = list
      .map((scheme, i) => {
        const isSaved = bookmarks.includes(scheme.id);
        const icon = ICONS[scheme.category] || "";
        return `
        <article class="scheme-tile" data-id="${scheme.id}" style="animation-delay:${i * 0.04}s">
          <div class="scheme-tile__top">
            <div class="scheme-tile__icon">${icon}</div>
            <button class="bookmark-btn ${isSaved ? "active" : ""}" data-bookmark="${scheme.id}" aria-label="Save scheme">
              ${isSaved ? UI_ICONS.heartFilled : UI_ICONS.heart}
            </button>
          </div>
          <div>
            <p class="scheme-tile__category">${scheme.category}</p>
            <h3 class="scheme-tile__name">${scheme.name}</h3>
            <p class="scheme-tile__full">${scheme.fullName}</p>
          </div>
          <p class="scheme-tile__benefit">${scheme.benefit}</p>
          <p class="scheme-tile__rules">${describeRules(scheme.rules)}</p>
          <span class="scheme-tile__cta">View details ${UI_ICONS.arrow}</span>
        </article>`;
      })
      .join("");

    grid.querySelectorAll(".bookmark-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleBookmark(btn.dataset.bookmark);
        renderChips();
        renderGrid();
      });
    });

    grid.querySelectorAll(".scheme-tile").forEach((tile) => {
      tile.addEventListener("click", () => openModal(tile.dataset.id));
    });
  }

  function openModal(id) {
    const scheme = SCHEMES.find((s) => s.id === id);
    if (!scheme) return;

    const isSaved = getBookmarks().includes(id);
    const icon = ICONS[scheme.category] || "";

    document.getElementById("modal-body").innerHTML = `
      <div class="modal-icon">${icon}</div>
      <p class="modal-category">${scheme.category} · ${scheme.ministry}</p>
      <h3>${scheme.name}</h3>
      <p class="modal-full">${scheme.fullName}</p>

      <div class="modal-section">
        <h4>Benefit</h4>
        <p>${scheme.benefit}</p>
      </div>

      <div class="modal-section">
        <h4>About</h4>
        <p>${scheme.details}</p>
      </div>

      <div class="modal-section">
        <h4>Eligibility summary</h4>
        <p>${describeRules(scheme.rules)}</p>
      </div>

      <div class="modal-section">
        <h4>Tags</h4>
        <div class="modal-tags">${(scheme.tags || []).map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      </div>

      <div class="modal-actions">
        <button class="btn btn-outline btn-block" id="modal-bookmark-btn" data-id="${scheme.id}">
          ${isSaved ? UI_ICONS.heartFilled : UI_ICONS.heart} ${isSaved ? "Saved" : "Save this scheme"}
        </button>
        <a class="btn btn-primary btn-block" href="checker.html">Check my eligibility</a>
      </div>
    `;

    document.getElementById("modal-bookmark-btn").addEventListener("click", (e) => {
      toggleBookmark(e.currentTarget.dataset.id);
      openModal(id); // re-render with updated state
      renderChips();
      renderGrid();
    });

    modalOverlay.classList.add("open");
  }

  function closeModal() {
    modalOverlay.classList.remove("open");
  }

  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  searchInput.addEventListener("input", (e) => {
    query = e.target.value;
    renderGrid();
  });

  // Support ?category=Agriculture deep-links from the homepage
  const params = new URLSearchParams(window.location.search);
  const preselect = params.get("category");
  if (preselect && categories.includes(preselect)) activeCategory = preselect;

  renderChips();
  renderGrid();
})();