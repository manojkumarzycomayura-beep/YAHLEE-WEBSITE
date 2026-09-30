// collections.js – Curated Collections

export const collections = [
  {
    id: 1,
    name: 'Wedding Season',
    slug: 'wedding-season',
    tag: 'Exclusive Collection',
    description: 'Bridal lehengas, sherwanis, and accessories for your big day.',
    image: 'https://images.unsplash.com/photo-1597983073493-88cd98bab6ac?w=800&q=80',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #c8102e 100%)',
    productCount: 145,
    featured: true,
  },
  {
    id: 2,
    name: 'Diwali Edit',
    slug: 'diwali-edit',
    tag: 'Festival Special',
    description: 'Light up this Diwali with our curated festive collection.',
    image: 'https://images.unsplash.com/photo-1510115972902-f94cbde3f785?w=800&q=80',
    gradient: 'linear-gradient(135deg, #6b2d5e 0%, #d4a017 100%)',
    productCount: 98,
    featured: true,
  },
  {
    id: 3,
    name: 'Summer Kurtas',
    slug: 'summer-kurtas',
    tag: 'Season Collection',
    description: 'Cool cotton and linen kurtas for the Indian summer.',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80',
    gradient: 'linear-gradient(135deg, #16213e 0%, #0f3460 100%)',
    productCount: 67,
    featured: false,
  },
  {
    id: 4,
    name: 'Handloom Heritage',
    slug: 'handloom-heritage',
    tag: 'Artisan Collection',
    description: 'Celebrating India\'s rich handloom tradition – crafted by local weavers.',
    image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80',
    gradient: 'linear-gradient(135deg, #4a3728 0%, #8b4513 100%)',
    productCount: 82,
    featured: false,
  },
  {
    id: 5,
    name: 'Kids Festive',
    slug: 'kids-festive',
    tag: 'Little Stars',
    description: 'Adorable ethnic outfits for your little ones to look their best.',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80',
    gradient: 'linear-gradient(135deg, #c8102e 0%, #ff6b8a 100%)',
    productCount: 114,
    featured: false,
  },
];

export const getFeaturedCollections = () =>
  collections.filter((c) => c.featured);
