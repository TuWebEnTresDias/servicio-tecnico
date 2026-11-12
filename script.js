(() => {
  'use strict';
  document.documentElement.classList.remove('no-js');

  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const closeMenu = () => {
    if (!menuToggle || !mainNav) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir navegación');
    mainNav.classList.remove('is-open');
  };

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const open = menuToggle.getAttribute('aria-expanded') !== 'true';
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.setAttribute('aria-label', open ? 'Cerrar navegación' : 'Abrir navegación');
      mainNav.classList.toggle('is-open', open);
    });
    mainNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  const currentYear = document.getElementById('currentYear');
  if (currentYear) currentYear.textContent = String(new Date().getFullYear());

  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeButton = lightbox?.querySelector('.lightbox-close');
  let lastFocused = null;

  document.querySelectorAll('[data-lightbox]').forEach((button) => {
    button.addEventListener('click', () => {
      if (!lightbox || !lightboxImage || !lightboxCaption) return;
      lastFocused = button;
      lightboxImage.src = button.dataset.lightbox || '';
      lightboxImage.alt = button.dataset.alt || '';
      lightboxCaption.textContent = button.dataset.alt || '';
      if (typeof lightbox.showModal === 'function') lightbox.showModal();
      else lightbox.setAttribute('open', '');
      closeButton?.focus();
    });
  });

  closeButton?.addEventListener('click', () => {
    if (typeof lightbox?.close === 'function') lightbox.close();
    else lightbox?.removeAttribute('open');
  });

  lightbox?.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close();
  });
  lightbox?.addEventListener('close', () => {
    if (lightboxImage) lightboxImage.removeAttribute('src');
    lastFocused?.focus();
  });
})();
