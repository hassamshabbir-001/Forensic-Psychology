const menuButton = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');
const searchButton = document.querySelector('[data-search-button]');
const searchPanel = document.querySelector('[data-search-panel]');
const dropdowns = [...document.querySelectorAll('[data-dropdown]')];

const closeDropdowns = (except = null) => {
  dropdowns.forEach((item) => {
    if (item === except) return;
    item.classList.remove('open');
    item.querySelector('[data-dropdown-trigger]')?.setAttribute('aria-expanded', 'false');
  });
};

menuButton?.addEventListener('click', () => {
  const open = menu?.classList.toggle('open') ?? false;
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  if (!open) closeDropdowns();
});

dropdowns.forEach((item) => {
  const trigger = item.querySelector('[data-dropdown-trigger]');
  const panel = item.querySelector('[data-dropdown-panel]');
  if (!trigger || !panel) return;

  trigger.addEventListener('click', () => {
    const willOpen = !item.classList.contains('open');
    closeDropdowns(item);
    item.classList.toggle('open', willOpen);
    trigger.setAttribute('aria-expanded', String(willOpen));
  });

  item.addEventListener('focusout', (event) => {
    if (!item.contains(event.relatedTarget)) {
      item.classList.remove('open');
      trigger.setAttribute('aria-expanded', 'false');
    }
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('[data-dropdown]')) closeDropdowns();
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  closeDropdowns();
  if (menu?.classList.contains('open')) {
    menu.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open menu');
    menuButton?.focus();
  }
});

searchButton?.addEventListener('click', () => {
  if (!searchPanel) return;
  searchPanel.hidden = !searchPanel.hidden;
  searchButton.setAttribute('aria-expanded', String(!searchPanel.hidden));
  if (!searchPanel.hidden) searchPanel.querySelector('input')?.focus();
});

document.querySelector('.newsletter form')?.addEventListener('submit', (event) => {
  event.preventDefault();
});
