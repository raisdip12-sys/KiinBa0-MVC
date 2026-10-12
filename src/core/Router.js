/**
 * Hash router: #/menu, #/faq, #/contact …
 * Hash URLs work on any static host (GitHub Pages, Netlify, a plain
 * folder) without server rewrite rules.
 */
export class Router {
  constructor({ routes, notFound, onNavigate }) {
    this.routes = routes;
    this.notFound = notFound;
    this.onNavigate = onNavigate;
    this.handle = this.handle.bind(this);
  }

  start() {
    window.addEventListener('hashchange', this.handle);
    this.handle();
  }

  /** Current path without the leading '#', e.g. '/menu'. */
  get path() {
    const raw = window.location.hash.replace(/^#/, '') || '/';
    return raw.startsWith('/') ? raw : `/${raw}`;
  }

  resolve(path) {
    const match = this.routes.find((r) => r.path === path);
    return match || { ...this.notFound, path };
  }

  handle() {
    this.onNavigate(this.resolve(this.path));
  }

  static go(path) {
    window.location.hash = path;
  }
}
