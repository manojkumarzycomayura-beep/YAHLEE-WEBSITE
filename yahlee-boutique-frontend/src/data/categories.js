// categories.js – Indian Fashion Categories

export const categories = [
  {
    id: 1,
    name: 'Women',
    slug: 'women',
    emoji: '👗',
    description: 'Sarees, Kurtis, Lehengas & more',
    productCount: 320,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80',
    gradient: 'linear-gradient(135deg, #c8102e, #6b2d5e)',
    subcategories: ['Sarees', 'Kurtis', 'Lehengas', 'Salwar Suits', 'Tops', 'Dupattas', 'Blouses'],
  },
  {
    id: 2,
    name: 'Men',
    slug: 'men',
    emoji: '👔',
    description: 'Sherwanis, Kurtas, Nehru Jackets',
    productCount: 245,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    gradient: 'linear-gradient(135deg, #1a1a2e, #0f3460)',
    subcategories: ['Sherwanis', 'Kurtas', 'Nehru Jackets', 'Pathani Suits', 'Dhotis', 'Modi Jackets'],
  },
  {
    id: 3,
    name: 'Boys',
    slug: 'boys',
    emoji: '👦',
    description: 'Ethnic wear for little kings',
    productCount: 180,
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80',
    gradient: 'linear-gradient(135deg, #0f3460, #16213e)',
    subcategories: ['Kurta Pajamas', 'Sherwanis', 'Dhotis', 'Achkans'],
  },
  {
    id: 4,
    name: 'Girls',
    slug: 'girls',
    emoji: '👧',
    description: 'Ethnic wear for little princesses',
    productCount: 195,
    image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf6?w=600&q=80',
    gradient: 'linear-gradient(135deg, #c8102e, #ff6b8a)',
    subcategories: ['Lehengas', 'Salwar Suits', 'Frocks', 'Dupattas'],
  },
  {
    id: 5,
    name: 'Accessories',
    slug: 'accessories',
    emoji: '💍',
    description: 'Jewellery, Bags & Footwear',
    productCount: 280,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
    gradient: 'linear-gradient(135deg, #d4a017, #8b6914)',
    subcategories: ['Jewellery', 'Bags', 'Footwear', 'Dupattas', 'Bangles', 'Bindis'],
  },
];

export const getCategoryBySlug = (slug) =>
  categories.find((c) => c.slug === slug);
