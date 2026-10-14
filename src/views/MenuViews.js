import { View, esc, each } from '../core/View.js';
import { img, pageHead, menuSection, noteCard, allergenLegend } from './components/partials.js';

/** Other menus, shown at the foot of each menu page. */
const otherMenus = (current) => {
  const all = [
    ['/menu', 'À la carte'],
    ['/3-course', '3-course menu'],
    ['/tasting', 'Tasting menu'],
    ['/kids', 'Kids menu'],
    ['/drinks', 'Drinks'],
  ].filter(([p]) => p !== current);
  return `
    <nav class="menu-switch" aria-label="Other menus">
      <span class="muted">Other menus</span>
      ${each(all, ([p, l]) => `<a href="#${p}">${esc(l)}</a>`)}
    </nav>`;
};

/** À la carte, with an English / Danish switch. */
export class AlaCarteView extends View {
  template({ menu, lang, key }) {
    const toggle = `
      <div class="lang-switch" role="group" aria-label="Menu language">
        <button type="button" data-lang="en" aria-pressed="${lang === 'en'}">English</button>
        <button type="button" data-lang="dk" aria-pressed="${lang === 'dk'}">Dansk</button>
      </div>`;
    return `
      <div class="menu-page" lang="${lang === 'dk' ? 'da' : 'en'}">
        ${pageHead({
          title: lang === 'dk' ? 'À la carte menukort' : 'À la carte menu',
          lead: lang === 'dk' ? 'Tryk på en understreget ret for at se et foto.' : 'Tap an underlined dish to see a photo.',
          aside: toggle,
        })}
        <div class="menu-columns">${each(menu.sections, menuSection)}</div>
        ${allergenLegend(key)}
        ${noteCard(menu.note)}
        ${otherMenus('/menu')}
      </div>`;
  }

  /** Re-render only the menu content so the switch keeps focus. */
  swapLanguage(data) {
    const focused = document.activeElement?.dataset?.lang;
    this.render(data);
    if (focused) this.$(`[data-lang="${focused}"]`)?.focus();
  }
}

/** One numbered course list. Courses are served in order, so numbers carry meaning. */
const courseList = (courses) => `
  <ol class="courses" role="list">
    ${each(
      courses,
      (c, i) => `
      <li class="course" style="--i:${i}">
        <span class="course-no" aria-hidden="true">${i + 1}</span>
        <div class="course-body">
          <h3 class="course-heading">${esc(c.heading)}
            ${c.choose ? `<span class="course-choose">choose ${esc(c.choose)}</span>` : ''}
            ${c.all ? `<span class="course-choose">served to share</span>` : ''}
            ${c.extra ? `<span class="course-choose">${esc(c.extra)}</span>` : ''}
          </h3>
          <ul class="course-options${c.choose ? ' is-choice' : ''}" role="list">
            ${each(c.options, (o) => `<li>${esc(o)}</li>`)}
          </ul>
        </div>
      </li>`
    )}
  </ol>`;

/** 3-course and tasting menus: a chef's choice track beside a vegetarian track. */
export class SetMenuView extends View {
  template({ menu, path }) {
    return `
      <div class="menu-page set-menu">
        ${pageHead({
          title: menu.title,
          lead:
            each(menu.intro, (l) => `${esc(l)} `) +
            (menu.availability ? `<strong class="availability">${esc(menu.availability)}</strong>` : ''),
          aside: `<p class="set-price"><span class="set-price-num">${menu.price}</span> kr ${esc(menu.priceNote)}</p>`,
        })}
        <div class="tracks">
          ${each(
            menu.tracks,
            (t) => `
            <section class="track" aria-label="${esc(t.name)}">
              <h2 class="track-name">${esc(t.name)}</h2>
              ${courseList(t.courses)}
            </section>`
          )}
        </div>
        ${noteCard(menu.note)}
        ${otherMenus(path)}
      </div>`;
  }
}

/** Kids menu and drinks share the printed-list layout. */
export class ListMenuView extends View {
  template({ menu, path, lead = '', promo = false, key = null }) {
    return `
      <div class="menu-page${promo ? ' has-promo' : ''}">
        ${pageHead({ title: menu.title, lead })}
        <div class="menu-columns">${each(menu.sections, menuSection)}</div>
        ${allergenLegend(key)}
        ${noteCard(menu.note)}
        ${
          promo
            ? `<button type="button" class="promo-card" aria-haspopup="dialog" aria-label="Open the free cocktail offer">
                ${img('promo', 'Share your dinner on Instagram, tag @kiinkiinbaobao and get a free cocktail')}
                <span class="promo-label">Free cocktail when you share your dinner</span>
              </button>
              <dialog class="promo-dialog" aria-label="Free cocktail offer">
                ${img('promo', 'Del din aftensmad, nyd en gratis cocktail: tag et billede af din aftensmad, post det på Instagram og tag @kiinkiinbaobao. One cocktail per person per post, valid during your visit.')}
                <form method="dialog"><button class="btn btn-small">Close</button></form>
              </dialog>`
            : ''
        }
        ${otherMenus(path)}
      </div>`;
  }
}
