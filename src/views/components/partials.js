import { esc, each } from '../../core/View.js';

/** Image from /public/images. Lazy by default; pass eager for above-the-fold. */
export const img = (name, alt, { cls = '', eager = false, ext = 'webp', w, h } = {}) =>
  `<img src="./images/${name}.${ext}" alt="${esc(alt)}"${cls ? ` class="${cls}"` : ''}${
    w ? ` width="${w}"` : ''
  }${h ? ` height="${h}"` : ''} ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;

const paths = {
  facebook:
    '<path d="M14 8.5V6.8c0-.8.5-1 .9-1H17V2.3L14.1 2.3C10.9 2.3 10.2 4.7 10.2 6.3v2.2H8v3.6h2.2V22H14v-9.9h2.8l.4-3.6H14z"/>',
  instagram:
    '<path d="M12 7.3A4.7 4.7 0 1 0 12 16.7 4.7 4.7 0 0 0 12 7.3zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM16.9 6a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z"/><path d="M12 3.6c2.7 0 3 0 4.1.1 1 0 1.5.2 1.9.4.5.2.8.4 1.2.8.4.4.6.7.8 1.2.1.4.3.9.4 1.9v8c0 1-.2 1.5-.4 1.9-.2.5-.4.8-.8 1.2-.4.4-.7.6-1.2.8-.4.1-.9.3-1.9.4H7.9c-1 0-1.5-.2-1.9-.4a3 3 0 0 1-1.2-.8 3 3 0 0 1-.8-1.2c-.1-.4-.3-.9-.4-1.9V7.9c0-1 .2-1.5.4-1.9.2-.5.4-.8.8-1.2.4-.4.7-.6 1.2-.8.4-.1.9-.3 1.9-.4H12zM12 2c-2.7 0-3.1 0-4.1.1-1.1 0-1.8.2-2.4.5-.7.2-1.2.6-1.8 1.1-.5.6-.9 1.1-1.1 1.8-.3.6-.4 1.4-.5 2.4V16c0 1.1.2 1.8.5 2.4.2.7.6 1.2 1.1 1.8.6.5 1.1.9 1.8 1.1.6.3 1.4.4 2.4.5h8.2c1.1 0 1.8-.2 2.4-.5.7-.2 1.2-.6 1.8-1.1.5-.6.9-1.1 1.1-1.8.3-.6.4-1.4.5-2.4V7.9c0-1.1-.2-1.8-.5-2.4-.2-.7-.6-1.2-1.1-1.8-.6-.5-1.1-.9-1.8-1.1-.6-.3-1.4-.4-2.4-.5H12z"/>',
  close: '<path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/>',
  menu: '<path d="M4 8h16M4 16h16" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/>',
  chevron: '<path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  arrowLeft: '<path d="M15 6l-6 6 6 6" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  arrowRight: '<path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  search: '<circle cx="11" cy="11" r="6.5" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M16 16l4.5 4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
  leaf: '<path d="M5 19C5 10 10 5 20 4c-1 10-6 15-15 15zm0 0l7-7" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
};

export const icon = (name, label = '') =>
  `<svg class="icon icon-${name}" viewBox="0 0 24 24" fill="currentColor" ${
    label ? `role="img" aria-label="${esc(label)}"` : 'aria-hidden="true"'
  }>${paths[name]}</svg>`;

/** Shared header used by every page title. */
export const pageHead = ({ title, lead = '', aside = '' }) => `
  <header class="page-head">
    <h1 class="page-title">${esc(title)}</h1>
    ${lead ? `<p class="page-lead">${lead}</p>` : ''}
    ${aside}
  </header>`;

/** A printed-menu line: number, name and allergen codes, with detail underneath. Drinks also show a price. */
export const menuLine = (item) => `
  <li class="menu-line${item.dish ? ' has-photo' : ''}">
    <div class="menu-line-row">
      ${item.no != null ? `<span class="menu-no">${item.no}</span>` : ''}
      ${
        item.dish
          ? `<button type="button" class="menu-name link-like" data-dish="${esc(item.dish)}" aria-haspopup="dialog">${esc(item.name)}</button>`
          : `<span class="menu-name">${esc(item.name)}</span>`
      }
      ${item.tags ? `<span class="menu-tags" title="Allergen and diet codes">${esc(item.tags)}</span>` : ''}
      ${
        item.price != null
          ? `<span class="menu-leader" aria-hidden="true"></span><span class="menu-price">${item.price}</span>`
          : ''
      }
    </div>
    ${item.detail ? `<p class="menu-detail">${esc(item.detail)}</p>` : ''}
  </li>`;

export const menuSection = (section, i = 0) => `
  <section class="menu-section" style="--i:${i}">
    <h2 class="menu-heading">
      <span>${esc(section.heading)}</span>
      ${section.price ? `<span class="menu-heading-price">${section.price} kr each</span>` : ''}
    </h2>
    <ul class="menu-lines" role="list">${each(section.items, menuLine)}</ul>
  </section>`;

export const noteCard = (note) =>
  note
    ? `<aside class="note-card">
        ${icon('leaf')}
        <div>
          <h2>${esc(note.heading)}</h2>
          ${each(note.lines, (l) => `<p>${esc(l)}</p>`)}
        </div>
      </aside>`
    : '';
