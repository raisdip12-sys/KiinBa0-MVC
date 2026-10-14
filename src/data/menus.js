// Every menu on the site. Items: { no, name, detail, tags }. Only drinks carry prices.
// Allergen letters (L, S, T, V, N, G) are kept exactly as printed on the menu.

export const alaCarte = {
  en: {
    title: 'À la carte',
    sections: [
      {
        heading: 'Starters',
        items: [
          { no: 1, name: 'Crispy kale', detail: 'basil mayo and herb oil' },
          { no: 2, name: 'Soto soup', detail: 'chicken, boiled egg and glass noodles', tags: 'L' },
          { no: 3, name: 'Oyster mushrooms', detail: 'chili mayo', tags: 'T' },
          { no: 4, name: 'Japanese spicy tuna', detail: 'sesame oil, kewpie chili mayo and papadum chips', tags: 'S' },
          { no: 5, name: 'Fried buttermilk prawn', detail: 'yuzu mayo and grilled pineapple', tags: 'S' },
          { no: 6, name: 'Thai mango salad', detail: 'spicy vegan yum dressing', dish: 'mango-salad' },
          { no: 7, name: 'Charred broccolini', detail: 'miso ponzu and roasted cashews', tags: 'L V P' },
          { no: 8, name: 'Homemade fried gyoza', detail: 'chicken and kimchi filling, black vinegar and laoganma sauce', tags: 'S L', dish: 'gyoza' },
          { no: 9, name: 'Rare grilled beef', detail: 'soy butter, onion, spring onion, fried garlic and togarashi' },
        ],
      },
      {
        heading: 'Baos',
        items: [
          { no: 21, name: 'Braised pork bao', dish: 'pork-bao' },
          { no: 22, name: 'Pulled beef brisket bao', dish: 'beef-bao' },
          { no: 23, name: 'Fried chicken bao', dish: 'chicken-bao' },
          { no: 24, name: 'Portobello panko bao', dish: 'portobello-bao' },
          { no: 25, name: 'Crispy soft shell crab bao', detail: 'spicy teriyaki mayo, fried dill and togarashi' },
          { no: 26, name: 'Japanese prawn tempura bao', detail: 'wasabi mayo and watercress', tags: 'S' },
          { no: 27, name: 'Chicken mozzarella bao', detail: 'tomato passata, truffle mayo and mozzarella cheese' },
        ],
      },
      {
        heading: 'Mains',
        items: [
          { no: 31, name: 'Grilled salmon', detail: 'curry gravy, grilled broccolini and cherry tomato, tzatziki and jasmine rice' },
          { no: 32, name: 'Stir-fry udon' },
          { no: 33, name: 'Kiin Kiin red curry', dish: 'red-curry' },
        ],
      },
      {
        heading: 'Desserts',
        items: [
          { no: 41, name: 'Sweet bao', detail: 'filled with peanut cream, served with vanilla ice cream' },
          { no: 42, name: 'Salted egg buns', detail: 'with icing sugar and cinnamon dust' },
          { no: 43, name: 'Guava chili sorbet', detail: 'with pineapple and vegan cream' },
        ],
      },
      {
        heading: 'Extras',
        items: [
          { name: 'Jasmine rice' },
          { name: 'Kimchi' },
          { name: 'Cucumber salad' },
          { name: 'Plain bao' },
        ],
      },
    ],
    note: {
      heading: 'Vegan options',
      lines: [
        'We also serve vegan options and lactose-free bao for vegans and vegetarians.',
        'Please ask our staff about vegan options and allergies.',
      ],
    },
  },
  dk: {
    title: 'À la carte',
    sections: [
      {
        heading: 'Små retter',
        items: [
          { no: 1, name: 'Sprød grønkål', detail: 'basilikummayo og urteolie' },
          { no: 2, name: 'Soto-suppe', detail: 'kylling, kogt æg og glasnudler', tags: 'L' },
          { no: 3, name: 'Østerssvampe', detail: 'chilimayo', tags: 'T' },
          { no: 4, name: 'Japansk krydret tun', detail: 'sesamolie, kewpie chilimayo og papadumchips', tags: 'S' },
          { no: 5, name: 'Friteret kærnemælksreje', detail: 'yuzumayo og grillet ananas', tags: 'S' },
          { no: 6, name: 'Thai mangosalat', detail: 'krydret vegansk yum-dressing', dish: 'mango-salad' },
          { no: 7, name: 'Grillet broccolini', detail: 'miso ponzu og ristede cashewnødder', tags: 'L V P' },
          { no: 8, name: 'Hjemmelavede stegte gyoza', detail: 'kylling- og kimchifyld, sort eddike og laoganma-sauce', tags: 'S L', dish: 'gyoza' },
          { no: 9, name: 'Rare-grillet oksekød', detail: 'soyasmør, løg, forårsløg, stegt hvidløg og togarashi' },
        ],
      },
      {
        heading: 'Baos',
        items: [
          { no: 21, name: 'Braiseret svinekød bao', dish: 'pork-bao' },
          { no: 22, name: 'Pulled beef brisket bao', dish: 'beef-bao' },
          { no: 23, name: 'Stegt kylling bao', dish: 'chicken-bao' },
          { no: 24, name: 'Portobellosvampe bao', dish: 'portobello-bao' },
          { no: 25, name: 'Crispy softshell krabbe bao', detail: 'spicy teriyakimayo, stegt dild og togarashi' },
          { no: 26, name: 'Tempurarejer bao', detail: 'wasabimayo og brøndkarse', tags: 'S' },
          { no: 27, name: 'Kylling-mozzarella bao', detail: 'tomatpassata, trøffelmayo og mozzarella' },
        ],
      },
      {
        heading: 'Hovedretter',
        items: [
          { no: 31, name: 'Grillet laks', detail: 'karrysauce, grillet broccolini og cherrytomat, tzatziki og jasminris' },
          { no: 32, name: 'Stir-fry udonnudler' },
          { no: 33, name: 'Kiin Kiin rød karry', dish: 'red-curry' },
        ],
      },
      {
        heading: 'Dessert',
        items: [
          { no: 41, name: 'Sød bao', detail: 'fyldt med peanutcreme, serveret med vaniljeis' },
          { no: 42, name: 'Salted egg-boller', detail: 'med flormelis og kanel' },
          { no: 43, name: 'Guava-chili-sorbet', detail: 'med ananas og vegansk creme' },
        ],
      },
      {
        heading: 'Ekstra',
        items: [
          { name: 'Jasminris' },
          { name: 'Kimchi' },
          { name: 'Agurkesalat' },
          { name: 'Almindelig bao' },
        ],
      },
    ],
    note: {
      heading: 'Veganske muligheder',
      lines: [
        'Vi serverer også veganske retter og laktosefri bao til veganere og vegetarer.',
        'Spørg venligst vores personale om veganske muligheder og allergier.',
      ],
    },
  },
};

