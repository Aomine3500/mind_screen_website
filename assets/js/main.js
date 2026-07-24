/* Mind Screen — interactions (English only) */
(function () {
  "use strict";
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  /* ---------------- Theme (light is the default) ---------------- */
  const root = document.documentElement;
  const storedTheme = localStorage.getItem("ms-theme");
  setTheme(storedTheme === "dark" || storedTheme === "light" ? storedTheme : "light");

  function setTheme(mode) {
    root.setAttribute("data-theme", mode);
    localStorage.setItem("ms-theme", mode);
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", mode === "dark" ? "#0E0B2E" : "#6C5DD3");
  }
  $("#themeToggle").addEventListener("click", () => {
    setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });

  /* ---------------- Tests grid (clickable) ---------------- */
  function renderTests() {
    const grid = $("#testsGrid");
    if (!grid) return;
    grid.innerHTML = TESTS.map((t, i) => `
      <button class="test-card" data-test="${i}" aria-haspopup="dialog" aria-label="View details for the ${t.name} assessment">
        <img src="assets/img/tests/${t.img}" alt="${t.name}" loading="lazy" width="96" height="96" />
        <h3>${t.name}</h3>
        <span class="test-scale">${t.scale}</span>
        <span class="test-more">Details →</span>
      </button>`).join("");
    $$(".test-card", grid).forEach((btn) =>
      btn.addEventListener("click", () => openModal(TESTS[+btn.dataset.test]))
    );
  }

  /* ---------------- Test detail modal ---------------- */
  const modal = $("#testModal");
  const modalBody = $("#testModalBody");
  let lastFocused = null;

  function openModal(t) {
    lastFocused = document.activeElement;
    modalBody.innerHTML = `
      <div class="tm-head">
        <img class="tm-logo" src="assets/img/tests/${t.img}" alt="${t.name}" width="88" height="88" />
        <div>
          <span class="tm-scale">${t.scale}</span>
          <h3 id="testModalTitle">${t.fullName}</h3>
          <p class="tm-sub">${t.name} assessment</p>
        </div>
      </div>
      <dl class="tm-meta">
        <div><dt>Developed by</dt><dd>${t.org}</dd></div>
        <div><dt>First published</dt><dd>${t.year}</dd></div>
      </dl>
      <div class="tm-history">
        <h4>About this test</h4>
        <p>${t.history}</p>
      </div>
      <div class="tm-stats">
        <div class="tm-stat">
          <span class="tm-stat-val">${t.questions}</span>
          <span class="tm-stat-lbl">Questions</span>
        </div>
        <div class="tm-stat">
          <span class="tm-stat-val">${t.accuracy}</span>
          <span class="tm-stat-lbl">Accuracy</span>
        </div>
      </div>
      <p class="tm-accnote">${t.accuracyNote}.</p>
      <p class="tm-disclaimer">Validation figures are approximate, drawn from published studies, and vary with population and cut-off score.</p>
    `;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    $(".tm-close", modal).focus();
  }

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  if (modal) {
    $(".tm-close", modal).addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
    });
  }

  /* ---------------- FAQ ---------------- */
  function renderFaq() {
    const list = $("#faqList");
    if (!list) return;
    list.innerHTML = FAQ.map((f) => `
      <div class="faq-item">
        <button class="faq-q" aria-expanded="false">
          <span>${f.q}</span>
          <span class="chev" aria-hidden="true">+</span>
        </button>
        <div class="faq-a"><p>${f.a}</p></div>
      </div>`).join("");
    $$(".faq-q", list).forEach((btn) =>
      btn.addEventListener("click", () => {
        const item = btn.parentElement;
        const open = item.classList.toggle("open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
        const panel = $(".faq-a", item);
        panel.style.maxHeight = open ? panel.scrollHeight + "px" : null;
      })
    );
  }

  /* ---------------- Header scroll state ---------------- */
  const header = $("#siteHeader");
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("scrolled", y > 12);
    header.classList.toggle("past-hero", y > window.innerHeight * 0.85);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------------- Mobile menu ---------------- */
  const menuToggle = $("#menuToggle");
  const nav = $(".main-nav");
  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    header.classList.toggle("menu-open", open);
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  $$(".main-nav a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      header.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
    })
  );

  /* ---------------- Reveal on scroll ---------------- */
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }),
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  function observeReveals() { $$(".reveal:not(.in)").forEach((el) => io.observe(el)); }

  /* ---------------- Store badges — "coming soon" notice ---------------- */
  const storeBadges = $$(".store-badge");
  if (storeBadges.length) {
    let toast, toastTimer;

    function ensureToast() {
      if (toast) return toast;
      toast = document.createElement("div");
      toast.className = "app-toast";
      toast.setAttribute("role", "status");
      toast.setAttribute("aria-live", "polite");
      toast.innerHTML = `
        <span class="app-toast-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 15h-2v-6h2v6Zm0-8h-2V7h2v2Z"/></svg>
        </span>
        <div class="app-toast-text">
          <strong>Coming soon</strong>
          <span>Mind Screen is currently in its testing phase and will be available soon on the App Store and Google Play. Thank you for your patience!</span>
        </div>
        <button class="app-toast-close" type="button" aria-label="Dismiss">
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M18.3 5.71 12 12l6.3 6.29-1.42 1.42L10.59 13.4 5.71 18.3 4.3 16.88 10.59 12 4.3 5.71 5.71 4.3l4.88 4.88L16.88 4.3z"/></svg>
        </button>`;
      document.body.appendChild(toast);
      $(".app-toast-close", toast).addEventListener("click", hideToast);
      return toast;
    }

    function showToast() {
      ensureToast();
      clearTimeout(toastTimer);
      toast.classList.remove("show");
      void toast.offsetWidth; /* restart the enter animation on repeat clicks */
      toast.classList.add("show");
      toastTimer = setTimeout(hideToast, 6000);
    }

    function hideToast() {
      if (toast) toast.classList.remove("show");
    }

    storeBadges.forEach((badge) =>
      badge.addEventListener("click", (e) => {
        e.preventDefault();
        showToast();
      })
    );
  }

  /* ---------------- Boot ---------------- */
  renderTests();
  renderFaq();
  observeReveals();
})();
