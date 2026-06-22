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

// Real catalog (https://pocketo.ola.click/products). `img` matches a file in
// src/assets/products/<img>.png. Prices are PLACEHOLDERS: the OlaClick menu API
// is gated, so update PRODUCTS[].price with the real values (ver carta).
export const PRODUCTS = [
  {
    name: 'Chuleta de Cerdo Especial',
    note: 'Lomo de cerdo apanado al panko, sin hueso',
    price: '$XX.XXX COP',
    img: 'chuleta-cerdo-especial',
  },
  {
    name: 'Chuleta de Cerdo Tradicional',
    note: 'Lomo de cerdo apanado, sin hueso',
    price: '$XX.XXX COP',
    img: 'chuleta-cerdo-tradicional',
  },
  {
    name: 'Chuleta de Pollo Especial',
    note: 'Pechuga de pollo apanada al panko, sin hueso',
    price: '$XX.XXX COP',
    img: 'chuleta-pollo-especial',
  },
  {
    name: 'Chuleta de Pollo Tradicional',
    note: 'Pechuga de pollo apanada, sin hueso',
    price: '$XX.XXX COP',
    img: 'chuleta-pollo-tradicional',
  },
  {
    name: 'Camarones Apanados',
    note: 'Camarones apanados, listos para freír',
    price: '$XX.XXX COP',
    img: 'camarones-apanados',
  },
  {
    name: 'Pizza Hawaiana',
    note: 'Pizza congelada, jamón y piña',
    price: '$XX.XXX COP',
    img: 'pizza-hawaiana',
  },
  {
    name: 'Pizza Pepperoni',
    note: 'Pizza congelada con pepperoni',
    price: '$XX.XXX COP',
    img: 'pizza-pepperoni',
  },
] as const;
