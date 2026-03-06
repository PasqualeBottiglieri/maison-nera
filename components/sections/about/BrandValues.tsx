'use client';

import { Scissors, Gem, Leaf, Globe } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {
  MotionStagger,
  MotionStaggerItem,
} from '@/components/motion/MotionPrimitives';

const values = [
  {
    icon: Scissors,
    title: 'Artigianalit\u00e0',
    description:
      'Ogni pezzo \u00e8 realizzato a mano nei nostri atelier italiani, dove maestri artigiani con decenni di esperienza trasformano i tessuti pi\u00f9 pregiati in opere di sartoria contemporanea.',
  },
  {
    icon: Gem,
    title: 'Qualit\u00e0 Senza Compromessi',
    description:
      'Selezioniamo solo i migliori materiali dai fornitori pi\u00f9 rinomati al mondo. Dalla seta di Como al cashmere mongolo, ogni fibra racconta una storia di eccellenza.',
  },
  {
    icon: Leaf,
    title: 'Sostenibilit\u00e0',
    description:
      'Il nostro impegno per un futuro responsabile si riflette in ogni scelta: dalla filiera certificata al packaging biodegradabile, fino alla carbon neutrality raggiunta nel 2026.',
  },
  {
    icon: Globe,
    title: 'Visione Globale',
    description:
      'Dal cuore di Milano al mondo intero, portiamo l\u2019eccellenza italiana in oltre quaranta Paesi, mantenendo l\u2019intimit\u00e0 e la cura che solo una maison indipendente pu\u00f2 offrire.',
  },
];

export function BrandValues() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading label="I Nostri Valori" title="Cosa Ci Guida" />

        <MotionStagger
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
          staggerChildren={0.12}
        >
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <MotionStaggerItem key={value.title}>
                <div className="group rounded-none border border-crema/10 p-8 transition-colors duration-500 ease-luxury hover:border-crema/20">
                  <Icon className="h-8 w-8 text-oro" strokeWidth={1.5} />
                  <h3 className="mt-6 font-display text-fluid-xl font-light text-crema">
                    {value.title}
                  </h3>
                  <p className="mt-4 font-sans text-fluid-sm leading-relaxed text-crema/60">
                    {value.description}
                  </p>
                </div>
              </MotionStaggerItem>
            );
          })}
        </MotionStagger>
      </div>
    </section>
  );
}
