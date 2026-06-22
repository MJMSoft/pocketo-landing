// Central place for the values that change between environments / before launch.
// Anything marked PLACEHOLDER is meant to be replaced before going fully live.

export const SITE = {
  name: 'Pocketo',
  url: 'https://pocketo.store',
  // PLACEHOLDER: confirm the real contact inbox.
  email: 'hola@pocketo.store',
  instagram: 'https://instagram.com/pocketo.col',
  instagramHandle: '@pocketo.col',
  facebook: 'https://www.facebook.com/pocketo.col/',
  tiktok: 'https://www.tiktok.com/@pocketo.col',
};

export const SOCIALS = [
  { label: 'Instagram', href: SITE.instagram },
  { label: 'TikTok', href: SITE.tiktok },
  { label: 'Facebook', href: SITE.facebook },
];

export const ORDER = {
  // OlaClick storefront.
  menu: 'https://pocketo.ola.click/products',
  store: 'https://pocketo.ola.click/',
};

export const WHATSAPP = {
  number: '573337501653',
  display: '+57 333 750 1653',
  message: 'Hola Pocketo, vengo de la página web y quiero hacer un pedido.',
  get link() {
    return `https://wa.me/${this.number}?text=${encodeURIComponent(this.message)}`;
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

// Real catalog + prices (https://pocketo.ola.click/products). `img` matches a
// file in src/assets/products/<img>.png. Chuletas se venden por libra y kilo,
// así que el precio es "Desde" (libra). Si cambian en OlaClick, actualízalos acá.
export const PRODUCTS = [
  {
    name: 'Chuleta de Cerdo Tradicional',
    note: 'La chuleta valluna de siempre, lomo de cerdo sin hueso',
    price: 'Desde $19.000',
    img: 'chuleta-cerdo-tradicional',
  },
  {
    name: 'Chuleta de Cerdo Especial',
    note: 'Lomo de cerdo con apanado al panko, sin hueso',
    price: 'Desde $20.000',
    img: 'chuleta-cerdo-especial',
  },
  {
    name: 'Chuleta de Pollo Especial',
    note: 'Pechuga de pollo con apanado al panko, sin hueso',
    price: 'Desde $18.000',
    img: 'chuleta-pollo-especial',
  },
  {
    name: 'Chuleta de Pollo Tradicional',
    note: 'Pechuga de pollo apanada, receta de siempre',
    price: 'Desde $17.000',
    img: 'chuleta-pollo-tradicional',
  },
  {
    name: 'Camarones Apanados',
    note: 'Camarones apanados, congelados por libra',
    price: '$33.000',
    img: 'camarones-apanados',
  },
  {
    name: 'Pizza Pepperoni',
    note: 'Personal, masa artesanal precocida',
    price: '$13.000',
    img: 'pizza-pepperoni',
  },
  {
    name: 'Pizza Hawaiana',
    note: 'Personal, jamón y piña sobre masa artesanal',
    price: '$13.000',
    img: 'pizza-hawaiana',
  },
] as const;
