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
    'We are always looking for people who love hospitality, food and making a guest’s evening.',
    'Whether you are an experienced chef, a service professional or just starting out in hospitality, we would love to hear from you.',
  ],
  roles: [
    { title: 'Service staff', text: 'Look after our guests on busy evenings and keep the room running smoothly.' },
    { title: 'Kitchen staff', text: 'Work with our kitchen team to prepare baos and dishes to a high standard.' },
    { title: 'Open application', text: 'Think you would be a great fit? Send us your CV and tell us about yourself.' },
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
      text: 'A warm, modern room on Vesterbrogade, relaxed enough for a quick bao and lively enough for a long evening with friends.',
    },
    {
      title: 'Our food',
      image: 'space-6',
      text: 'The menu takes its cue from Asian street food: bold flavours and fresh ingredients, with every bao steamed fresh each day.',
    },
    {
      title: 'Our evenings',
      image: 'space-1',
      text: 'Handmade cocktails, good music and a busy room. We want every visit to feel like a night out, not just a meal.',
    },
  ],
  owners: {
    names: 'Addy and Henrik',
    image: 'about-ah',
    paragraphs: [
      'Addy and Henrik are the driving force behind Kiin Kiin Bao Bao and the wider Kiin restaurant family, built on a shared passion for hospitality and culinary innovation.',
      'Under their leadership Kiin Kiin earned two Michelin stars and became one of the most celebrated restaurants in the Nordic food scene.',
      'They have a gift for finding talent, bringing together outstanding chefs and service teams and giving them room to make each concept their own.',
      'Across every restaurant the aim stays the same: evenings where creativity, quality and atmosphere meet.',
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
