/**
 * Base Model.
 * Holds data and a small piece of observable state. Views never touch
 * a model directly. Controllers read from it and pass plain data to views.
 */
export class Model {
  constructor(initialState = {}) {
    this.state = { ...initialState };
    this.listeners = new Set();
  }

  get(key) {
    return this.state[key];
  }

  set(patch) {
    this.state = { ...this.state, ...patch };
    this.listeners.forEach((fn) => fn(this.state));
  }

  /** Subscribe to state changes. Returns an unsubscribe function. */
  subscribe(fn) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }
}