// Allergen and diet codes, as used on the restaurant's printed menu.
export const allergenKey = {
  en: {
    heading: 'Allergen key',
    codes: [
      ['V', 'vegan'],
      ['T', 'vegetarian'],
      ['L', 'lactose free'],
      ['G', 'gluten free'],
      ['S', 'seafood'],
      ['P', 'nuts'],
    ],
  },
  dk: {
    heading: 'Allergenoversigt',
    codes: [
      ['V', 'vegansk'],
      ['T', 'vegetarisk'],
      ['L', 'laktosefri'],
      ['G', 'glutenfri'],
      ['S', 'skaldyr og fisk'],
      ['P', 'nødder'],
    ],
  },
};

const baoChoices = [
  'Braised pork',
  'Fried chicken',
  'Pulled beef',
  'Portobello panko',
  'Soft shell crab',
  'Prawn tempura',
  'Chicken mozzarella',
];

// Set menus are served in order, so their courses are a real sequence.
// Each menu has a chef's choice track and a vegetarian track.
const sorbet = 'Guava chili sorbet with pineapple and vegan cream';

export const setMenus = {
  'three-course': {
    title: '3-course menu',
    price: 350,
    priceNote: 'per person',
    intro: ['Includes a jug of water and one drink each: a glass of wine, a beer or a soft drink.'],
    availability: 'Not available on Fridays and Saturdays.',
    tracks: [
      {
        name: 'Chef’s choice',
        courses: [
          {
            heading: 'First serving',
            choose: 'one',
            options: [
              'Homemade fried gyoza with chicken and kimchi filling',
              'Thai mango salad with vegan yum dressing, cashews and basil mayo',
            ],
          },
          { heading: 'Second serving', choose: 'one bao per person', options: baoChoices },
          { heading: 'Third serving', options: ['Kiin Kiin red curry with chicken breast and vegetables, served with jasmine rice'] },
          { heading: 'Sweet ending', extra: 'optional, +60 kr', options: [sorbet] },
        ],
      },
      {
        name: 'Vegetarian and vegan',
        courses: [
          {
            heading: 'First serving',
            choose: 'one',
            options: ['Oyster mushrooms with chili mayo', 'Charred broccolini with miso ponzu and roasted cashews'],
          },
          { heading: 'Second serving', options: ['Portobello panko bao with truffle mayo, white radish pickles and dill'] },
          { heading: 'Third serving', options: ['Kiin Kiin red curry with vegetables, served with jasmine rice'] },
          { heading: 'Sweet ending', extra: 'optional, +60 kr', options: [sorbet] },
        ],
      },
    ],
    note: {
      heading: 'Allergies',
      lines: ['Please tell our staff about any allergies when you order.'],
    },
  },
  tasting: {
    title: 'Tasting menu',
    price: 550,
    priceNote: 'per person',
    intro: [
      'A little bit of everything. Minimum 2 people.',
      'Includes a jug of water and two drinks per person: wine, beer or soft drinks.',
    ],
    tracks: [
      {
        name: 'Chef’s choice',
        courses: [
          {
            heading: 'First serving',
            all: true,
            options: [
              'Thai mango salad with vegan yum dressing, cashews and basil mayo',
              'Homemade fried gyoza with chicken and kimchi',
              'Japanese spicy tuna with chili mayo and papadum chips',
              'Crispy oyster mushrooms with teriyaki mayo',
            ],
          },
          { heading: 'Second serving', choose: 'one bao per person', options: baoChoices },
          {
            heading: 'Third serving',
            all: true,
            options: ['Grilled salmon with curry gravy, grilled broccolini and cherry tomato, tzatziki and jasmine rice'],
          },
          { heading: 'Dessert', options: [sorbet] },
        ],
      },
      {
        name: 'Vegetarian',
        courses: [
          {
            heading: 'First serving',
            all: true,
            options: [
              'Thai mango salad with vegan yum dressing, cashews and basil mayo',
              'Charred broccolini with miso ponzu and roasted cashews',
              'Papadum chips with mint chutney',
              'Crispy oyster mushrooms with chili mayo',
            ],
          },
          { heading: 'Second serving', options: ['Portobello panko bao with truffle mayo, white radish pickles and dill'] },
          { heading: 'Third serving', all: true, options: ['Vegetarian red curry with mixed vegetables and tofu'] },
          { heading: 'Dessert', options: [sorbet] },
        ],
      },
    ],
    note: {
      heading: 'Allergies',
      lines: ['Please tell our staff about any allergies when you order.'],
    },
  },
};

