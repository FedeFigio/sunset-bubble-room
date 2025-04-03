'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-lg' : 'bg-black/30 backdrop-blur-sm'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-emerald-500 hover:text-emerald-400 transition-colors">
            Bubble Room
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white font-medium hover:text-emerald-400 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white font-medium hover:text-emerald-400 transition-colors">
              Chi Siamo
            </Link>
            <Link href="/servizi" className="text-white font-medium hover:text-emerald-400 transition-colors">
              Servizi
            </Link>
            <Link href="/listino" className="text-white font-medium hover:text-emerald-400 transition-colors">
              Listino
            </Link>
            <Link href="/faq" className="text-white font-medium hover:text-emerald-400 transition-colors">
              FAQ
            </Link>
            <Link
              href="/prenota"
              className="bg-emerald-500 !text-white px-6 py-2 rounded-full hover:bg-emerald-600 transition-colors font-medium shadow-md hover:shadow-lg"
            >
              Prenota Ora
            </Link>
          </div>

          <button
            className="md:hidden text-white hover:text-emerald-400 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-md shadow-lg rounded-lg mt-2">
              <Link
                href="/"
                className="block px-3 py-2 text-white font-medium hover:text-emerald-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/chi-siamo"
                className="block px-3 py-2 text-white font-medium hover:text-emerald-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Chi Siamo
              </Link>
              <Link
                href="/servizi"
                className="block px-3 py-2 text-white font-medium hover:text-emerald-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Servizi
              </Link>
              <Link
                href="/listino"
                className="block px-3 py-2 text-white font-medium hover:text-emerald-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Listino
              </Link>
              <Link
                href="/faq"
                className="block px-3 py-2 text-white font-medium hover:text-emerald-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/prenota"
                className="block px-3 py-2 bg-emerald-500 text-white font-medium rounded-lg hover:bg-emerald-600 transition-colors shadow-md hover:shadow-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Prenota Ora
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}