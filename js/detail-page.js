(function () {
  "use strict";

  const $ = (selector, context = document) => context.querySelector(selector);
  const $$ = (selector, context = document) =>
    Array.from(context.querySelectorAll(selector));

  function initialiseTheme() {
    const root = document.documentElement;
    const button = $("#detail-theme-toggle");
    const stored = localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored || (prefersDark ? "dark" : "light");

    root.setAttribute("data-theme", initial);

    if (!button) return;

    const updateLabel = () => {
      const isDark = root.getAttribute("data-theme") === "dark";
      button.textContent = isDark ? "☀" : "☾";
      button.setAttribute(
        "aria-label",
        isDark ? "Switch to light theme" : "Switch to dark theme"
      );
    };

    updateLabel();

    button.addEventListener("click", () => {
      const next =
        root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("portfolio-theme", next);
      updateLabel();
    });
  }

  function initialiseHeader() {
    const header = $(".detail-site-header");
    if (!header) return;

    const update = () => header.classList.toggle("scrolled", window.scrollY > 10);
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function initialiseMobileNavigation() {
    const button = $("#detail-menu-toggle");
    const nav = $("#detail-nav-links");
    if (!button || !nav) return;

    const close = () => {
      nav.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
      button.textContent = "☰";
    };

    button.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
      button.textContent = isOpen ? "✕" : "☰";
    });

    $$("a", nav).forEach((link) => link.addEventListener("click", close));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") close();
    });
  }

  function initialiseGalleries() {
    $$("[data-experience-gallery]").forEach((gallery) => {
      const wrapper = gallery.closest(".experience-gallery-wrap");
      if (!wrapper) return;

      const previous = $("[data-gallery-previous]", wrapper);
      const next = $("[data-gallery-next]", wrapper);
      const amount = () => Math.max(gallery.clientWidth * 0.82, 300);

      previous?.addEventListener("click", () => {
        gallery.scrollBy({ left: -amount(), behavior: "smooth" });
      });

      next?.addEventListener("click", () => {
        gallery.scrollBy({ left: amount(), behavior: "smooth" });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initialiseTheme();
    initialiseHeader();
    initialiseMobileNavigation();
    initialiseGalleries();
  });
})();