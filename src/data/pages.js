export const faqs = [
  { q: 'Do you offer vegan options?', a: 'Yes, we offer a variety of vegan and vegetarian dishes.' },
  { q: 'Are the chicken and beef halal?', a: 'Yes, the chicken and beef used in our dishes are halal.' },
  { q: 'When does the kitchen close?', a: 'Our kitchen closes at 21.00 every night.' },
  { q: 'Are the baos gluten-free?', a: 'No, but we do serve lactose-free bao for vegan guests.' },
  {
    q: 'Is the Kiin Kiin red curry vegan?',
    a: 'No. The red curry is made with fish sauce, so it suits pescatarians but not vegans or vegetarians.',
  },
];

export const jobs = {
  intro: [
    'We hire for both the kitchen and the dining room.',
    'Experienced or new to restaurants, send us your CV and a few lines about yourself.',
  ],
  roles: [
    { title: 'Service staff', text: 'Serve guests in the dining room and at the bar.' },
    { title: 'Kitchen staff', text: 'Prepare baos, starters and mains with our kitchen team.' },
    { title: 'Open application', text: 'Don’t see the right role? Send your CV and tell us what you’d like to do.' },
  ],
};

export const events = {
  venue: 'Kiin Kiin Pakhus',
  intro: 'Our private venue for events and dinners: a historic warehouse in Østerbro, set up for celebrations, company dinners and private gatherings.',
  highlights: [
    { title: 'Four kitchens', text: 'Menus curated by Kiin Kiin, Chai Wong, Ricemarket and VeVe.' },
    { title: 'Historic venue', text: 'Warehouse character in the heart of Østerbro.' },
    { title: 'Flexible setup', text: 'Round tables, long tables or lounge seating, with sound and a bar.' },
  ],
  brochure: './docs/kiin-kiin-pakhus-events.pdf',
  photos: [
    { image: 'space-5', alt: 'A tray of steamed baos' },
    { image: 'space-4', alt: 'Rare grilled beef with onion and spring onion' },
    { image: 'red-curry', alt: 'Kiin Kiin red curry' },
  ],
};

export const about = {
  blocks: [
    {
      title: 'Our space',
      image: 'space-3',
      text: 'Our dining room is at Vesterbrogade 96 in Vesterbro, open every evening from 17.00.',
    },
    {
      title: 'Our food',
      image: 'space-6',
      text: 'Asian street food and tapas: steamed baos, gyoza, salads, Thai red curry and Korean short ribs. Our baos are made fresh every day.',
    },
    {
      title: 'Our bar',
      image: 'space-1',
      text: 'Cocktails, spritz and mocktails, plus beer, wine, coffee and tea.',
    },
  ],
  owners: {
    names: 'Addy and Henrik',
    image: 'about-ah',
    paragraphs: [
      'Addy and Henrik are the driving force behind Kiin Kiin Bao Bao and the wider Kiin restaurant family, built on a shared passion for hospitality and culinary innovation.',
      'Under their leadership Kiin Kiin earned two Michelin stars and became one of the most celebrated restaurants in the Nordic food scene.',
      'They bring together chefs and service teams across the group and give each restaurant room to develop its own concept.',
    ],
  },
  brands: [
    { name: 'Kiin Kiin', image: 'about-kk', text: 'Fine dining rooted in modern Thai gastronomy, where innovation meets tradition.' },
    { name: 'Kini Kini', image: 'about-kiki', text: 'Indonesian street food made with Danish ingredients, in a relaxed tropical setting.' },
    { name: 'VeVe', image: 'about-vv', text: 'Modern Thai cooking with vegetarian and non-vegetarian dishes side by side.' },
  ],
};

