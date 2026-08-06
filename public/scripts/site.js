const menuButton = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');
const searchButton = document.querySelector('[data-search-button]');
const searchPanel = document.querySelector('[data-search-panel]');

menuButton?.addEventListener('click', () => {
  const open = menu?.classList.toggle('open') ?? false;
  menuButton.setAttribute('aria-expanded', String(open));
});

searchButton?.addEventListener('click', () => {
  if (!searchPanel) return;
  searchPanel.hidden = !searchPanel.hidden;
  if (!searchPanel.hidden) searchPanel.querySelector('input')?.focus();
});

document.querySelector('.newsletter form')?.addEventListener('submit', (event) => {
  event.preventDefault();
});
