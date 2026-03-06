'use client';

import { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, X } from 'lucide-react';
import gsap from 'gsap';
import { useCart } from '@/lib/cart-context';

const NAV_LINKS = [
  { href: '/shop', label: 'Collezione' },
  { href: '/about', label: 'Chi Siamo' },
];

const MOBILE_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Collezione' },
  { href: '/about', label: 'Chi Siamo' },
  { href: '/cart', label: 'Carrello' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { items } = useCart();
  const cartCount = items.length;

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileLinksRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const scrollYRef = useRef(0);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Close mobile menu on pathname change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // GSAP timeline setup
  useLayoutEffect(() => {
    if (!mobileMenuRef.current || !mobileLinksRef.current) return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });

      if (prefersReduced) {
        tl.fromTo(
          mobileMenuRef.current,
          { opacity: 0, visibility: 'hidden' },
          { opacity: 1, visibility: 'visible', duration: 0.01 }
        );
      } else {
        tl.fromTo(
          mobileMenuRef.current,
          { xPercent: 100, visibility: 'hidden' },
          {
            xPercent: 0,
            visibility: 'visible',
            duration: 0.6,
            ease: 'power3.inOut',
          }
        );

        const links = mobileLinksRef.current?.querySelectorAll('.mobile-link');
        if (links) {
          tl.fromTo(
            links,
            { xPercent: 40, opacity: 0 },
            {
              xPercent: 0,
              opacity: 1,
              duration: 0.4,
              stagger: 0.08,
              ease: 'power2.out',
            },
            '-=0.2'
          );
        }
      }

      tlRef.current = tl;
    });

    return () => ctx.revert();
  }, []);

  // Play/reverse GSAP timeline based on mobileOpen
  useEffect(() => {
    if (!tlRef.current) return;

    if (mobileOpen) {
      // Lock body scroll
      scrollYRef.current = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';

      tlRef.current.play();
    } else {
      tlRef.current.reverse();

      // Unlock body scroll
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      window.scrollTo(0, scrollYRef.current);
    }
  }, [mobileOpen]);

  const toggleMobile = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-luxury ${
          scrolled
            ? 'bg-nero/80 backdrop-blur-lg border-b border-crema/5'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-20 lg:px-10">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-fluid-lg tracking-[0.2em] text-crema transition-opacity hover:opacity-80"
          >
            MAISON NERA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative font-sans text-fluid-xs uppercase tracking-[0.15em] text-crema/70 transition-colors hover:text-crema"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-oro transition-all duration-300 ease-luxury group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right section */}
          <div className="flex items-center gap-4">
            {/* Cart (desktop) */}
            <Link
              href="/cart"
              className="relative hidden lg:flex items-center text-crema/70 transition-colors hover:text-crema"
              aria-label={`Carrello${cartCount > 0 ? `, ${cartCount} articoli` : ''}`}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-oro text-[10px] font-sans font-medium text-nero">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile hamburger */}
            <button
              className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
              onClick={toggleMobile}
              aria-label={mobileOpen ? 'Chiudi menu' : 'Apri menu'}
              aria-expanded={mobileOpen}
            >
              <span
                className={`block h-[1px] w-6 bg-crema transition-all duration-300 ease-luxury ${
                  mobileOpen ? 'translate-y-[3.5px] rotate-45' : ''
                }`}
              />
              <span
                className={`block h-[1px] w-6 bg-crema transition-all duration-300 ease-luxury ${
                  mobileOpen ? '-translate-y-[3.5px] -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        ref={mobileMenuRef}
        className="invisible fixed inset-0 z-50 flex flex-col bg-nero lg:hidden"
        aria-hidden={!mobileOpen}
      >
        {/* Close button */}
        <div className="flex h-16 items-center justify-end px-6">
          <button
            onClick={closeMobile}
            className="flex h-10 w-10 items-center justify-center text-crema"
            aria-label="Chiudi menu"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Mobile links */}
        <div
          ref={mobileLinksRef}
          className="flex flex-1 flex-col items-start justify-center gap-8 px-10"
        >
          {MOBILE_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="mobile-link font-display text-fluid-3xl text-crema/80 transition-colors hover:text-crema"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
