import { LayoutView } from '../views/LayoutView.js';

/**
 * Owns the persistent frame: mobile nav, menus dropdown, header shadow on
 * scroll, and the dish dialog that any page can open with data-dish="id".
 */
export class LayoutController {
  constructor({ root, models }) {
    this.models = models;
    this.view = new LayoutView(root).render(models.restaurant.info);
    this.bind();
  }

  get outlet() {
    return this.view.outlet;
  }

  bind() {
    const v = this.view;

    v.navToggle.addEventListener('click', () => v.setNavOpen(v.navToggle.getAttribute('aria-expanded') !== 'true'));

    // Menus dropdown: click to toggle; on desktop, hover with a short delay
    // before closing (same feel as the original site).
    v.dropdownBtn.addEventListener('click', () => v.setDropdownOpen(!v.dropdown.classList.contains('is-open')));
    const hover = matchMedia('(hover: hover) and (min-width: 900px)');
    let closeTimer;
    v.dropdown.addEventListener('pointerenter', () => {
      if (!hover.matches) return;
      clearTimeout(closeTimer);
      v.setDropdownOpen(true);
    });
    v.dropdown.addEventListener('pointerleave', () => {
      if (!hover.matches) return;
      closeTimer = setTimeout(() => v.setDropdownOpen(false), 400);
    });

    document.addEventListener('click', (e) => {
      if (!v.dropdown.contains(e.target)) v.setDropdownOpen(false);
      const dishBtn = e.target.closest('[data-dish]');
      if (dishBtn) this.openDish(dishBtn);
      // Clicking "Contact" while already there: hashchange won't fire, so scroll ourselves.
      const link = e.target.closest('a[href="#/contact"]');
      if (link && window.location.hash === '#/contact') {
        v.setNavOpen(false);
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      if (v.dropdown.classList.contains('is-open')) {
        v.setDropdownOpen(false);
        v.dropdownBtn.focus();
      } else if (document.body.classList.contains('nav-open')) {
        v.setNavOpen(false);
        v.navToggle.focus();
      }
    });

    // Dish dialog: close button, backdrop click, Esc (animated).
    v.dialog.querySelector('.dish-dialog-close').addEventListener('click', () => v.closeDish());
    v.dialog.addEventListener('click', (e) => e.target === v.dialog && v.closeDish());
    v.dialog.addEventListener('cancel', (e) => {
      e.preventDefault();
      v.closeDish();
    });

    const onScroll = () => v.setElevated(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /** Open the shared dish dialog for the clicked dish. */
  openDish(trigger) {
    const dish = this.models.dishes.find(trigger.dataset.dish);
    if (dish) this.view.showDish(dish);
  }

  /** Called by the app on every route change. */
  onRoute(path) {
    this.view.setActive(path);
    this.view.setNavOpen(false);
    this.view.setDropdownOpen(false);
    if (this.view.dialog.open) this.view.dialog.close();
  }
}
