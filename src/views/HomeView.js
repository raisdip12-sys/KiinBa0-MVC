import { View, esc, each } from '../core/View.js';
import { img, icon } from './components/partials.js';

export class HomeView extends View {
  template({ info, dish, steamerCount, steamerIndex, featured }) {
    return `
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-backdrop" aria-hidden="true">${img('interior', '', { eager: true })}</div>

        <div class="hero-copy">
          <p class="hero-place">Vesterbrogade 96, Copenhagen</p>
          <h1 id="hero-title" class="hero-title">
            <span class="hero-line">Baos made</span>
            <span class="hero-line">fresh every day</span>
          </h1>
          <p class="hero-lead">Modern Asian tapas, Thai curries and cocktails. Open every evening from 17.00.</p>
          <div class="hero-actions">
            <a class="btn" href="${info.links.reservation}" target="_blank" rel="noopener">Book a table</a>
            <a class="btn btn-ghost" href="${info.links.takeaway}" target="_blank" rel="noopener">Order takeaway</a>
            <a class="text-link" href="${info.links.giftCard}" target="_blank" rel="noopener">Buy a gift card</a>
          </div>
        </div>

        <figure class="steamer" aria-roledescription="carousel" aria-label="Dishes from our kitchen">
          <div class="steam" aria-hidden="true"><i></i><i></i><i></i></div>
          <div class="steamer-basket">
            <button type="button" class="steamer-dish" data-dish="${esc(dish.id)}" aria-haspopup="dialog">
              ${this.dishImage(dish)}
            </button>
            <div class="steamer-lid" aria-hidden="true"></div>
          </div>
          <figcaption class="steamer-caption">
            <button type="button" class="steamer-nav" data-step="-1" aria-label="Previous dish">${icon('arrowLeft')}</button>
            <span class="steamer-name" aria-live="polite">
              <span class="steamer-dish-name">${esc(dish.name)}</span>
              <span class="steamer-count">${steamerIndex + 1} of ${steamerCount}</span>
            </span>
            <button type="button" class="steamer-nav" data-step="1" aria-label="Next dish">${icon('arrowRight')}</button>
          </figcaption>
        </figure>
      </section>

      <section class="loved" aria-labelledby="loved-title">
        <div class="section-head">
          <h2 id="loved-title" class="section-title">Most loved dishes</h2>
          <a class="text-link" href="#/menu">See the full menu</a>
        </div>
        <ul class="plates" role="list">
          ${each(
            featured,
            (d, i) => `
            <li class="plate" style="--i:${i}">
              <button type="button" class="plate-btn" data-dish="${esc(d.id)}" aria-haspopup="dialog">
                <span class="plate-photo">${img(d.image, '', { w: 400, h: 400 })}</span>
                <span class="plate-name">${esc(d.name)}</span>
              </button>
            </li>`
          )}
        </ul>
      </section>

      <section class="visit" id="contact" aria-labelledby="visit-title">
        <div class="visit-info">
          <h2 id="visit-title" class="section-title">Visit us</h2>
          <dl class="facts">
            <div><dt>Address</dt><dd>${esc(info.address.street)}<br>${esc(info.address.postcode)} ${esc(info.address.city)}</dd></div>
            <div><dt>Open</dt><dd>${esc(info.hours)}<br><span class="muted">${esc(info.holidayNote)}</span></dd></div>
            <div><dt>Phone</dt><dd><a href="${info.phoneHref}">${esc(info.phone)}</a></dd></div>
          </dl>
          <p class="small-print">${esc(info.receiptNote)}</p>
          <div class="map-frame">
            <button type="button" class="map-load btn btn-ghost">Show map</button>
            <a class="text-link" href="https://maps.google.com/?q=Vesterbrogade+96+Copenhagen" target="_blank" rel="noopener">Open in Google Maps</a>
          </div>
        </div>

        <div class="visit-write">
          <h2 class="section-title">Write to us</h2>
          <p class="muted">Questions about bookings, groups or allergies? Your message opens in your email app, addressed to ${esc(info.email)}.</p>
          <form class="contact-form" novalidate>
            ${this.field('name', 'Name', 'text', 'name')}
            ${this.field('email', 'Email', 'email', 'email')}
            ${this.field('phone', 'Phone (optional)', 'tel', 'tel')}
            <div class="field">
              <label for="f-message">Message</label>
              <textarea id="f-message" name="message" rows="5" aria-describedby="e-message"></textarea>
              <p class="field-error" id="e-message"></p>
            </div>
            <button class="btn" type="submit">Write email</button>
            <p class="form-status" role="status"></p>
          </form>
          <div class="visit-photo">${img('space-2', 'The dining room at Kiin Kiin Bao Bao')}</div>
        </div>
      </section>`;
  }

  field(name, label, type, autocomplete) {
    return `
      <div class="field">
        <label for="f-${name}">${label}</label>
        <input id="f-${name}" name="${name}" type="${type}" autocomplete="${autocomplete}" aria-describedby="e-${name}">
        <p class="field-error" id="e-${name}"></p>
      </div>`;
  }

  dishImage(dish) {
    return img(dish.image, dish.name, { eager: true, w: 560, h: 560 });
  }

  afterRender() {
    this.form = this.$('.contact-form');
    this.mapFrame = this.$('.map-frame');
  }

  /** Swap the "Show map" button for the Google Maps embed. */
  showMap(src) {
    this.mapFrame.classList.add('is-loaded');
    this.mapFrame.innerHTML = `<iframe src="${src}" title="Map showing Vesterbrogade 96, Copenhagen" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  }

  /** Swap the dish inside the steamer with a short turn-and-fade. */
  updateSteamer(dish, index, count) {
    const btn = this.$('.steamer-dish');
    const swap = () => {
      btn.dataset.dish = dish.id;
      btn.innerHTML = this.dishImage(dish);
      this.$('.steamer-dish-name').textContent = dish.name;
      this.$('.steamer-count').textContent = `${index + 1} of ${count}`;
    };
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return swap();
    // Rapid clicks: cancel the pending swap so animations never pile up.
    clearTimeout(this.swapTimer);
    btn.classList.remove('is-entering');
    btn.classList.add('is-leaving');
    this.swapTimer = setTimeout(() => {
      swap();
      btn.classList.remove('is-leaving');
      void btn.offsetWidth; // restart the enter animation cleanly
      btn.classList.add('is-entering');
      btn.addEventListener('animationend', () => btn.classList.remove('is-entering'), { once: true });
    }, 150);
  }

  readForm() {
    const data = new FormData(this.form);
    return Object.fromEntries(['name', 'email', 'phone', 'message'].map((k) => [k, String(data.get(k) || '')]));
  }

  showErrors(errors) {
    ['name', 'email', 'phone', 'message'].forEach((k) => {
      const input = this.form.elements[k];
      if (errors[k]) input.setAttribute('aria-invalid', 'true');
      else input.removeAttribute('aria-invalid');
      this.$(`#e-${k}`).textContent = errors[k] || '';
    });
    const first = ['name', 'email', 'phone', 'message'].find((k) => errors[k]);
    if (first) this.form.elements[first].focus();
    this.$('.form-status').textContent = '';
  }

  showSent() {
    this.$('.form-status').textContent = 'Your email app should now be open with the message ready to send.';
  }
}
