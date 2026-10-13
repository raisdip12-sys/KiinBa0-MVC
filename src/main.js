import { Router } from './core/Router.js';
import { createModels } from './models/index.js';
import { LayoutController } from './controllers/LayoutController.js';
import {
  HomeController,
  AlaCarteController,
  SetMenuController,
  KidsController,
  DrinksController,
  EventsController,
  AboutController,
  FaqController,
  JobsController,
  PrivacyController,
  TermsController,
  NotFoundController,
} from './controllers/pages.js';

// Route table: path → controller (+ params for shared controllers).
const routes = [
  { path: '/', Controller: HomeController },
  { path: '/contact', Controller: HomeController, params: { section: 'contact' } },
  { path: '/menu', Controller: AlaCarteController },
  { path: '/3-course', Controller: SetMenuController, params: { menu: 'three-course' } },
  { path: '/tasting', Controller: SetMenuController, params: { menu: 'tasting' } },
  { path: '/kids', Controller: KidsController },
  { path: '/drinks', Controller: DrinksController },
  { path: '/events', Controller: EventsController },
  { path: '/about', Controller: AboutController },
  { path: '/faq', Controller: FaqController },
  { path: '/jobs', Controller: JobsController },
  { path: '/privacy', Controller: PrivacyController },
  { path: '/terms', Controller: TermsController },
];

class App {
  constructor(root) {
    this.models = createModels();
    this.layout = new LayoutController({ root, models: this.models });
    this.current = null;
    this.firstLoad = true;
    this.router = new Router({
      routes,
      notFound: { Controller: NotFoundController },
      onNavigate: (route) => this.show(route),
    });
  }

  start() {
    this.router.start();
  }

  show(route) {
    const swap = () => {
      this.current?.unmount();
      const outlet = this.layout.outlet;
      outlet.dataset.route = route.path;
      this.current = new route.Controller({
        root: outlet,
        models: this.models,
        params: { path: route.path, ...(route.params || {}) },
      });
      this.current.mount();
      document.title = this.current.title;
      this.layout.onRoute(route.path);
      if (route.params?.section !== 'contact') window.scrollTo(0, 0);
      if (!this.firstLoad) outlet.focus({ preventScroll: true });
      this.firstLoad = false;
    };

    swap();
  }
}

new App(document.getElementById('app')).start();
