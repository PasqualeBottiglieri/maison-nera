import { Marquee } from '@/components/ui/Marquee';

const phrases = [
  'Artigianalità Italiana',
  'Design Esclusivo',
  'Materiali Pregiati',
  'Spedizione Worldwide',
  'Made with Passion',
];

export function MarqueeSection() {
  return (
    <section className="border-y border-crema/10 py-12">
      <Marquee speed={40}>
        <div className="flex items-center">
          {phrases.map((phrase, index) => (
            <span key={index} className="flex items-center">
              <span className="font-display text-fluid-xl tracking-[0.1em] text-crema/30">
                {phrase}
              </span>
              <span className="mx-8 text-oro/40">&#x25CF;</span>
            </span>
          ))}
        </div>
      </Marquee>
    </section>
  );
}
