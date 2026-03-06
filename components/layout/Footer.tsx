'use client';

import Link from 'next/link';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Collezione' },
  { href: '/about', label: 'Chi Siamo' },
  { href: '/cart', label: 'Carrello' },
];

const SUPPORT_LINKS = [
  { href: '#', label: 'Spedizioni' },
  { href: '#', label: 'Resi' },
  { href: '#', label: 'FAQ' },
  { href: '#', label: 'Contatti' },
];

export function Footer() {
  return (
    <footer className="bg-nero border-t border-crema/10">
      {/* Watermark */}
      <div className="overflow-hidden py-12 lg:py-16">
        <p className="text-center font-display text-fluid-4xl text-crema/5 select-none whitespace-nowrap">
          MAISON NERA
        </p>
      </div>

      {/* Main grid */}
      <div className="mx-auto max-w-7xl px-6 pb-12 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand description */}
          <div>
            <p className="font-sans text-fluid-sm leading-relaxed text-crema/50">
              Maison Nera incarna l&apos;essenza del lusso contemporaneo
              italiano. Ogni creazione nasce dall&apos;incontro tra tradizione
              artigianale e visione avanguardista.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 font-sans text-fluid-xs uppercase tracking-[0.15em] text-crema/30">
              Navigazione
            </h3>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-fluid-sm text-crema/50 transition-colors hover:text-crema"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-6 font-sans text-fluid-xs uppercase tracking-[0.15em] text-crema/30">
              Assistenza
            </h3>
            <ul className="flex flex-col gap-3">
              {SUPPORT_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-fluid-sm text-crema/50 transition-colors hover:text-crema"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-6 font-sans text-fluid-xs uppercase tracking-[0.15em] text-crema/30">
              Newsletter
            </h3>
            <p className="mb-6 font-sans text-fluid-sm text-crema/50">
              Iscriviti per ricevere aggiornamenti esclusivi e accesso
              anticipato alle nuove collezioni.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-stretch"
            >
              <input
                type="email"
                placeholder="La tua email"
                aria-label="Indirizzo email per la newsletter"
                className="flex-1 bg-transparent border-b border-crema/20 px-0 py-2 font-sans text-fluid-sm text-crema placeholder:text-crema/30 outline-none transition-colors focus:border-oro"
              />
              <button
                type="submit"
                className="ml-4 border-b border-crema/20 px-2 py-2 font-sans text-fluid-xs uppercase tracking-[0.15em] text-crema/50 transition-colors hover:border-oro hover:text-crema"
              >
                Iscriviti
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-crema/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row lg:px-10">
          <p className="font-sans text-fluid-xs text-crema/30">
            &copy; 2024 Maison Nera. Tutti i diritti riservati.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="font-sans text-fluid-xs text-crema/30 transition-colors hover:text-crema"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="font-sans text-fluid-xs text-crema/30 transition-colors hover:text-crema"
            >
              Termini
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
