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

