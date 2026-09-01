'use client';

import Link from 'next/link';
import { Button } from '@/components/ui';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-gray-900 to-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(220, 38, 38, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="relative z-10 container-responsive py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Logo/Emoji */}
          <div className="mb-8 text-7xl md:text-8xl">🏎️</div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Bilklubben Podcast
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-accent mb-8">
            Danmarks bilklub for dem, der aldrig bliver trætte af at tale om biler.
          </p>

          {/* Description */}
          <p className="text-lg text-gray-300 mb-12 leading-relaxed">
            Velkommen til et univers fuld af automotive passion, ugers bedste bilrangeringer, sjove bilquizzer og værternes
            egne bilprojekter. Hør om de seneste biler, bilnyheder og alt det, som bilentusiaster elsker at snakke om.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/podcast">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                🎧 Hør seneste episode
              </Button>
            </Link>

            <Link href="/cars">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary">
                🏆 Se Ugens Bil
              </Button>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 md:mt-20 animate-bounce">
            <p className="text-gray-400 text-sm mb-2">Scroll for at udforske</p>
            <svg className="w-6 h-6 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Accent Line Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
    </section>
  );
}
