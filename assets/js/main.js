(function () {
  "use strict";

  // Current year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      const open = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Theme toggle with persistence
  const themeToggle = document.getElementById("themeToggle");
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");
  if (saved === "light") {
    root.setAttribute("data-theme", "light");
    if (themeToggle) themeToggle.textContent = "☀️";
  }
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const isLight = root.getAttribute("data-theme") === "light";
      if (isLight) {
        root.removeAttribute("data-theme");
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "🌙";
      } else {
        root.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "☀️";
      }
    });
  }

  // Render project cards
  const grid = document.getElementById("projectsGrid");
  if (grid && Array.isArray(window.projects || projects)) {
    const list = window.projects || projects;
    list.forEach(function (p) {
      const card = document.createElement("article");
      card.className = "project-card reveal";

      const tags = (p.tags || [])
        .map(function (t) {
          return "<span>" + t + "</span>";
        })
        .join("");

      const links = [];
      if (p.repo) {
        links.push(
          '<a href="' + p.repo + '" target="_blank" rel="noopener">Code ↗</a>'
        );
      }
      if (p.demo) {
        links.push(
          '<a href="' + p.demo + '" target="_blank" rel="noopener">Live ↗</a>'
        );
      }

      card.innerHTML =
        '<div class="folder">📁</div>' +
        "<h3>" + p.title + "</h3>" +
        "<p>" + p.description + "</p>" +
        '<div class="project-tags">' + tags + "</div>" +
        '<div class="project-links">' + links.join("") + "</div>";

      grid.appendChild(card);
    });
  }

  // Reveal-on-scroll animation
  const revealEls = document.querySelectorAll(".section, .reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) {
      el.classList.add("reveal");
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("visible");
    });
  }
})();
