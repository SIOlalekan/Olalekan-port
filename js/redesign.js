(() => {
  const menu = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');
  function closeMenu() { if (!menu || !nav) return; menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Open menu'); nav.classList.remove('open'); }
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const opening = menu.getAttribute('aria-expanded') !== 'true';
      menu.setAttribute('aria-expanded', String(opening));
      menu.setAttribute('aria-label', opening ? 'Close menu' : 'Open menu');
      nav.classList.toggle('open', opening);
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
    document.addEventListener('click', e => { if (!nav.contains(e.target) && !menu.contains(e.target)) closeMenu(); });
  }
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
})();
