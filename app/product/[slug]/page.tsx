import { products } from '@/lib/products';
import ProductPageClient from './ProductPageClient';

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage() {
  return <ProductPageClient />;
}
