import { View, esc, each } from '../core/View.js';
import { icon, img } from './components/partials.js';

export const NAV = {
  menus: [
    { path: '/menu', label: 'À la carte' },
    { path: '/3-course', label: '3-course menu' },
    { path: '/tasting', label: 'Tasting menu' },
    { path: '/kids', label: 'Kids menu' },
    { path: '/drinks', label: 'Drinks' },
  ],
  main: [
    { path: '/events', label: 'Events' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ],
  footer: [
    { path: '/about', label: 'About us' },
    { path: '/faq', label: 'FAQ' },
    { path: '/events', label: 'Catering and events' },
    { path: '/jobs', label: 'Jobs' },
    { path: '/privacy', label: 'Privacy policy' },
  ],
};

/**
 * The persistent frame around every page: header, <main> outlet, footer
 * and the shared dish dialog. Rendered once; pages swap inside #main.
 */
export class LayoutView extends View {
  template(info) {
    return `
      <header class="site-header" data-elevated="false">
        <div class="header-inner">
          <a href="#/" class="brand" aria-label="Kiin Kiin Bao Bao, home">
            ${img('logo', '', { ext: 'png', eager: true, cls: 'brand-logo', w: 64, h: 64 })}
          </a>

          <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
            <span class="nav-toggle-open">${icon('menu')}<span>Menu</span></span>
            <span class="nav-toggle-close">${icon('close')}<span>Close</span></span>
          </button>

          <nav class="site-nav" id="site-nav" aria-label="Main">
            <div class="nav-group" data-dropdown>
              <button class="nav-link nav-group-btn" type="button" aria-expanded="false" aria-controls="nav-menus">
                Menus ${icon('chevron')}
              </button>
              <ul class="nav-dropdown" id="nav-menus" role="list">
                ${each(NAV.menus, (l) => `<li><a class="nav-sublink" href="#${l.path}">${esc(l.label)}</a></li>`)}
              </ul>
            </div>
            ${each(NAV.main, (l) => `<a class="nav-link" href="#${l.path}">${esc(l.label)}</a>`)}
            <a class="btn btn-small btn-ghost nav-gift" href="${info.links.giftCard}" target="_blank" rel="noopener">Gift cards</a>
            <a class="btn btn-small" href="${info.links.reservation}" target="_blank" rel="noopener">Book a table</a>
          </nav>
        </div>
      </header>

      <main id="main" class="page-outlet" tabindex="-1"></main>

      <footer class="site-footer">
        <div class="footer-inner">
          <div class="footer-brand">
            ${img('logo', 'Kiin Kiin Bao Bao', { ext: 'png', cls: 'footer-logo', w: 88, h: 88 })}
            <address>
              ${esc(info.address.street)}<br>${esc(info.address.postcode)} ${esc(info.address.city)}<br>
              <a href="${info.phoneHref}">${esc(info.phone)}</a>
            </address>
            <p class="footer-hours">${esc(info.hours)}</p>
          </div>

          <nav class="footer-col" aria-label="Footer">
            <h2 class="footer-heading">Kiin Kiin Bao Bao</h2>
            <ul role="list">
              ${each(NAV.footer, (l) => `<li><a href="#${l.path}">${esc(l.label)}</a></li>`)}
              <li><a href="${info.links.controlReport}" target="_blank" rel="noopener">Food safety report</a></li>
            </ul>
          </nav>

          <div class="footer-col">
            <h2 class="footer-heading">Our other restaurants</h2>
            <ul role="list" class="footer-sisters">
              ${each(info.sisterRestaurants, (r) => `<li><a href="${r.href}" target="_blank" rel="noopener">${esc(r.name)}</a></li>`)}
            </ul>
          </div>

          <div class="footer-col footer-social">
            <h2 class="footer-heading">Follow us</h2>
            <div class="socials">
              ${each(
                info.socials,
                (s) => `<a href="${s.href}" target="_blank" rel="noopener" aria-label="${esc(s.name)}">${icon(s.icon)}</a>`
              )}
            </div>
            ${img('badge', 'Byens Bedste award', { ext: 'png', cls: 'footer-badge' })}
          </div>
        </div>
        <p class="footer-small">© ${new Date().getFullYear()} Kiin Kiin Bao Bao · Vesterbrogade 96, Copenhagen</p>
      </footer>

      <dialog class="dish-dialog" aria-labelledby="dish-dialog-title">
        <div class="dish-dialog-inner">
          <div class="dish-dialog-media"></div>
          <div class="dish-dialog-body">
            <h2 id="dish-dialog-title"></h2>
            <p class="dish-dialog-price"></p>
            <p class="dish-dialog-desc"></p>
            <p class="dish-dialog-veg" hidden>${icon('leaf')} Vegan</p>
          </div>
          <button type="button" class="dish-dialog-close" aria-label="Close">${icon('close')}</button>
        </div>
      </dialog>`;
  }

  afterRender() {
    this.header = this.$('.site-header');
    this.outlet = this.$('#main');
    this.navToggle = this.$('.nav-toggle');
    this.dropdown = this.$('[data-dropdown]');
    this.dropdownBtn = this.$('.nav-group-btn');
    this.dialog = this.$('.dish-dialog');
  }

  /** Mark the current route in the nav. */
  setActive(path) {
    this.$$('.site-nav a[href^="#/"]').forEach((a) => {
      const on = a.getAttribute('href') === `#${path}`;
      a.toggleAttribute('aria-current', on);
      if (on) a.setAttribute('aria-current', 'page');
    });
    const inMenus = NAV.menus.some((m) => m.path === path);
    this.dropdownBtn.classList.toggle('is-current', inMenus);
  }

  setNavOpen(open) {
    this.navToggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('nav-open', open);
  }

  setDropdownOpen(open) {
    this.dropdownBtn.setAttribute('aria-expanded', String(open));
    this.dropdown.classList.toggle('is-open', open);
  }

  setElevated(on) {
    this.header.dataset.elevated = String(on);
  }

  /** Fill and open the shared dish dialog. */
  showDish(dish) {
    const d = this.dialog;
    d.querySelector('.dish-dialog-media').innerHTML = img(dish.image, dish.name, { eager: true });
    d.querySelector('#dish-dialog-title').textContent = dish.name;
    d.querySelector('.dish-dialog-price').textContent = `${dish.price} kr`;
    d.querySelector('.dish-dialog-desc').textContent = dish.description;
    d.querySelector('.dish-dialog-veg').hidden = !dish.vegan;
    d.showModal();
  }

  closeDish() {
    if (!this.dialog.open) return;
    this.dialog.classList.add('is-closing');
    const done = () => {
      this.dialog.classList.remove('is-closing');
      this.dialog.close();
    };
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return done();
    this.dialog.addEventListener('animationend', done, { once: true });
  }
}
