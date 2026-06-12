const MENU_DATA = {
  Bagels:     ['Plain', 'Everything', 'Sesame', 'Poppy', 'Onion', 'Cinnamon Raisin', 'Garlic', 'Whole Wheat', 'Salt', 'Asiago'],
  Spreads:    ['Plain Cream Cheese', 'Scallion Cream Cheese', 'Lox Spread', 'Strawberry Cream Cheese', 'Honey Walnut', 'Butter'],
  Sandwiches: ['Egg & Cheese', 'Bacon, Egg & Cheese', 'Sausage, Egg & Cheese', 'Taylor Ham, Egg & Cheese', 'Veggie Egg & Cheese', 'Lox & Cream Cheese'],
  Coffee:     ['Drip Coffee', 'Espresso', 'Americano', 'Latte', 'Cappuccino', 'Cold Brew', 'Iced Coffee', 'Oat Milk Latte'],
  Smoothies:  ['Strawberry Banana', 'Mixed Berry', 'Mango Pineapple', 'Green Machine', 'Peach Mango', 'Tropical Sunrise'],
};

document.addEventListener('DOMContentLoaded', () => {

  // ─── Nav scroll shadow ───────────────────────────────────────────────────────
  const nav = document.getElementById('site-nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 10);
  }, { passive: true });

  // ─── Mobile drawer toggle ────────────────────────────────────────────────────
  const hamburger   = document.getElementById('nav-hamburger');
  const mobileDrawer = document.getElementById('nav-mobile-drawer');

  function closeMobileMenu() {
    if (!hamburger) return;
    hamburger.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileDrawer.classList.remove('is-open');
  }

  // ─── Hours: highlight today ──────────────────────────────────────────────────
  const jsDay = new Date().getDay(); // 0 = Sunday
  const todayIndex = jsDay === 0 ? 6 : jsDay - 1; // Mon=0 … Sun=6
  const todayRow = document.querySelector(`.hours-row[data-day="${todayIndex}"]`);
  if (todayRow) {
    todayRow.classList.add('is-today');
    const badge = document.createElement('span');
    badge.className = 'hours-today-badge';
    badge.textContent = 'Today';
    todayRow.appendChild(badge);
  }

  // ─── Location tabs ───────────────────────────────────────────────────────────
  const locTabsEl = document.getElementById('loc-tabs');
  if (locTabsEl) {
    locTabsEl.addEventListener('click', e => {
      const tab = e.target.closest('[data-loc]');
      if (!tab) return;
      const key = tab.dataset.loc;
      locTabsEl.querySelectorAll('.menu-tab').forEach(t =>
        t.classList.toggle('menu-tab--active', t.dataset.loc === key));
      document.querySelectorAll('.loc-panel').forEach(p =>
        p.id === `loc-panel-${key}` ? p.removeAttribute('hidden') : p.setAttribute('hidden', ''));
    });
  }

  // ─── Menu overlay ────────────────────────────────────────────────────────────
  const menuOverlay = document.getElementById('menu-overlay');
  const menuGrid    = document.getElementById('menu-grid');
  let   activeCategory = 'Bagels';

  function renderMenuItems(category) {
    menuGrid.innerHTML = MENU_DATA[category]
      .map(item => `
        <div class="menu-item">
          <span class="menu-item-dot"></span>
          <span class="menu-item-name">${item}</span>
        </div>`)
      .join('');
  }

  function openMenu() {
    renderMenuItems(activeCategory);
    menuOverlay.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    closeMobileMenu();
  }

  function closeMenu() {
    menuOverlay.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

  document.getElementById('menu-tabs').addEventListener('click', e => {
    const tab = e.target.closest('[data-category]');
    if (!tab) return;
    activeCategory = tab.dataset.category;
    document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('menu-tab--active'));
    tab.classList.add('menu-tab--active');
    renderMenuItems(activeCategory);
  });

  menuOverlay.addEventListener('click', e => {
    if (e.target === menuOverlay) closeMenu();
  });

  // ─── Apply modal ─────────────────────────────────────────────────────────────
  const applyModal   = document.getElementById('apply-modal');
  const applyForm    = document.getElementById('apply-form');
  const applySuccess = document.getElementById('apply-success');

  function openApply() {
    applyModal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    closeMobileMenu();
  }

  function closeApply() {
    applyModal.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

  applyModal.addEventListener('click', e => {
    if (e.target === applyModal) closeApply();
  });

  applyForm.addEventListener('submit', e => {
    e.preventDefault();
    applyForm.setAttribute('hidden', '');
    applySuccess.removeAttribute('hidden');
  });

  // ─── Loyalty modal ────────────────────────────────────────────────────────────
  const loyaltyModal   = document.getElementById('loyalty-modal');
  const loyaltyForm    = document.getElementById('loyalty-form');
  const loyaltySuccess = document.getElementById('loyalty-success');

  function openLoyalty() {
    loyaltyModal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    closeMobileMenu();
  }

  function closeLoyalty() {
    loyaltyModal.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

  loyaltyModal.addEventListener('click', e => { if (e.target === loyaltyModal) closeLoyalty(); });

  loyaltyForm.addEventListener('submit', e => {
    e.preventDefault();
    loyaltyForm.setAttribute('hidden', '');
    loyaltySuccess.removeAttribute('hidden');
  });

  // ─── Contact form ─────────────────────────────────────────────────────────────
  const contactForm    = document.getElementById('contact-form');
  const contactSuccess = document.getElementById('contact-success');

  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    contactForm.setAttribute('hidden', '');
    contactSuccess.removeAttribute('hidden');
  });

  // ─── Global action dispatcher ────────────────────────────────────────────────
  document.addEventListener('click', e => {
    const el = e.target.closest('[data-action]');
    if (!el) return;

    const action = el.dataset.action;

    if (action === 'open-menu')      { e.preventDefault(); openMenu(); }
    if (action === 'close-menu')     { closeMenu(); }
    if (action === 'open-apply')     { e.preventDefault(); openApply(); }
    if (action === 'close-apply')    { closeApply(); }
    if (action === 'open-loyalty')   { e.preventDefault(); openLoyalty(); }
    if (action === 'close-loyalty')  { closeLoyalty(); }
    if (action === 'toggle-mobile')  {
      const isOpen = hamburger.classList.toggle('is-open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
      mobileDrawer.classList.toggle('is-open', isOpen);
    }
  });

  // Close mobile drawer when a non-toggle link inside it is clicked
  mobileDrawer.addEventListener('click', e => {
    const link = e.target.closest('a[href]');
    if (link && !link.dataset.action) closeMobileMenu();
  });

  // ─── Keyboard: Escape closes overlays ────────────────────────────────────────
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (!menuOverlay.hidden)   closeMenu();
    if (!applyModal.hidden)    closeApply();
    if (!loyaltyModal.hidden)  closeLoyalty();
  });

});
