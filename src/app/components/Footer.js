'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6">Bubble Room</h3>
          <p className="text-emerald-200 mb-4">
            Un'esperienza unica di pernottamento sotto le stelle, immersi nella natura incontaminata.
          </p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-emerald-200 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-emerald-200 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.27.2-6.78,2.71-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.27,2.71,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.27-.2,6.78-2.71,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.27-2.71-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-6">Contatti</h4>
          <ul className="space-y-4 text-emerald-200">
            <li>📍 Via delle Stelle, 123</li>
            <li>📞 +39 123 456 7890</li>
            <li>✉️ info@bubbleroom.it</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-6">Link Utili</h4>
          <ul className="space-y-4">
            <li>
              <Link href="/about" className="text-emerald-200 hover:text-white transition-colors">
                Chi Siamo
              </Link>
            </li>
            <li>
              <Link href="/prenota" className="text-emerald-200 hover:text-white transition-colors">
                Prenota Ora
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-emerald-200 hover:text-white transition-colors">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-6">Orari</h4>
          <ul className="space-y-4 text-emerald-200">
            <li>Check-in: 15:00</li>
            <li>Check-out: 11:00</li>
            <li>Reception: 24/7</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-12 pt-8 border-t border-emerald-800">
        <p className="text-center text-emerald-200">
          © {new Date().getFullYear()} Bubble Room. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}
