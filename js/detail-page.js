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

  // Mirrors the experience-card slideshows on the home page.
  function initialiseSlideshows() {
    $$("[data-slideshow]").forEach((wrap) => {
      const slides = $$(".exp-slide", wrap);
      const dots = $$(".exp-dot", wrap);
      if (slides.length < 2) return;

      let index = 0;
      let timer = null;

      const show = (next) => {
        index = (next + slides.length) % slides.length;
        slides.forEach((slide, i) => slide.classList.toggle("is-active", i === index));
        dots.forEach((dot, i) => dot.classList.toggle("is-active", i === index));
      };

      const stop = () => {
        if (timer) clearInterval(timer);
        timer = null;
      };
      const start = () => {
        stop();
        timer = setInterval(() => show(index + 1), 4500);
      };

      $("[data-slide-prev]", wrap)?.addEventListener("click", () => { show(index - 1); start(); });
      $("[data-slide-next]", wrap)?.addEventListener("click", () => { show(index + 1); start(); });
      dots.forEach((dot, i) => dot.addEventListener("click", () => { show(i); start(); }));

      wrap.addEventListener("mouseenter", stop);
      wrap.addEventListener("mouseleave", start);

      // only run while the card is on screen
      const observer = new IntersectionObserver(
        (entries) => entries.forEach((entry) => (entry.isIntersecting ? start() : stop())),
        { threshold: 0.25 }
      );
      observer.observe(wrap);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initialiseTheme();
    initialiseHeader();
    initialiseMobileNavigation();
    initialiseGalleries();
    initialiseSlideshows();
  });
})();