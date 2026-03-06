'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {
  MotionStagger,
  MotionStaggerItem,
} from '@/components/motion/MotionPrimitives';

const team = [
  {
    name: 'Elena Neri',
    role: 'Direttrice Creativa',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    bio: 'Visionaria fondatrice con oltre vent\u2019anni nel mondo della moda.',
  },
  {
    name: 'Marco Fontana',
    role: 'Head of Design',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bio: 'Ex Bottega Veneta, porta rigore strutturale a ogni collezione.',
  },
  {
    name: 'Sofia Marchetti',
    role: 'Brand Director',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    bio: 'Stratega del marchio che cura l\u2019identit\u00e0 visiva globale.',
  },
  {
    name: 'Alessandro Conti',
    role: 'Master Artisan',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    bio: 'Tre generazioni di sartoria fiorentina nelle sue mani esperte.',
  },
];

export function TeamSection() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading label="Il Team" title="Le Menti Creative" />

        <MotionStagger
          className="grid grid-cols-2 gap-6 lg:grid-cols-4"
          staggerChildren={0.1}
        >
          {team.map((member) => (
            <MotionStaggerItem key={member.name}>
              <motion.div className="group cursor-pointer">
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    fill
                    className="object-cover grayscale transition-all duration-700 ease-luxury group-hover:scale-105 group-hover:grayscale-0"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  {/* Bio overlay on hover */}
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-nero/80 via-nero/0 to-transparent opacity-0 transition-opacity duration-500 ease-luxury group-hover:opacity-100">
                    <p className="px-4 pb-4 font-sans text-fluid-xs leading-relaxed text-crema/80">
                      {member.bio}
                    </p>
                  </div>
                </div>

                {/* Name & Role */}
                <div className="mt-4">
                  <h3 className="font-display text-fluid-lg font-light text-crema">
                    {member.name}
                  </h3>
                  <p className="mt-1 font-mono text-fluid-xs uppercase tracking-[0.15em] text-crema/40">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
