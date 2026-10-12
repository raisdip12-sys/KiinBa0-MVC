import { Model } from '../core/Model.js';
import { restaurant } from '../data/restaurant.js';
import { dishes } from '../data/dishes.js';
import { alaCarte, setMenus, kidsMenu, drinksMenu } from '../data/menus.js';
import { faqs, jobs, events, about, privacy } from '../data/pages.js';

const store = {
  read(key, fallback) {
    try {
      return localStorage.getItem(key) ?? fallback;
    } catch {
      return fallback;
    }
  },
  write(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      /* storage blocked: the choice just won't be remembered */
    }
  },
};

/** Restaurant facts: address, hours, links, socials. */
export class RestaurantModel extends Model {
  constructor() {
    super(restaurant);
  }

  get info() {
    return this.state;
  }
}

/** Dishes with photos: the steamer carousel and "most loved" grid. */
export class DishModel extends Model {
  constructor() {
    super({ dishes, steamerIndex: 0 });
  }

  get featured() {
    return this.state.dishes.filter((d) => d.featured);
  }

  get steamer() {
    return this.state.dishes.filter((d) => d.inSteamer);
  }

  get currentSteamerDish() {
    return this.steamer[this.state.steamerIndex];
  }

  nextSteamerDish(step = 1) {
    const n = this.steamer.length;
    this.set({ steamerIndex: (this.state.steamerIndex + step + n) % n });
  }

  find(id) {
    return this.state.dishes.find((d) => d.id === id);
  }
}

/** All menus, plus the visitor's chosen language for the à la carte menu. */
export class MenuModel extends Model {
  constructor() {
    super({ lang: store.read('kkbb-lang', 'en') === 'dk' ? 'dk' : 'en' });
  }

  get alaCarte() {
    return alaCarte[this.state.lang];
  }

  setLang(lang) {
    if (lang !== 'en' && lang !== 'dk') return;
    store.write('kkbb-lang', lang);
    this.set({ lang });
  }

  setMenu(id) {
    return setMenus[id];
  }

  get kids() {
    return kidsMenu;
  }

  get drinks() {
    return drinksMenu;
  }
}

/** FAQ list with a search query. */
export class FaqModel extends Model {
  constructor() {
    super({ faqs, query: '' });
  }

  setQuery(query) {
    this.set({ query });
  }

  get results() {
    const q = this.state.query.trim().toLowerCase();
    if (!q) return this.state.faqs;
    return this.state.faqs.filter(({ q: question, a }) => `${question} ${a}`.toLowerCase().includes(q));
  }
}

/** Contact form: validation rules live here, not in the view. */
export class ContactModel extends Model {
  constructor() {
    super({ status: 'idle', errors: {} });
  }

  validate({ name, email, phone, message }) {
    const errors = {};
    if (!name.trim()) errors.name = 'Enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errors.email = 'Enter an email address like name@example.com.';
    if (phone.trim() && !/^[+\d][\d\s-]{5,}$/.test(phone.trim())) errors.phone = 'Use digits, spaces or a leading +.';
    if (message.trim().length < 5) errors.message = 'Write a few words so we know how to help.';
    this.set({ errors, status: Object.keys(errors).length ? 'invalid' : 'valid' });
    return errors;
  }

  /** Builds a mailto: link so the message opens in the visitor's email app. */
  mailto(to, { name, email, phone, message }) {
    const body = `${message.trim()}\n\n${name.trim()}\n${email.trim()}${phone.trim() ? `\n${phone.trim()}` : ''}`;
    return `mailto:${to}?subject=${encodeURIComponent(`Message from ${name.trim()}`)}&body=${encodeURIComponent(body)}`;
  }
}

/** Static page content: events, jobs, about, privacy. */
export class ContentModel extends Model {
  constructor() {
    super({ jobs, events, about, privacy });
  }
}

export function createModels() {
  return {
    restaurant: new RestaurantModel(),
    dishes: new DishModel(),
    menus: new MenuModel(),
    faq: new FaqModel(),
    contact: new ContactModel(),
    content: new ContentModel(),
  };
}
