const menuButton = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');
const searchButton = document.querySelector('[data-search-button]');
const searchPanel = document.querySelector('[data-search-panel]');
const dropdowns = [...document.querySelectorAll('[data-dropdown]')];

const socialLinks = [
  { name: 'Facebook', url: 'https://www.facebook.com/', icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.7 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.7-1.6h1.8V4a24 24 0 0 0-2.6-.1c-2.6 0-4.4 1.6-4.4 4.5v2.2H7.3v3.2h2.9V22h3.5Z"/></svg>' },
  { name: 'Instagram', url: 'https://www.instagram.com/', icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.3 2h9.4A5.3 5.3 0 0 1 22 7.3v9.4a5.3 5.3 0 0 1-5.3 5.3H7.3A5.3 5.3 0 0 1 2 16.7V7.3A5.3 5.3 0 0 1 7.3 2Zm0 2A3.3 3.3 0 0 0 4 7.3v9.4A3.3 3.3 0 0 0 7.3 20h9.4a3.3 3.3 0 0 0 3.3-3.3V7.3A3.3 3.3 0 0 0 16.7 4H7.3Zm9.9 1.5a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/></svg>' },
  { name: 'Quora', url: 'https://www.quora.com/', icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.1 2 2.5 6.1 2.5 12S6.1 22 12 22c2 0 3.8-.5 5.3-1.4.9 1.1 2.2 1.7 3.8 1.7h.4v-2.5h-.3c-.8 0-1.4-.3-1.9-.9 1.4-1.7 2.2-4 2.2-6.9C21.5 6.1 17.9 2 12 2Zm0 2.6c4 0 6.2 2.8 6.2 7.4 0 1.9-.4 3.5-1.1 4.7a7.7 7.7 0 0 0-4.8-1.8v2.5c1.1 0 2 .3 2.8 1-.9.7-1.9 1-3.1 1-4 0-6.2-2.8-6.2-7.4S8 4.6 12 4.6Z"/></svg>' },
  { name: 'Reddit', url: 'https://www.reddit.com/', icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.4 10.4a2.9 2.9 0 0 0-4.8-2l-2.8-.6.6-2.9 2 .4a2.2 2.2 0 1 0 .4-1.8l-3-.6c-.5-.1-.9.2-1 .7l-.8 3.8a12 12 0 0 0-5.8 1A2.9 2.9 0 1 0 2.8 13c0 .2 0 .4.1.6-.1.4-.2.9-.2 1.3 0 4 4.2 7.1 9.3 7.1s9.3-3.1 9.3-7.1c0-.5-.1-.9-.2-1.3.2-.4.3-.8.3-1.2 0-.8-.4-1.5-1-2ZM7.8 14.1a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2Zm8.4 0a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2Zm-8.3 3.2c1 .8 2.4 1.2 4.1 1.2s3.1-.4 4.1-1.2l.9 1.1c-1.3 1-3 1.6-5 1.6s-3.7-.6-5-1.6l.9-1.1Z"/></svg>' },
  { name: 'Pinterest', url: 'https://www.pinterest.com/', icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-1.7 0-3.7.4-5.5l1.3-5.4s-.3-.7-.3-1.8c0-1.7 1-3 2.2-3 1 0 1.5.8 1.5 1.8 0 1.1-.7 2.6-1 4-.6 1.2.6 2.3 1.8 2.3 2.2 0 3.8-2.3 3.8-5.5 0-2.9-2.1-4.9-5-4.9-3.4 0-5.4 2.6-5.4 5.2 0 1 .4 2.1.9 2.7.1.1.1.2.1.4l-.4 1.5c-.1.5-.5.6-.9.4-1.3-.6-2.2-2.6-2.2-4.2 0-3.5 2.5-6.6 7.3-6.6 3.8 0 6.8 2.7 6.8 6.4 0 3.8-2.4 6.9-5.7 6.9-1.1 0-2.2-.6-2.5-1.3l-.7 2.6c-.3 1-.9 2.2-1.3 3A10 10 0 1 0 12 2Z"/></svg>' },
  { name: 'Medium', url: 'https://medium.com/', icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 5.2 8.8 19h1.4l5.4-11.8v9.9l-1.5 1.9h7.4l-1.5-1.9V6.9L21.5 5h-5.2l-4.7 10.4L6.9 5H2.5v.2Z"/></svg>' }
];

const brandRow = document.querySelector('.brand-row');
if (brandRow && !brandRow.querySelector('.social-links')) {
  const socialNav = document.createElement('nav');
  socialNav.className = 'social-links';
  socialNav.setAttribute('aria-label', 'Social media');
  socialNav.innerHTML = socialLinks.map(({ name, url, icon }) => `
    <a href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${name}">${icon}</a>
  `).join('');
  brandRow.prepend(socialNav);
}

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

document.querySelector('.newsletter form')?.addEventListener('submit', (event) => event.preventDefault());

const faqItems = [...document.querySelectorAll('.faq details')].map((item) => ({
  '@type': 'Question',
  name: item.querySelector('summary')?.textContent?.trim() || '',
  acceptedAnswer: {
    '@type': 'Answer',
    text: item.querySelector('p')?.textContent?.trim() || ''
  }
})).filter((item) => item.name && item.acceptedAnswer.text);

if (faqItems.length && !document.querySelector('[data-faq-schema]')) {
  const faqSchema = document.createElement('script');
  faqSchema.type = 'application/ld+json';
  faqSchema.dataset.faqSchema = 'true';
  faqSchema.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems
  });
  document.head.appendChild(faqSchema);
}
