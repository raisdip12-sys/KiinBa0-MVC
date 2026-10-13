import { View, esc, each } from '../core/View.js';
import { img, icon, pageHead } from './components/partials.js';

export class EventsView extends View {
  template({ events, info }) {
    return `
      <div class="events-page">
        <div class="events-hero">
          <div class="events-copy">
            ${pageHead({ title: events.venue, lead: esc(events.intro) })}
            <dl class="highlights">
              ${each(events.highlights, (h) => `<div><dt>${esc(h.title)}</dt><dd>${esc(h.text)}</dd></div>`)}
            </dl>
            <div class="hero-actions">
              <a class="btn" href="${events.brochure}" target="_blank" rel="noopener">Open the event brochure (PDF)</a>
              <a class="btn btn-ghost" href="mailto:${info.cateringEmail}?subject=${encodeURIComponent('Catering enquiry')}">Ask about catering</a>
            </div>
          </div>
          <div class="events-photos">
            ${each(events.photos, (p, i) => `<div class="events-photo" style="--i:${i}">${img(p.image, p.alt)}</div>`)}
          </div>
        </div>
      </div>`;
  }
}

export class AboutView extends View {
  template({ about }) {
    return `
      <div class="about-page">
        ${pageHead({ title: 'About Kiin Kiin Bao Bao', lead: 'A bao bar on Vesterbrogade from the family behind Michelin-starred Kiin Kiin.' })}
        <div class="story">
          ${each(
            about.blocks,
            (b, i) => `
            <article class="story-block${i % 2 ? ' is-flipped' : ''}">
              <div class="story-photo">${img(b.image, '')}</div>
              <div class="story-text">
                <h2>${esc(b.title)}</h2>
                <p>${esc(b.text)}</p>
              </div>
            </article>`
          )}
        </div>

        <section class="owners" aria-labelledby="owners-title">
          <div class="owners-photo">${img(about.owners.image, about.owners.names)}</div>
          <div class="owners-text">
            <h2 id="owners-title" class="section-title">Meet ${esc(about.owners.names)}</h2>
            ${each(about.owners.paragraphs, (p) => `<p>${esc(p)}</p>`)}
          </div>
        </section>

        <section class="brands" aria-labelledby="brands-title">
          <h2 id="brands-title" class="section-title">The Kiin family</h2>
          <ul class="brand-list" role="list">
            ${each(
              about.brands,
              (b) => `
              <li class="brand-item">
                <div class="brand-mark">${img(b.image, b.name)}</div>
                <div><h3>${esc(b.name)}</h3><p>${esc(b.text)}</p></div>
              </li>`
            )}
          </ul>
        </section>
      </div>`;
  }
}

export class FaqView extends View {
  template({ total }) {
    return `
      <div class="faq-page">
        ${pageHead({ title: 'Questions and answers', lead: 'About our food, allergies and visiting us.' })}
        <label class="search">
          ${icon('search')}
          <span class="sr-only">Search the questions</span>
          <input type="search" placeholder="Search, for example “vegan”" autocomplete="off">
        </label>
        <p class="faq-count muted" role="status">${total} questions</p>
        <div class="faq-list"></div>
        <p class="faq-more">Can’t find your answer? <a href="#/contact">Write to us</a> or call <a href="tel:+4521545051">+45 2154 5051</a>.</p>
      </div>`;
  }

  afterRender() {
    this.list = this.$('.faq-list');
    this.input = this.$('input[type="search"]');
    this.count = this.$('.faq-count');
  }

  renderResults(items, query) {
    this.count.textContent = query
      ? `${items.length} ${items.length === 1 ? 'question matches' : 'questions match'} “${query}”`
      : `${items.length} questions`;
    this.list.innerHTML = items.length
      ? each(
          items,
          (f) => `
          <details class="faq-item">
            <summary>${esc(f.q)}${icon('chevron')}</summary>
            <p>${esc(f.a)}</p>
          </details>`
        )
      : `<p class="faq-empty">No questions match that search. Try “halal”, “vegan” or “kitchen”.</p>`;
  }
}

export class JobsView extends View {
  template({ jobs, info }) {
    return `
      <div class="jobs-page">
        ${pageHead({ title: 'Work with us', lead: each(jobs.intro, (p) => `${esc(p)} `) })}
        <ul class="roles" role="list">
          ${each(
            jobs.roles,
            (r) => `
            <li class="role">
              <h2>${esc(r.title)}</h2>
              <p>${esc(r.text)}</p>
              <a class="text-link" href="mailto:${info.jobsEmail}?subject=${encodeURIComponent(`Application: ${r.title}`)}">Apply by email</a>
            </li>`
          )}
        </ul>
      </div>`;
  }
}

/** Privacy policy and terms share one layout. */
export class LegalView extends View {
  template({ title, page, info, footer = '' }) {
    return `
      <div class="prose-page">
        ${pageHead({ title, lead: `Last updated ${esc(page.updated)}` })}
        <div class="prose">
          ${each(
            page.sections,
            (s) => `
            <section>
              <h2>${esc(s.heading)}</h2>
              ${each(s.paragraphs || [], (p) => `<p>${esc(p)}</p>`)}
              ${s.list ? `<ul>${each(s.list, (li) => `<li>${esc(li)}</li>`)}</ul>` : ''}
              ${s.after ? `<p>${esc(s.after)}</p>` : ''}
            </section>`
          )}
          ${footer}
          <section>
            <h2>Contact</h2>
            <p>Questions about this page or your data? Write to <a href="mailto:${info.email}">${esc(info.email)}</a>, call <a href="${info.phoneHref}">${esc(info.phone)}</a>, or visit us at ${esc(info.address.street)}, ${esc(info.address.postcode)} ${esc(info.address.city)}.</p>
          </section>
        </div>
      </div>`;
  }
}

export class NotFoundView extends View {
  template() {
    return `
      <div class="prose-page not-found">
        ${pageHead({ title: 'This page is not on the menu', lead: 'The link may be old or mistyped.' })}
        <div class="hero-actions">
          <a class="btn" href="#/">Go to the homepage</a>
          <a class="btn btn-ghost" href="#/menu">See the menu</a>
        </div>
      </div>`;
  }
}
