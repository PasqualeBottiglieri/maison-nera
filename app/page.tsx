import { HeroSection } from '@/components/sections/home/HeroSection';
import { FeaturedCollection } from '@/components/sections/home/FeaturedCollection';
import { BrandStatement } from '@/components/sections/home/BrandStatement';
import { CategoriesShowcase } from '@/components/sections/home/CategoriesShowcase';
import { MarqueeSection } from '@/components/sections/home/MarqueeSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedCollection />
      <BrandStatement />
      <CategoriesShowcase />
      <MarqueeSection />
    </>
  );
}
