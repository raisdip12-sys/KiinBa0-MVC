// Every menu on the site. Items: { no, name, detail, tags, price }.
// Allergen letters (L, S, T, V, N, G) are kept exactly as printed on the menu.

export const alaCarte = {
  en: {
    title: 'À la carte',
    sections: [
      {
        heading: 'Starters',
        items: [
          { no: 1, name: 'Crispy kale', detail: 'basil mayo and herb oil', price: 60 },
          { no: 2, name: 'Soto soup', detail: 'chicken, boiled egg and glass noodles', tags: 'L', price: 70 },
          { no: 3, name: 'Oyster mushrooms', detail: 'chili mayo', tags: 'T', price: 70 },
          { no: 4, name: 'Japanese spicy tuna', detail: 'sesame oil, kewpie chili mayo and papadum chips', tags: 'S', price: 105 },
          { no: 5, name: 'Fried buttermilk prawn', detail: 'yuzu mayo and grilled pineapple', tags: 'S', price: 75 },
          { no: 6, name: 'Thai mango salad', detail: 'spicy vegan yum dressing', price: 70, dish: 'mango-salad' },
          { no: 7, name: 'Charred broccolini', detail: 'miso ponzu and roasted cashews', tags: 'L V N', price: 70 },
          { no: 8, name: 'Homemade fried gyoza', detail: 'chicken and kimchi filling, black vinegar and laoganma sauce', tags: 'S L', price: 75, dish: 'gyoza' },
          { no: 9, name: 'Rare grilled beef', detail: 'soy butter, onion, spring onion, fried garlic and togarashi', price: 110 },
        ],
      },
      {
        heading: 'Baos',
        items: [
          { no: 21, name: 'Braised pork bao', price: 70, dish: 'pork-bao' },
          { no: 22, name: 'Pulled beef brisket bao', price: 70, dish: 'beef-bao' },
          { no: 23, name: 'Fried chicken bao', price: 70, dish: 'chicken-bao' },
          { no: 24, name: 'Portobello panko bao', price: 70, dish: 'portobello-bao' },
          { no: 25, name: 'Crispy soft shell crab bao', detail: 'spicy teriyaki mayo, fried dill and togarashi', price: 70 },
          { no: 26, name: 'Japanese prawn tempura bao', detail: 'wasabi mayo and watercress', tags: 'S', price: 70 },
          { no: 27, name: 'Black pepper chicken bao', detail: 'pickled cucumber, onion and coriander', tags: 'S', price: 70 },
        ],
      },
      {
        heading: 'Mains',
        items: [
          { no: 31, name: 'Korean galbi short ribs', price: 180, dish: 'galbi-ribs' },
          { no: 32, name: 'Stir-fry udon', price: 160 },
          { no: 33, name: 'Kiin Kiin red curry', price: 150, dish: 'red-curry' },
        ],
      },
      {
        heading: 'Desserts',
        items: [
          { no: 41, name: 'Mungbean and coconut ice cream', detail: 'homemade, with dried coconut, caramel sauce and oreo crumbs', price: 60 },
          { no: 42, name: 'Sweet bao', detail: 'filled with peanut cream, served with vanilla ice cream', price: 80 },
        ],
      },
      {
        heading: 'Extras',
        items: [
          { name: 'Jasmine rice', price: 25 },
          { name: 'Kimchi', price: 35 },
          { name: 'Cucumber salad', price: 35 },
          { name: 'Plain bao', price: 20 },
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
          { no: 1, name: 'Sprød grønkål', detail: 'basilikummayo og urteolie', price: 60 },
          { no: 2, name: 'Soto-suppe', detail: 'kylling, kogt æg og glasnudler', tags: 'L', price: 70 },
          { no: 3, name: 'Østerssvampe', detail: 'chilimayo', tags: 'T', price: 70 },
          { no: 4, name: 'Japansk krydret tun', detail: 'sesamolie, kewpie chilimayo og papadumchips', tags: 'S', price: 105 },
          { no: 5, name: 'Friteret kærnemælksreje', detail: 'yuzumayo og grillet ananas', tags: 'S', price: 75 },
          { no: 6, name: 'Thai mangosalat', detail: 'krydret vegansk yum-dressing', price: 70, dish: 'mango-salad' },
          { no: 7, name: 'Grillet broccolini', detail: 'miso ponzu og ristede cashewnødder', tags: 'L V N', price: 70 },
          { no: 8, name: 'Hjemmelavede stegte gyoza', detail: 'kylling- og kimchifyld, sort eddike og laoganma-sauce', tags: 'S L', price: 75, dish: 'gyoza' },
          { no: 9, name: 'Rare-grillet oksekød', detail: 'soyasmør, løg, forårsløg, stegt hvidløg og togarashi', price: 110 },
        ],
      },
      {
        heading: 'Baos',
        items: [
          { no: 21, name: 'Braiseret svinekød bao', price: 70, dish: 'pork-bao' },
          { no: 22, name: 'Pulled beef brisket bao', price: 70, dish: 'beef-bao' },
          { no: 23, name: 'Stegt kylling bao', price: 70, dish: 'chicken-bao' },
          { no: 24, name: 'Portobellosvampe bao', price: 70, dish: 'portobello-bao' },
          { no: 25, name: 'Crispy softshell krabbe bao', detail: 'spicy teriyakimayo, stegt dild og togarashi', price: 70 },
          { no: 26, name: 'Tempurarejer bao', detail: 'wasabimayo og brøndkarse', tags: 'S', price: 70 },
          { no: 27, name: 'Sort peber-kyllingebao', detail: 'syltede agurker, løg og koriander', tags: 'S', price: 70 },
        ],
      },
      {
        heading: 'Hovedretter',
        items: [
          { no: 31, name: 'Koreanske galbi short ribs', price: 180, dish: 'galbi-ribs' },
          { no: 32, name: 'Stir-fry udonnudler', price: 160 },
          { no: 33, name: 'Kiin Kiin rød karry', price: 150, dish: 'red-curry' },
        ],
      },
      {
        heading: 'Dessert',
        items: [
          { no: 41, name: 'Mungbønne-is', detail: 'hjemmelavet, med tørret kokos, karamelsauce og oreokrummer', price: 60 },
          { no: 42, name: 'Sød bao', detail: 'fyldt med peanutcreme, serveret med vaniljeis', price: 80 },
        ],
      },
      {
        heading: 'Ekstra',
        items: [
          { name: 'Jasminris', price: 25 },
          { name: 'Kimchi', price: 35 },
          { name: 'Agurkesalat', price: 35 },
          { name: 'Almindelig bao', price: 20 },
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

const baoChoices = [
  'Braised pork',
  'Fried chicken',
  'Pulled beef',
  'Portobello panko',
  'Soft shell crab',
  'Prawn tempura',
  'Black pepper chicken',
];

// Set menus are served in order, so their courses are a real sequence.
export const setMenus = {
  'three-course': {
    title: '3-course menu',
    price: 350,
    priceNote: 'per person',
    intro: ['One drink each and a jug of water included.'],
    courses: [
      { heading: 'First serving', choose: 'one', options: ['Homemade gyoza dumplings', 'Thai mango salad'] },
      { heading: 'Second serving', choose: 'one bao per person', options: baoChoices },
      { heading: 'Third serving', options: ['Kiin Kiin red curry with jasmine rice'] },
      {
        heading: 'Sweet ending',
        options: ['Homemade mungbean and coconut ice cream on dried coconut, with caramel sauce and oreo crumbs'],
        extra: '+60 kr',
      },
    ],
    note: {
      heading: 'Vegan options',
      lines: ['We also serve vegan options and lactose-free bao.', 'Please ask our staff about vegan options and allergies.'],
    },
  },
  tasting: {
    title: 'Tasting menu',
    price: 550,
    priceNote: 'per person',
    intro: [
      'A little bit of everything, made to ease your cravings.',
      'Two drinks per person (minimum 2 people): a glass of wine, beer or soft drinks.',
    ],
    courses: [
      {
        heading: 'First serving',
        options: [
          'Thai mango salad with spicy vegan yum dressing, cashews and basil mayo',
          'Homemade fried gyoza with chicken and kimchi, black vinegar and laoganma sauce',
          'Japanese spicy tuna with kewpie chili mayo, sesame oil and papadum chips',
          'Crispy kale with basil mayo and herb oil',
        ],
        all: true,
      },
      { heading: 'Second serving', choose: 'one bao per person', options: baoChoices },
      {
        heading: 'Third serving',
        choose: 'one',
        options: [
          'Korean galbi beef ribs with jasmine rice and kimchi',
          'Vegetarian red curry (for vegetarians only)',
          'Stir-fry udon with teriyaki sauce, black pepper and vegetables (for vegans only)',
        ],
      },
      {
        heading: 'Dessert',
        options: ['Homemade mungbean and coconut ice cream on dried coconut, with caramel sauce and oreo crumbs'],
      },
    ],
    note: {
      heading: 'Vegan options',
      lines: ['The tasting menu can be served vegan.', 'Please ask our staff about vegan options and allergies.'],
    },
  },
};

export const kidsMenu = {
  title: 'Kids menu',
  sections: [
    {
      heading: 'Small plates',
      items: [
        { no: 51, name: 'Chicken meatballs', detail: 'sweet teriyaki sauce', tags: 'L', price: 60 },
        { no: 52, name: 'Steamed vegetables', detail: 'basil mayo', tags: 'V T G L', price: 50 },
        { no: 53, name: 'Rice bowl', detail: 'fried chicken or braised pork, with vegetables and mayo', price: 70 },
      ],
    },
    {
      heading: 'Sweet ending',
      items: [{ no: 54, name: 'Nutella bao', detail: 'with marshmallows', tags: 'T', price: 50 }],
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
