/**
 * Base View.
 * A view turns plain data into DOM and reports user actions back to its
 * controller through callbacks. It holds no business logic of its own.
 */
export class View {
  constructor(root) {
    this.root = root;
  }

  /** Subclasses return an HTML string for the given data. */
  template(/* data */) {
    return '';
  }

  render(data) {
    this.root.innerHTML = this.template(data);
    this.afterRender(data);
    return this;
  }

  /** Hook for subclasses: cache elements, attach listeners. */
  afterRender(/* data */) {}

  $(selector) {
    return this.root.querySelector(selector);
  }

  $$(selector) {
    return [...this.root.querySelectorAll(selector)];
  }
}

/** Escape text before it goes into a template string. */
export function esc(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

/** Map an array through a template and join it. */
export const each = (items, fn) => items.map(fn).join('');
