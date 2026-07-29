/* ==========================================================================
   PORTFOLIO INTERACTIVITY
   Reads content from PORTFOLIO_DATA (js/data.js) and renders it, then wires
   up theme toggling, navigation, scroll reveal, the project modal, and the
   demo contact form.
   ========================================================================== */
(function () {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const slugify = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  /* ------------------------------------------------------------------ *
   * THEME (light / dark, persisted in localStorage)
   * ------------------------------------------------------------------ */
  function initTheme() {
    const root = document.documentElement;
    const toggle = $("#theme-toggle");
    const stored = localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored || (prefersDark ? "dark" : "light");

    root.setAttribute("data-theme", initial);
    toggle.setAttribute("aria-pressed", String(initial === "dark"));

    toggle.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("portfolio-theme", next);
      toggle.setAttribute("aria-pressed", String(next === "dark"));
    });
  }

  /* ------------------------------------------------------------------ *
   * HEADER: glass background once scrolled
   * ------------------------------------------------------------------ */
  function initHeaderScroll() {
    const header = $("#site-header");
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ------------------------------------------------------------------ *
   * MOBILE MENU
   * ------------------------------------------------------------------ */
  function initMobileMenu() {
    const hamburger = $("#hamburger");
    const navLinks = $("#nav-links");

    function close() {
      navLinks.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
      hamburger.querySelector("use").setAttribute("href", "#icon-menu");
    }
    function open() {
      navLinks.classList.add("open");
      hamburger.setAttribute("aria-expanded", "true");
      hamburger.querySelector("use").setAttribute("href", "#icon-x");
    }

    hamburger.addEventListener("click", () => {
      navLinks.classList.contains("open") ? close() : open();
    });
    $$(".nav-link", navLinks).forEach((link) => link.addEventListener("click", close));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  }

  /* ------------------------------------------------------------------ *
   * ACTIVE SECTION INDICATOR
   * ------------------------------------------------------------------ */
  function initNavActiveState() {
    const navLinks = $$(".nav-link");
    const sections = navLinks
      .map((link) => document.getElementById(link.dataset.nav))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          navLinks.forEach((link) => link.classList.toggle("active", link.dataset.nav === id));
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
  }

  /* ------------------------------------------------------------------ *
   * SCROLL REVEAL
   * ------------------------------------------------------------------ */
  function initRevealAnimations() {
    const items = $$(".reveal");
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const delay = entry.target.dataset.revealDelay;
          if (delay) entry.target.style.transitionDelay = `${delay}ms`;
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((item) => observer.observe(item));
  }

  /* ------------------------------------------------------------------ *
   * SKILL BAR FILL (animates once visible)
   * ------------------------------------------------------------------ */
  function initSkillBars() {
    const bars = $$(".skill-bar-fill");
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.style.width = entry.target.dataset.level + "%";
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.4 }
    );
    bars.forEach((bar) => observer.observe(bar));
  }

  function formatSkillProficiency(level) {
    if (typeof level !== "number") return "";
    if (level >= 90) return "Expert";
    if (level >= 75) return "Advanced";
    if (level >= 60) return "Intermediate";
    return "Familiar";
  }

  /* ------------------------------------------------------------------ *
   * BACK TO TOP
   * ------------------------------------------------------------------ */
  function initBackToTop() {
    const btn = $("#back-to-top");
    window.addEventListener("scroll", () => btn.classList.toggle("show", window.scrollY > 600), { passive: true });
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ------------------------------------------------------------------ *
   * RENDER: HERO
   * ------------------------------------------------------------------ */
  function renderHero() {
    const { profile } = PORTFOLIO_DATA;
    $("#hero-name").textContent = profile.name;
    $("#hero-title").textContent = profile.title;
    $("#hero-tagline").textContent = profile.tagline;
    $("#hero-photo").src = profile.profileImage;
    $("#hero-photo").alt = `Profile photo of ${profile.name}`;

    $("#hero-cv-btn").href = profile.cvUrl;
    $("#contact-cv-btn").href = profile.cvUrl;

    $("#hero-linkedin-btn").href = profile.socials.linkedin;
    $("#contact-linkedin-btn").href = profile.socials.linkedin;

    $("#hero-email-btn").href = `mailto:${profile.email}`;
    $("#contact-email-btn").href = `mailto:${profile.email}`;
    $("#contact-email-text").textContent = profile.email;
    $("#contact-location-text").textContent = profile.location;
  }

  /* ------------------------------------------------------------------ *
   * RENDER: ABOUT
   * ------------------------------------------------------------------ */
  function renderAbout() {
    const { about } = PORTFOLIO_DATA;
    $("#about-paragraphs").innerHTML = about.paragraphs.map((p) => `<p>${p}</p>`).join("");
    $("#about-stats").innerHTML = about.stats
      .map((s) => `<div class="stat-card"><div class="stat-value">${s.value}</div><div class="stat-label">${s.label}</div></div>`)
      .join("");
  }

  function renderEducationTimeline() {
    const html = PORTFOLIO_DATA.education
      .map(
        (edu) => `
      <div class="timeline-item reveal">
        <span class="timeline-dot"><svg class="icon"><use href="#icon-cap"/></svg></span>
        <div class="timeline-card">
          <span class="timeline-tag">${edu.level}</span>
          <div class="timeline-head">
            <h4>${edu.program}</h4>
            <span class="timeline-period">${edu.period}</span>
          </div>
          <div class="timeline-org">${edu.institution}</div>
          <div class="timeline-meta">${edu.classification}</div>
          <ul class="timeline-list">
            ${edu.highlights.map((h) => `<li><svg class="icon"><use href="#icon-check"/></svg><span>${h}</span></li>`).join("")}
          </ul>
        </div>
      </div>`
      )
      .join("");
    $("#education-timeline").innerHTML = html;
  }

  function renderExperienceCards() {
    const html = PORTFOLIO_DATA.experience
      .map((exp) => {
        const paragraphs =
          Array.isArray(exp.summary) && exp.summary.length ? exp.summary : [];
        const bullets = Array.isArray(exp.responsibilities) ? exp.responsibilities : [];
        // Paragraphs that read as a conclusion, so they sit below the bullet list.
        const closing = Array.isArray(exp.closing) ? exp.closing : [];
        const images = Array.isArray(exp.images) ? exp.images : [];

        const media = images.length
          ? `
            <div class="exp-media" data-slideshow>
              <div class="exp-slides">
                ${images
                  .map(
                    (img, i) => `
                  <figure class="exp-slide${i === 0 ? " is-active" : ""}" data-slide="${i}">
                    <img src="${img.src}" alt="${img.caption}" loading="lazy" />
                  </figure>`
                  )
                  .join("")}
              </div>
              ${
                images.length > 1
                  ? `
                <button class="exp-slide-nav previous" type="button" data-slide-prev aria-label="Previous image">
                  <svg class="icon" aria-hidden="true"><use href="#icon-arrow-right"/></svg>
                </button>
                <button class="exp-slide-nav next" type="button" data-slide-next aria-label="Next image">
                  <svg class="icon" aria-hidden="true"><use href="#icon-arrow-right"/></svg>
                </button>
                <div class="exp-slide-dots" role="tablist">
                  ${images
                    .map(
                      (img, i) =>
                        `<button class="exp-dot${i === 0 ? " is-active" : ""}" type="button" data-slide-to="${i}" role="tab" aria-label="Image ${i + 1} of ${images.length}"></button>`
                    )
                    .join("")}
                </div>`
                  : ""
              }
            </div>`
          : "";

        return `
          <article class="exp-card reveal">
            ${media}
            <div class="exp-body">
              <span class="timeline-tag">${exp.type}</span>
              <h4>${exp.position}</h4>
              <div class="exp-org">${exp.organisation}</div>
              <div class="exp-period">${exp.period}</div>

              ${paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}

              ${
                bullets.length
                  ? `<ul class="exp-list">
                      ${bullets
                        .map(
                          (item) =>
                            `<li><svg class="icon" aria-hidden="true"><use href="#icon-check"/></svg><span>${item}</span></li>`
                        )
                        .join("")}
                    </ul>`
                  : ""
              }

              ${closing.map((paragraph) => `<p>${paragraph}</p>`).join("")}

              ${
                exp.detailPage
                  ? `<a class="experience-page-link" href="${exp.detailPage}">
                      <span>${exp.detailPageLabel || "View Full Experience"}</span>
                      <svg class="icon" aria-hidden="true"><use href="#icon-arrow-right"/></svg>
                    </a>`
                  : ""
              }
            </div>
          </article>`;
      })
      .join("");

    $("#experience-grid").innerHTML = html;
    initExperienceSlideshows();
  }

  /* ------------------------------------------------------------------ *
   * EXPERIENCE CARD SLIDESHOWS
   * ------------------------------------------------------------------ */
  function initExperienceSlideshows() {
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

      const start = () => {
        stop();
        timer = setInterval(() => show(index + 1), 4500);
      };
      const stop = () => {
        if (timer) clearInterval(timer);
        timer = null;
      };

      $("[data-slide-prev]", wrap).addEventListener("click", () => { show(index - 1); start(); });
      $("[data-slide-next]", wrap).addEventListener("click", () => { show(index + 1); start(); });
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

  /* ------------------------------------------------------------------ *
   * RENDER: SKILLS
   * ------------------------------------------------------------------ */
  function renderSkills() {
    const html = PORTFOLIO_DATA.skills
      .map(
        (group) => `
      <div class="skill-card reveal">
        <h3>${group.category}</h3>
        ${group.items
          .map(
            (skill) => `
          <div class="skill-row">
            <div class="skill-row-head"><span>${skill.name}</span><span>${formatSkillProficiency(skill.level)}</span></div>
            <div class="skill-bar"><div class="skill-bar-fill" data-level="${skill.level}"></div></div>
          </div>`
          )
          .join("")}
      </div>`
      )
      .join("");
    $("#skills-grid").innerHTML = html;
  }

  /* ------------------------------------------------------------------ *
   * RENDER: PROJECTS + FILTER + MODAL
   * ------------------------------------------------------------------ */
  const projectLookup = new Map();

  function renderProjects() {
    const filterWrap = $("#project-filter");
    const container = $("#projects-container");

    PORTFOLIO_DATA.projectCategories.forEach((cat) => {
      const slug = slugify(cat.category);

      // filter button
      const btn = document.createElement("button");
      btn.className = "filter-btn";
      btn.dataset.filter = slug;
      btn.textContent = cat.category;
      filterWrap.appendChild(btn);

      // category block
      const block = document.createElement("div");
      block.className = "project-category";
      block.dataset.category = slug;
      block.innerHTML = `
        <h3 class="project-category-title reveal">${cat.category}</h3>
        <div class="project-grid${cat.layout === "single" ? " project-grid-single" : ""}">
          ${cat.projects
            .map((project) => {
              projectLookup.set(project.id, project);
              const blurb = Array.isArray(project.cardSummary)
                ? project.cardSummary.map((p) => `<p>${p}</p>`).join("")
                : `<p>${project.summary}</p>`;
              const action = project.cardLinksToPage && project.detailPage
                ? `<a class="see-more-btn" href="${project.detailPage}">${project.detailPageLabel || "Explore the full project"} <svg class="icon"><use href="#icon-arrow-right"/></svg></a>`
                : `<button class="see-more-btn" data-project-id="${project.id}">See More <svg class="icon"><use href="#icon-arrow-right"/></svg></button>`;
              return `
              <article class="project-card reveal">
                <div class="project-card-img${project.imageFit === "contain" ? " is-contained" : ""}"><img src="${project.image}" alt="${project.title}" loading="lazy" /></div>
                <div class="project-card-body">
                  <h4>${project.title}</h4>
                  ${blurb}
                  <div class="tag-row">${project.tools.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
                  ${action}
                </div>
              </article>`;
            })
            .join("")}
        </div>`;
      container.appendChild(block);
    });

    // Re-observe newly injected .reveal nodes.
    initRevealAnimations();

    // Filtering
    filterWrap.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      $$(".filter-btn", filterWrap).forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      $$(".project-category", container).forEach((block) => {
        block.style.display = filter === "all" || block.dataset.category === filter ? "" : "none";
      });
    });

    // Modal open triggers
    container.addEventListener("click", (e) => {
      const trigger = e.target.closest(".see-more-btn");
      if (!trigger) return;
      openProjectModal(projectLookup.get(trigger.dataset.projectId));
    });
  }

  function openProjectModal(project) {
    if (!project) return;
    const overlay = $("#project-modal");
    const body = $("#modal-body");

    body.innerHTML = `
      <img class="modal-hero-img" src="${project.image}" alt="${project.title}" />
      <div class="modal-content">
        <h3 id="modal-title">${project.title}</h3>
        <p class="modal-subtitle">${project.summary}</p>

        <div class="tag-row">${project.tools.map((t) => `<span class="tag">${t}</span>`).join("")}</div>

        <div class="modal-section">
          <h5>Objectives</h5>
          <ul>${project.objectives.map((o) => `<li><svg class="icon"><use href="#icon-check"/></svg><span>${o}</span></li>`).join("")}</ul>
        </div>

        <div class="modal-section">
          <h5>Challenges</h5>
          <p>${project.challenges}</p>
        </div>

        <div class="modal-section">
          <h5>Methodology</h5>
          <p>${project.methodology}</p>
        </div>

        <div class="modal-section">
          <h5>Technologies</h5>
          <div class="tag-row">${project.technologies.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
        </div>

        <div class="modal-section">
          <h5>Outcomes</h5>
          <p>${project.outcomes}</p>
        </div>

        ${
          project.detailPage
            ? `<div class="modal-section">
                <a class="experience-page-link" href="${project.detailPage}">
                  <span>${project.detailPageLabel || "View full project"}</span>
                  <svg class="icon" aria-hidden="true"><use href="#icon-arrow-right"/></svg>
                </a>
              </div>`
            : ""
        }

        ${
          project.gallery && project.gallery.length
            ? `<div class="modal-section">
                <h5>Gallery</h5>
                <div class="modal-gallery">${project.gallery.map((src) => `<img src="${src}" alt="${project.title} — supporting image" loading="lazy" />`).join("")}</div>
              </div>`
            : ""
        }
      </div>`;

    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeProjectModal() {
    const overlay = $("#project-modal");
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function initModal() {
    const overlay = $("#project-modal");
    $("#modal-close").addEventListener("click", closeProjectModal);
    overlay.addEventListener("click", (e) => { if (e.target === overlay) closeProjectModal(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeProjectModal(); });
  }

  /* ------------------------------------------------------------------ *
   * RENDER: PHOTO GALLERY + LIGHTBOX
   * ------------------------------------------------------------------ */
  let galleryPhotos = [];
  let lightboxIndex = 0;

  function renderGallery() {
    const grid = $("#gallery-grid");
    const filterWrap = $("#gallery-filter");
    if (!grid || !Array.isArray(PORTFOLIO_DATA.photoGallery)) return;

    galleryPhotos = PORTFOLIO_DATA.photoGallery;

    // one filter button per group, in first-seen order
    const groups = [];
    galleryPhotos.forEach((p) => {
      if (p.group && !groups.includes(p.group)) groups.push(p.group);
    });
    groups.forEach((group) => {
      const btn = document.createElement("button");
      btn.className = "filter-btn";
      btn.dataset.galleryFilter = slugify(group);
      btn.textContent = group;
      filterWrap.appendChild(btn);
    });

    grid.innerHTML = galleryPhotos
      .map(
        (photo, i) => `
      <figure class="gallery-item reveal" data-group="${slugify(photo.group || "")}" data-index="${i}" tabindex="0" role="button" aria-label="${photo.caption}">
        <img src="${photo.src}" alt="${photo.caption}" loading="lazy" />
        <figcaption>${photo.caption}</figcaption>
      </figure>`
      )
      .join("");

    initRevealAnimations();

    filterWrap.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      $$(".filter-btn", filterWrap).forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.galleryFilter;
      $$(".gallery-item", grid).forEach((item) => {
        item.style.display = filter === "all" || item.dataset.group === filter ? "" : "none";
      });
    });

    const open = (e) => {
      const item = e.target.closest(".gallery-item");
      if (!item) return;
      openLightbox(Number(item.dataset.index));
    };
    grid.addEventListener("click", open);
    grid.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open(e);
      }
    });
  }

  function showLightboxPhoto(index) {
    const photo = galleryPhotos[index];
    if (!photo) return;
    lightboxIndex = index;
    $("#lightbox-img").src = photo.src;
    $("#lightbox-img").alt = photo.caption;
    $("#lightbox-caption").textContent = photo.caption;
  }

  function openLightbox(index) {
    const overlay = $("#lightbox");
    showLightboxPhoto(index);
    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    const overlay = $("#lightbox");
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function stepLightbox(delta) {
    if (!galleryPhotos.length) return;
    showLightboxPhoto((lightboxIndex + delta + galleryPhotos.length) % galleryPhotos.length);
  }

  function initLightbox() {
    const overlay = $("#lightbox");
    if (!overlay) return;
    $("#lightbox-close").addEventListener("click", closeLightbox);
    $("#lightbox-prev").addEventListener("click", () => stepLightbox(-1));
    $("#lightbox-next").addEventListener("click", () => stepLightbox(1));
    overlay.addEventListener("click", (e) => { if (e.target === overlay) closeLightbox(); });
    document.addEventListener("keydown", (e) => {
      if (!overlay.classList.contains("open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") stepLightbox(-1);
      if (e.key === "ArrowRight") stepLightbox(1);
    });
  }

  /* ------------------------------------------------------------------ *
   * RENDER: AWARDS
   * ------------------------------------------------------------------ */
  function renderAwards() {
    const html = PORTFOLIO_DATA.awards
      .map(
        (award) => `
      <div class="award-card reveal">
        <div class="award-icon"><svg class="icon"><use href="#icon-award"/></svg></div>
        <div>
          <h4>${award.title}</h4>
          <div><span class="award-org">${award.organisation}</span><span class="award-year">${award.year}</span></div>
          <p>${award.description}</p>
        </div>
      </div>`
      )
      .join("");
    $("#awards-grid").innerHTML = html;
  }

  /* ------------------------------------------------------------------ *
   * RENDER: INTERESTS
   * ------------------------------------------------------------------ */
  const interestBlurbs = {
    "High-Speed & Hypersonic Aerodynamics":
      "Compressible flow, shock interaction, and the aerodynamics of high-speed vehicles.",
    Aeroelasticity:
      "The coupling between aerodynamic loading and structural deformation in flight.",
    "Propulsion & Combustion Systems":
      "Gas turbine engines, combustion behaviour, and alternative aviation fuels.",
    "Flight Dynamics & Control":
      "Dynamic modes, stability derivatives, and how airframe geometry shapes handling.",
    "Experimental Aerospace Testing":
      "Instrumentation, data acquisition, and validating simulation against measured data.",
    "Design, Fabrication & Flight Testing":
      "Taking a design from CAD through composite fabrication to a flying prototype.",
  };

  function renderInterests() {
    const html = PORTFOLIO_DATA.interests
      .map(
        (interest) => `
      <div class="interest-card reveal">
        <div class="interest-icon"><svg class="icon"><use href="#icon-${interest.icon}"/></svg></div>
        <h4>${interest.name}</h4>
        <p>${interestBlurbs[interest.name] || ""}</p>
      </div>`
      )
      .join("");
    $("#interests-grid").innerHTML = html;
  }

  /* ------------------------------------------------------------------ *
   * RENDER: SOCIAL LINKS (contact + footer)
   * ------------------------------------------------------------------ */
  function renderSocials() {
    const { socials } = PORTFOLIO_DATA.profile;
    const icons = [
      { key: "linkedin", icon: "linkedin", label: "LinkedIn" },
      { key: "github", icon: "github", label: "GitHub" },
      { key: "twitter", icon: "twitter", label: "Twitter / X" },
      { key: "instagram", icon: "instagram", label: "Instagram" },
    ];
    const markup = icons
      .map(
        (s) => `<a class="social-btn" href="${socials[s.key]}" target="_blank" rel="noopener" aria-label="${s.label}"><svg class="icon"><use href="#icon-${s.icon}"/></svg></a>`
      )
      .join("");
    $("#contact-socials").innerHTML = markup;
    $("#footer-socials").innerHTML = markup;
  }

  /* ------------------------------------------------------------------ *
   * CONTACT FORM (non-functional demo)
   * ------------------------------------------------------------------ */
  function initContactForm() {
    const form = $("#contact-form");
    const note = $("#form-note");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      note.textContent = "Thanks for the message! (Demo form — no data was actually sent.)";
      form.reset();
    });
  }

  /* ------------------------------------------------------------------ *
   * MISC
   * ------------------------------------------------------------------ */
  function initFooterYear() {
    $("#footer-year").textContent = new Date().getFullYear();
  }

  /* ------------------------------------------------------------------ *
   * INIT
   * ------------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", () => {
    renderHero();
    renderAbout();
    renderEducationTimeline();
    renderExperienceCards();
    renderSkills();
    renderProjects();
    renderGallery();
    renderAwards();
    renderInterests();
    renderSocials();
    initFooterYear();

    initTheme();
    initHeaderScroll();
    initMobileMenu();
    initNavActiveState();
    initRevealAnimations();
    initSkillBars();
    initBackToTop();
    initModal();
    initLightbox();
    initContactForm();
  });
})();
