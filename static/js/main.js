  console.log("main.js loaded");

  (function () {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;

    // Instant show if reduced motion is enabled
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      els.forEach(el => el.classList.add('is-visible'));
      return;
    }

    // Reveal on load (hero)
    window.addEventListener('load', () => {
      els.forEach(el => el.classList.add('is-visible'));
    });
  })();

(function () {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector("#nav-menu");
  if (!toggle || !menu) return;

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    menu.classList.toggle("is-open", open);
  }

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.contains("is-open");
    setOpen(!isOpen);
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  // Close menu if you click outside it
  document.addEventListener("click", (e) => {
    if (!menu.classList.contains("is-open")) return;
    if (menu.contains(e.target) || toggle.contains(e.target)) return;
    setOpen(false);
  });
})();
