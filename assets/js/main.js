/* Mind Screen — interactions */
(function () {
  "use strict";
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  /* ---------------- Theme ---------------- */
  const root = document.documentElement;
  const storedTheme = localStorage.getItem("ms-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(storedTheme || (prefersDark ? "dark" : "light"));

  function setTheme(mode) {
    root.setAttribute("data-theme", mode);
    localStorage.setItem("ms-theme", mode);
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", mode === "dark" ? "#0E0B2E" : "#6C5DD3");
  }
  $("#themeToggle").addEventListener("click", () => {
    setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });

  /* ---------------- Language ---------------- */
  let lang = localStorage.getItem("ms-lang") || (navigator.language || "en").slice(0, 2);
  if (!I18N[lang]) lang = "en";

  function applyLang(l) {
    lang = I18N[l] ? l : "en";
    localStorage.setItem("ms-lang", lang);
    document.documentElement.lang = lang;
    const dict = I18N[lang];
    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });
    $$(".lang-switch button").forEach((b) => {
      const on = b.dataset.lang === lang;
      b.classList.toggle("active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    renderTests();
    renderFaq();
  }
  $$(".lang-switch button").forEach((b) =>
    b.addEventListener("click", () => applyLang(b.dataset.lang))
  );

  /* ---------------- Tests grid ---------------- */
  function renderTests() {
    const grid = $("#testsGrid");
    if (!grid) return;
    const badge = lang === "fr" ? I18N.fr : I18N.en;
    grid.innerHTML = TESTS.map((t) => `
      <article class="test-card">
        <span class="badge ${t.free ? "badge-free" : "badge-pro"}">${t.free ? badge["badge.free"] : badge["badge.pro"]}</span>
        <img src="assets/img/tests/${t.img}" alt="${t[lang]}" loading="lazy" width="96" height="96" />
        <h3>${t[lang]}</h3>
        <span class="test-scale">${t.scale}</span>
      </article>`).join("");
  }

  /* ---------------- FAQ ---------------- */
  function renderFaq() {
    const list = $("#faqList");
    if (!list) return;
    list.innerHTML = FAQ.map((f) => `
      <div class="faq-item">
        <button class="faq-q" aria-expanded="false">
          <span>${lang === "fr" ? f.fr_q : f.en_q}</span>
          <span class="chev" aria-hidden="true">+</span>
        </button>
        <div class="faq-a"><p>${lang === "fr" ? f.fr_a : f.en_a}</p></div>
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
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 12);
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

  /* ---------------- Boot ---------------- */
  applyLang(lang);
  observeReveals();
})();
