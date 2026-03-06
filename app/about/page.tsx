import type { Metadata } from 'next';
import { AboutHero } from '@/components/sections/about/AboutHero';
import { Timeline } from '@/components/sections/about/Timeline';
import { BrandValues } from '@/components/sections/about/BrandValues';
import { TeamSection } from '@/components/sections/about/TeamSection';

export const metadata: Metadata = {
  title: 'Chi Siamo — MAISON NERA',
  description:
    'Scopri la storia, i valori e il team di Maison Nera. Dal 2018, artigianialità italiana e visione contemporanea al servizio del lusso autentico.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Timeline />
      <BrandValues />
      <TeamSection />
    </>
  );
}