export const kidsMenu = {
  title: 'Kids menu',
  sections: [
    {
      heading: 'Small plates',
      items: [
        { no: 51, name: 'Chicken meatballs', detail: 'sweet teriyaki sauce', tags: 'L' },
        { no: 52, name: 'Steamed vegetables', detail: 'basil mayo', tags: 'V T G L' },
        { no: 53, name: 'Rice bowl', detail: 'fried chicken or braised pork, with vegetables and mayo' },
      ],
    },
    {
      heading: 'Sweet ending',
      items: [{ no: 54, name: 'Nutella bao', detail: 'with marshmallows', tags: 'T' }],
    },
  ],
  note: {
    heading: 'Allergies',
    lines: ['We also serve vegan options and lactose-free bao.', 'Please ask our staff about allergies.'],
  },
};

export const drinksMenu = {
  title: 'Drinks',
  sections: [
    {
      heading: 'Cocktails',
      price: 95,
      items: [
        { name: 'Thai basil smash', detail: 'gin, lime, basil, soda' },
        { name: 'Mango margarita', detail: 'tequila, lime, mango' },
        { name: 'Passion fruit cooler', detail: 'rum, passion fruit, lime' },
        { name: 'Lychee delight', detail: 'vodka, lychee, lime' },
        { name: 'Classic negroni', detail: 'gin, Campari, sweet vermouth' },
        { name: 'Gin hass', detail: 'gin, Schweppes lemon, mango syrup' },
        { name: 'Old fashioned', detail: 'bourbon, sugar, bitters, orange' },
        { name: 'Espresso martini', detail: 'vodka, espresso, coffee liqueur' },
      ],
    },
    {
      heading: 'Spritz',
      items: [
        { name: 'Hugo spritz', detail: 'elderflower, prosecco, soda, mint, lime' },
        { name: 'Aperol spritz', detail: 'Aperol, prosecco, soda, orange' },
        { name: 'Sarti spritz', detail: 'Sarti Rosa, prosecco, soda, lime' },
        { name: 'Campari spritz', detail: 'Campari, prosecco, soda, orange twist' },
        { name: 'Limoncello spritz', detail: 'limoncello, prosecco, soda, lemon' },
      ],
    },
    {
      heading: 'Mocktails',
      price: 65,
      items: [{ name: 'Virgin passion fruit mojito' }, { name: 'Virgin lychee and lemon fizz' }],
    },
    {
      heading: 'Soft drinks',
      price: 40,
      items: [{ name: 'Coca-Cola / Zero' }, { name: 'Fanta' }, { name: 'Sprite / Zero' }],
    },
    {
      heading: 'Coffee',
      price: 35,
      items: [{ name: 'Espresso' }, { name: 'Americano' }, { name: 'Latte' }, { name: 'Cappuccino' }, { name: 'Flat white' }],
    },
    {
      heading: 'Tea',
      items: [
        { name: 'Small pot', price: 35 },
        { name: 'Big pot', price: 55 },
      ],
    },
    {
      heading: 'Water',
      items: [{ name: 'Sparkling or still, bottled', price: 45 }],
    },
  ],
  note: { heading: 'Tea', lines: ['Please ask the staff which teas are available today.'] },
};
