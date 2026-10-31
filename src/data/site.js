/**
 * FICTIONAL DEMO CONTENT — replace all prices, services, team copy and imagery
 * with owner-approved content before this is used by a real salon.
 */
export const services = [
  {
    slug: 'makeup',
    number: '01',
    title: 'Makeup artistry',
    short: 'Your features, beautifully expressed.',
    description: 'Soft glow, statement glam, and everything in between. An unhurried beauty experience tailored to you.',
    note: 'Every face has a story.',
    from: 350,
    duration: '60–90 min',
    photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1100&q=85',
    fallback: '/art/makeup.svg',
    treatments: [
      { name: 'Soft glam', time: '60 min', price: 350 },
      { name: 'Full glam', time: '90 min', price: 500 },
      { name: 'Bridal preview', time: '120 min', price: 750 }
    ],
  },
  {
    slug: 'hair',
    number: '02',
    title: 'Hair styling',
    short: 'Good hair. Better energy.',
    description: 'A little movement, a little polish. From effortless blowouts to occasion-ready styling.',
    note: 'For the days you want to feel extra.',
    from: 180,
    duration: '30–90 min',
    photo: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1100&q=85',
    fallback: '/art/hair.svg',
    treatments: [
      { name: 'Signature blowout', time: '45 min', price: 180 },
      { name: 'Hair styling', time: '60 min', price: 300 },
      { name: 'Occasion updo', time: '90 min', price: 450 }
    ],
  },
  {
    slug: 'nails',
    number: '03',
    title: 'Nail rituals',
    short: 'The little things matter.',
    description: 'Considered color, beautiful shapes, and a few quiet moments that are just for you.',
    note: 'A tiny detail. A whole mood.',
    from: 140,
    duration: '40–75 min',
    photo: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1100&q=85',
    fallback: '/art/nails.svg',
    treatments: [
      { name: 'Classic manicure', time: '40 min', price: 140 },
      { name: 'Gel color', time: '60 min', price: 220 },
      { name: 'Nail art session', time: '75 min', price: 290 }
    ],
  },
  {
    slug: 'skin',
    number: '04',
    title: 'Skin & glow',
    short: 'Slow down. Glow on.',
    description: 'Comfort-first facial rituals for a refreshed, well-rested feeling and a little everyday radiance.',
    note: 'Your skin deserves a softer pace.',
    from: 250,
    duration: '50–75 min',
    photo: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1100&q=85',
    fallback: '/art/skin.svg',
    treatments: [
      { name: 'Express glow', time: '50 min', price: 250 },
      { name: 'Hydration ritual', time: '60 min', price: 350 },
      { name: 'Signature facial', time: '75 min', price: 420 }
    ],
  },
];

export const gallery = [
  { id: 1, category: 'Makeup', label: 'Softly, softly', caption: 'A light, lived-in glow', photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=85', fallback: '/art/portrait.svg', large: true },
  { id: 2, category: 'Hair', label: 'A little movement', caption: 'Volume with a soft finish', photo: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1000&q=85', fallback: '/art/hair.svg' },
  { id: 3, category: 'Nails', label: 'A quiet statement', caption: 'Minimal and polished', photo: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1000&q=85', fallback: '/art/nails.svg' },
  { id: 4, category: 'Skin', label: 'Natural radiance', caption: 'A moment of self-care', photo: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1000&q=85', fallback: '/art/skin.svg' },
  { id: 5, category: 'Makeup', label: 'Golden hour', caption: 'Evening beauty inspiration', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85', fallback: '/art/makeup.svg' },
  { id: 6, category: 'Hair', label: 'The finishing touch', caption: 'For your next big moment', photo: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1000&q=85', fallback: '/art/portrait.svg' },
];

export const faqs = [
  { question: 'Is an appointment request a confirmed booking?', answer: 'Not yet. Your message is an inquiry. The studio confirms the appointment directly after reviewing availability.' },
  { question: 'Can I book more than one service?', answer: 'Of course. Choose the service you are most interested in and add your other requests in the notes field.' },
  { question: 'How early should I book for an event?', answer: 'For special occasions, sending a request ahead of time makes scheduling easier. Final availability is always confirmed by the studio.' },
  { question: 'Are the listed prices final?', answer: 'These are sample prices for the concept website. A real salon should replace them with its current approved price list before publishing.' }
];

export const money = (value) => `${value} MAD`;
