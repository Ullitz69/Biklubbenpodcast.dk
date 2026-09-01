import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white border-t border-gray-700">
      <div className="container-responsive py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="font-bold text-lg mb-2">
              <span className="text-secondary">🏎️</span> Bilklubben
            </div>
            <p className="text-gray-400 text-sm">
              Premium automotive podcast platform
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-secondary transition-colors">
                  Forside
                </Link>
              </li>
              <li>
                <Link href="/podcast" className="hover:text-secondary transition-colors">
                  Podcast
                </Link>
              </li>
              <li>
                <Link href="/shows" className="hover:text-secondary transition-colors">
                  Liveshows
                </Link>
              </li>
              <li>
                <Link href="/cars" className="hover:text-secondary transition-colors">
                  Ugens Bil
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-bold mb-4">Community</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/questions" className="hover:text-secondary transition-colors">
                  Stil et spørgsmål
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4">Info</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Privatlivspolitik
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Vilkår for brug
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} Bilklubben Podcast. Alle rettigheder forbeholdt.
          </p>
        </div>
      </div>
    </footer>
  );
}
