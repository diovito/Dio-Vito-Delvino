/**
 * Skrip Interaksi Umum — Website Profil Dio Vito Delvino
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initCopyInstagram();
});

function initMobileNav() {
  const toggleBtn = document.querySelector('[data-nav-toggle]');
  const navMenu = document.querySelector('[data-nav-menu]');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

function initCopyInstagram() {
  const copyBtn = document.querySelector('[data-copy-ig]');
  const feedbackEl = document.querySelector('[data-copy-feedback]');

  if (!copyBtn || !feedbackEl) return;

  copyBtn.addEventListener('click', async () => {
    const handle = copyBtn.getAttribute('data-copy-ig') || '';
    if (!handle) return;

    try {
      await navigator.clipboard.writeText(handle);
      feedbackEl.textContent = `Nama pengguna ${handle} berhasil disalin ke papan klip.`;
    } catch {
      feedbackEl.textContent = `Silakan salin nama pengguna secara manual: ${handle}`;
    }

    setTimeout(() => {
      feedbackEl.textContent = '';
    }, 4000);
  });
}