export const privacy = {
  updated: 'May 2026',
  sections: [
    {
      heading: 'What GDPR means for you',
      paragraphs: [
        'The General Data Protection Regulation (GDPR) applies across the EU and EEA. It harmonises data protection in Europe and gives you more control over how your information is used.',
        'Under GDPR you can ask for your personal data to be deleted when it is no longer needed, unless we are legally required to keep it. Personal data is any information that can identify you.',
      ],
    },
    {
      heading: 'Who we are',
      paragraphs: [
        'Kiin Kiin Bao Bao (“we”, “us”) collects and processes personal data to provide our services, including reservations, customer communication and dining.',
        'We are the data controller for your personal data, which means we decide how and why it is processed. Some trusted third parties, such as booking platforms and payment providers, help us run the restaurant; they must handle your data securely and lawfully.',
      ],
    },
    {
      heading: 'What we collect',
      list: [
        'Contact information: name, email address, phone number',
        'Reservation details: booking time and number of guests',
        'Payment information, handled by third-party payment providers',
        'Preferences such as dietary requirements and feedback',
        'Technical data such as browser type and cookies',
      ],
    },
    {
      heading: 'How we use it',
      list: [
        'To manage reservations and provide our services',
        'To contact you about bookings or questions',
        'To improve our service',
        'To meet legal obligations',
        'To send marketing, only if you have agreed to it',
      ],
    },
    {
      heading: 'Legal basis',
      list: ['Your consent', 'Performing a contract, such as a reservation', 'Legal obligations', 'Legitimate interests, such as improving our service'],
    },
    {
      heading: 'Who we share it with',
      paragraphs: ['We never sell your personal data. We may share it with:'],
      list: ['Payment service providers', 'IT and system providers', 'Authorities, when the law requires it'],
      after: 'Every third party must keep your data secure.',
    },
    {
      heading: 'How long we keep it',
      paragraphs: ['Only as long as needed for the purpose it was collected for, including legal and accounting requirements.'],
    },
    {
      heading: 'Your rights',
      list: [
        'See the personal data we hold about you',
        'Correct inaccurate data',
        'Ask us to delete your data',
        'Restrict or object to processing',
        'Take your data with you (data portability)',
        'Withdraw your consent at any time',
      ],
      after: 'To use any of these rights, contact us using the details below.',
    },
    {
      heading: 'Security',
      paragraphs: ['We use technical and organisational measures to protect your data against unauthorised access, loss or misuse.'],
    },
    {
      heading: 'Cookies',
      paragraphs: ['We may use cookies to improve your browsing. You can limit or turn them off in your browser settings.'],
    },
    {
      heading: 'Changes to this policy',
      paragraphs: ['We may update this policy from time to time. The latest version is always on this page.'],
    },
  ],
};

// Draft terms built from facts already on the site. Have the owner review before relying on them.
export const terms = {
  updated: 'October 2026',
  sections: [
    {
      heading: 'About these terms',
      paragraphs: [
        'These terms apply when you use this website or visit Kiin Kiin Bao Bao, Vesterbrogade 96, 1620 København V.',
      ],
    },
    {
      heading: 'Reservations',
      paragraphs: [
        'Table bookings are handled by our booking partner EasyTable, and their booking terms apply as well.',
        'If you can’t make it, please cancel or call us so we can offer the table to another guest.',
      ],
    },
    {
      heading: 'Takeaway and gift cards',
      paragraphs: [
        'Takeaway orders are placed at eat.kiinbao.dk and gift cards are sold at kiinkiingifts.dk. The terms shown on those sites apply to those purchases.',
      ],
    },
    {
      heading: 'Prices and menus',
      paragraphs: [
        'All prices are in Danish kroner and include VAT. Menus, dishes and prices can change without notice.',
      ],
    },
    {
      heading: 'Receipts',
      paragraphs: ['Please keep your receipt. Reissuing a receipt after your visit costs 250 kr.'],
    },
    {
      heading: 'Allergies',
      paragraphs: [
        'Tell our staff about any allergies before you order. Our kitchen uses common allergens such as peanuts, sesame, soy, shellfish and gluten, so we can’t guarantee that a dish is free of traces.',
      ],
    },
    {
      heading: 'Website content',
      paragraphs: [
        'Text, photos and logos on this website belong to Kiin Kiin Bao Bao. Please don’t reuse them without permission.',
        'Links to other websites are provided for convenience. We are not responsible for their content.',
      ],
    },
    {
      heading: 'Governing law',
      paragraphs: ['These terms are governed by Danish law.'],
    },
  ],
};
