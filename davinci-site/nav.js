/* ═══════════════════════════════════════════════════
   Leonardo da Vinci — Biographical Website
   nav.js  |  Shared navigation logic
   Western Civilization Final Project · NOVA
═══════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── Mark the active nav link based on current page filename ── */
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';

  const navMap = {
    'index.html':       'nav-home',
    'biography.html':   'nav-biography',
    'art.html':         'nav-art',
    'inventions.html':  'nav-inventions',
    'notebooks.html':   'nav-notebooks',
    'sources.html':     'nav-sources',
  };

  const activeId = navMap[currentFile];
  if (activeId) {
    const activeLink = document.getElementById(activeId);
    if (activeLink) activeLink.classList.add('active');
  }

  /* ── Smooth scroll to top on same-page reload ── */
  window.addEventListener('beforeunload', function () {
    window.scrollTo(0, 0);
  });

});
