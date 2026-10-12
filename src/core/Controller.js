/**
 * Base Controller.
 * Connects models to views for one route. The router calls mount() when
 * the route opens and unmount() when the visitor leaves it, so timers and
 * listeners never leak between pages.
 */
export class Controller {
  constructor({ root, models, params = {} }) {
    this.root = root;
    this.models = models;
    this.params = params;
    this.cleanups = [];
  }

  /** Page title shown in the browser tab. */
  get title() {
    return 'Kiin Kiin Bao Bao';
  }

  mount() {}

  /** Register something to undo when the page unmounts. */
  onCleanup(fn) {
    this.cleanups.push(fn);
  }

  listen(target, type, handler, options) {
    target.addEventListener(type, handler, options);
    this.onCleanup(() => target.removeEventListener(type, handler, options));
  }

  unmount() {
    this.cleanups.forEach((fn) => fn());
    this.cleanups = [];
  }
}
