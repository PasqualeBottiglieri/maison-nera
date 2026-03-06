import type { Category } from './types';

export const categories: Category[] = [
  {
    id: 'cat-001',
    name: 'Abbigliamento',
    slug: 'abbigliamento',
    description:
      'Capi sartoriali che incarnano l\'essenza del lusso contemporaneo. Ogni pezzo è realizzato con tessuti pregiati e una cura maniacale per il dettaglio.',
    image:
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
    count: 31,
  },
  {
    id: 'cat-002',
    name: 'Accessori',
    slug: 'accessori',
    description:
      'Accessori iconici che completano ogni look con un tocco di raffinatezza inconfondibile. Dalla pelletteria agli occhiali, ogni dettaglio conta.',
    image:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
    count: 29,
  },
  {
    id: 'cat-003',
    name: 'Calzature',
    slug: 'calzature',
    description:
      'Calzature artigianali che fondono tradizione e modernità. Realizzate a mano con pellami italiani di prima scelta.',
    image:
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80',
    count: 24,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
