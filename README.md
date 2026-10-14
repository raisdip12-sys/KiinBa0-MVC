# Kiin Kiin Bao Bao: restaurant website (v2, JavaScript MVC)

The Kiin Kiin Bao Bao website rebuilt as a single-page app in plain JavaScript using the
Model–View–Controller pattern. No framework and no build step: the browser loads native ES modules.

## Run it

ES modules don't load from `file://`, so open the site through any local server:

- **VS Code:** right-click `index.html` → *Open with Live Server*
- **Node:** `npm start` (runs `npx serve` on http://localhost:5173)
- **Python:** `python -m http.server 5173`, then open http://localhost:5173

To publish, upload the whole folder to any static host (GitHub Pages, Netlify, Vercel).
URLs use hashes (`#/menu`, `#/faq`), so no server rewrite rules are needed.

## How it's organised

```
index.html                 one HTML page; the app renders into #app
src/
  main.js                  route table + App (mounts/unmounts controllers, page transitions)
  core/
    Model.js               base model: state + subscribe()
    View.js                base view: template() → DOM, esc() for safe HTML
    Controller.js          base controller: mount()/unmount(), auto-cleanup of listeners
    Router.js              hash router
  data/                    all content: restaurant facts, dishes, menus, FAQ, jobs, privacy
  models/index.js          RestaurantModel, DishModel, MenuModel, FaqModel, ContactModel, ContentModel
  views/
    LayoutView.js          header, mobile menu, footer, dish dialog
    HomeView.js            hero steamer, most loved dishes, visit + contact form
    MenuViews.js           à la carte (EN/DK), set menus, kids, drinks
    PageViews.js           events, about, FAQ, jobs, privacy, 404
    components/partials.js shared bits: images, icons, menu lines
  controllers/
    LayoutController.js    nav, dropdown, dish dialog
    pages.js               one controller per page
  styles/main.css          design tokens, layout, animations
images/                    photos, compressed to WebP (35 MB → 2.6 MB)
fonts/                     Josefin Sans and Newsreader, served locally (SIL Open Font License)
docs/                      event brochure PDF
```

**The flow:** a URL change → `Router` picks a route → `App` unmounts the old controller and mounts
the new one → the controller reads data from **models** and hands plain objects to a **view** →
user actions go back to the controller, which updates the model → the model notifies subscribers
and the view re-renders.

Example: the à la carte language switch. Clicking *Dansk* calls `menus.setLang('dk')` (controller →
model). `MenuModel` saves the choice and notifies subscribers; `AlaCarteController` hears it and
calls `view.swapLanguage()` (model → view).

## Editing content

Everything a restaurant changes often lives in `src/data/`:

- `menus.js`: à la carte (English and Danish), 3-course and tasting (chef's choice and vegetarian tracks), kids, drinks, allergen key
- `dishes.js`: dishes with photos (the hero steamer and "Most loved dishes")
- `restaurant.js`: address, hours, phone, emails, booking and gift-card links
- `pages.js`: FAQ, jobs, events, about, privacy policy, terms and conditions

## What changed from v1

- One shared header and footer on every page, so no page is a dead end
- Mobile menu (hamburger) with an animated panel
- Rebuilt privacy page (it was an HTML fragment with no styling) and a new terms and conditions page
- Square favicon and Apple touch icon
- Hero: dishes rotate inside a bamboo steamer whose lid lifts on load, with steam rising
- Dish popups with photo and description
- Menus laid out like a printed card; food prices are not shown, drinks keep theirs
- English/Danish menu choice is remembered
- FAQ search with smooth expanding answers
- Contact form validates and opens the visitor's email app with the message ready
- Images compressed from 35 MB to 2.6 MB; meta description and alt text added
- Keyboard focus styles, skip link, and full support for reduced-motion settings
- Allergen key on the menus; set menus show the vegetarian track and availability
- Fonts served from the site itself, so no visitor data goes to Google Fonts
- Motion follows Emil Kowalski's design engineering principles: strong ease-out curves, UI animations under 300ms, press feedback on every button, hover effects only on real mice, no animation on keyboard actions, and gentle fades instead of movement for reduced-motion users

## Author

Md Raihanul Islam Dipu, student in Computer Science.
This project is for educational purposes.
