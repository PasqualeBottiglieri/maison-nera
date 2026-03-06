import type { Metadata } from 'next';
import { Cormorant_Garamond, Outfit, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SmoothScrollProvider } from '@/components/ui/SmoothScrollProvider';
import { Preloader } from '@/components/ui/Preloader';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageTransition } from '@/components/layout/PageTransition';
import { CartProvider } from '@/lib/cart-context';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MAISON NERA — Luxury Fashion House',
  description:
    'Scopri la collezione esclusiva di Maison Nera. Moda di lusso italiana, design contemporaneo, artigianalità senza compromessi.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="it"
      className={`${cormorant.variable} ${outfit.variable} ${jetbrains.variable}`}
    >
      <body className="bg-nero font-sans text-crema antialiased">
        <CartProvider>
          <SmoothScrollProvider>
            <Preloader />
            <CustomCursor />
            <a
              href="#main-content"
              className="skip-link"
            >
              Vai al contenuto principale
            </a>
            <Navbar />
            <main id="main-content">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </SmoothScrollProvider>
        </CartProvider>
      </body>
    </html>
  );
}
