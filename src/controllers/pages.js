import { Controller } from '../core/Controller.js';
import { HomeView } from '../views/HomeView.js';
import { AlaCarteView, SetMenuView, ListMenuView } from '../views/MenuViews.js';
import { EventsView, AboutView, FaqView, JobsView, LegalView, NotFoundView } from '../views/PageViews.js';

const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

export class HomeController extends Controller {
  get title() {
    return 'Kiin Kiin Bao Bao · Modern Asian tapas in Copenhagen';
  }

  mount() {
    const { dishes, restaurant, contact } = this.models;
    this.view = new HomeView(this.root).render({
      info: restaurant.info,
      dish: dishes.currentSteamerDish,
      steamerIndex: dishes.get('steamerIndex'),
      steamerCount: dishes.steamer.length,
      featured: dishes.featured,
    });

    // Model → view: whenever the steamer index changes, swap the dish.
    this.onCleanup(
      dishes.subscribe((s) => this.view.updateSteamer(dishes.currentSteamerDish, s.steamerIndex, dishes.steamer.length))
    );

    // View → model: arrows step through dishes.
    this.root.querySelectorAll('.steamer-nav').forEach((btn) =>
      this.listen(btn, 'click', () => {
        dishes.nextSteamerDish(Number(btn.dataset.step));
        this.restartAutoplay();
      })
    );

    // Autoplay every 5 s; pauses while the visitor hovers or focuses the steamer.
    const steamer = this.root.querySelector('.steamer');
    this.paused = false;
    ['pointerenter', 'focusin'].forEach((t) => this.listen(steamer, t, () => (this.paused = true)));
    ['pointerleave', 'focusout'].forEach((t) => this.listen(steamer, t, () => (this.paused = false)));
    this.restartAutoplay();
    this.onCleanup(() => clearInterval(this.timer));

    // The map embed is heavy, so it only loads when asked for.
    this.listen(this.root.querySelector('.map-load'), 'click', () => this.view.showMap(restaurant.info.mapEmbed));

    // Contact form.
    this.listen(this.view.form, 'submit', (e) => {
      e.preventDefault();
      const values = this.view.readForm();
      const errors = contact.validate(values);
      this.view.showErrors(errors);
      if (Object.keys(errors).length) return;
      window.location.href = contact.mailto(restaurant.info.email, values);
      this.view.showSent();
    });

    if (this.params.section === 'contact') {
      requestAnimationFrame(() =>
        this.root.querySelector('#contact')?.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth' })
      );
    }
  }

  restartAutoplay() {
    clearInterval(this.timer);
    if (reducedMotion()) return;
    this.timer = setInterval(() => {
      if (!this.paused && !document.hidden) this.models.dishes.nextSteamerDish(1);
    }, 5000);
  }
}

export class AlaCarteController extends Controller {
  get title() {
    return 'À la carte menu · Kiin Kiin Bao Bao';
  }

  data() {
    const { menus } = this.models;
    return { menu: menus.alaCarte, lang: menus.get('lang'), key: menus.allergenKey() };
  }

  mount() {
    const { menus } = this.models;
    this.view = new AlaCarteView(this.root).render(this.data());
    this.onCleanup(menus.subscribe(() => this.view.swapLanguage(this.data())));
    this.listen(this.root, 'click', (e) => {
      const btn = e.target.closest('[data-lang]');
      if (btn) menus.setLang(btn.dataset.lang);
    });
  }
}

export class SetMenuController extends Controller {
  get title() {
    return `${this.models.menus.setMenu(this.params.menu).title} · Kiin Kiin Bao Bao`;
  }

  mount() {
    new SetMenuView(this.root).render({ menu: this.models.menus.setMenu(this.params.menu), path: this.params.path });
  }
}

export class KidsController extends Controller {
  get title() {
    return 'Kids menu · Kiin Kiin Bao Bao';
  }

  mount() {
    new ListMenuView(this.root).render({ menu: this.models.menus.kids, path: '/kids', key: this.models.menus.allergenKey('en') });
  }
}

export class DrinksController extends Controller {
  get title() {
    return 'Drinks · Kiin Kiin Bao Bao';
  }

  mount() {
    const view = new ListMenuView(this.root).render({
      menu: this.models.menus.drinks,
      path: '/drinks',
      lead: 'Cocktails, spritz, coffee and tea. Prices in kr.',
      promo: true,
    });
    const dialog = view.$('.promo-dialog');
    this.listen(view.$('.promo-card'), 'click', () => dialog.showModal());
    this.listen(dialog, 'click', (e) => e.target === dialog && dialog.close());
    this.onCleanup(() => dialog.open && dialog.close());
  }
}

export class EventsController extends Controller {
  get title() {
    return 'Events and catering · Kiin Kiin Bao Bao';
  }

  mount() {
    new EventsView(this.root).render({ events: this.models.content.get('events'), info: this.models.restaurant.info });
  }
}

export class AboutController extends Controller {
  get title() {
    return 'About us · Kiin Kiin Bao Bao';
  }

  mount() {
    new AboutView(this.root).render({ about: this.models.content.get('about') });
  }
}

export class FaqController extends Controller {
  get title() {
    return 'FAQ · Kiin Kiin Bao Bao';
  }

  mount() {
    const { faq } = this.models;
    faq.setQuery('');
    this.view = new FaqView(this.root).render({ total: faq.results.length });
    this.view.renderResults(faq.results, '');
    this.onCleanup(faq.subscribe((s) => this.view.renderResults(faq.results, s.query.trim())));
    this.listen(this.view.input, 'input', (e) => faq.setQuery(e.target.value));
  }
}

export class JobsController extends Controller {
  get title() {
    return 'Jobs · Kiin Kiin Bao Bao';
  }

  mount() {
    new JobsView(this.root).render({ jobs: this.models.content.get('jobs'), info: this.models.restaurant.info });
  }
}

export class PrivacyController extends Controller {
  get title() {
    return 'Privacy policy · Kiin Kiin Bao Bao';
  }

  mount() {
    new LegalView(this.root).render({
      title: 'Privacy policy',
      page: this.models.content.get('privacy'),
      info: this.models.restaurant.info,
    });
  }
}

export class TermsController extends Controller {
  get title() {
    return 'Terms and conditions · Kiin Kiin Bao Bao';
  }

  mount() {
    new LegalView(this.root).render({
      title: 'Terms and conditions',
      page: this.models.content.get('terms'),
      info: this.models.restaurant.info,
      footer: `<section><h2>Privacy</h2><p>See our <a href="#/privacy">privacy policy</a>.</p></section>`,
    });
  }
}

export class NotFoundController extends Controller {
  get title() {
    return 'Page not found · Kiin Kiin Bao Bao';
  }

  mount() {
    new NotFoundView(this.root).render();
  }
}
