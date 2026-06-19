// Central place for the values that change between environments / before launch.
// Anything marked PLACEHOLDER is meant to be replaced before going fully live.

export const SITE = {
  name: 'Pocketo',
  url: 'https://pocketo.store',
  // PLACEHOLDER: confirm the real contact inbox.
  email: 'hola@pocketo.store',
  instagram: 'https://instagram.com/pocketo.co',
  instagramHandle: '@pocketo.co',
};

export const ORDER = {
  // OlaClick storefront.
  menu: 'https://pocketo.ola.click/products',
  store: 'https://pocketo.ola.click/',
};

export const WHATSAPP = {
  // PLACEHOLDER: replace with the real WhatsApp business number (digits only, country code first).
  number: '573000000000',
  display: '+57 300 000 0000',
  get link() {
    return `https://wa.me/${this.number}`;
  },
};

export const STREET = {
  address: 'Cra. 37 #10-171, barrio Olímpico, Cali',
  hours: 'Jueves a sábado, 5:00 pm - 11:00 pm',
  maps:
    'https://www.google.com/maps/search/?api=1&query=Cra.+37+%2310-171,+Cali',
};

export const DELIVERY = {
  days: 'Jueves y sábado',
  city: 'Cali',
};

// Featured products. Prices are PLACEHOLDERS until the real menu is wired in.
export const PRODUCTS = [
  {
    name: 'Chuleta valluna',
    note: 'Apanada, sin hueso, lista para freír',
    price: '$XX.XXX COP',
    seed: 'chuleta',
  },
  {
    name: 'Combo familiar',
    note: 'Para cuatro, directo al congelador',
    price: '$XX.XXX COP',
    seed: 'combo',
  },
  {
    name: 'Empanadas vallunas',
    note: 'Maíz trillado, rellenas a mano',
    price: '$XX.XXX COP',
    seed: 'empanadas',
  },
  {
    name: 'Aborrajados',
    note: 'Plátano maduro y queso',
    price: '$XX.XXX COP',
    seed: 'aborrajados',
  },
  {
    name: 'Marranitas',
    note: 'Plátano verde y chicharrón',
    price: '$XX.XXX COP',
    seed: 'marranitas',
  },
] as const;
