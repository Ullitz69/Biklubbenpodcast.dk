'use client';

import Link from 'next/link';
import { Button } from '@/components/ui';
import { formatScore } from '@/utils/format';
import { CarReview } from '@/types';

interface CarOfTheWeekProps {
  car: CarReview;
}

export default function CarOfTheWeek({ car }: CarOfTheWeekProps) {
  const scoreCategories = [
    { key: 'design' as const, label: 'Design', icon: '🎨' },
    { key: 'performance' as const, label: 'Performance', icon: '⚡' },
    { key: 'comfort' as const, label: 'Komfort', icon: '🛋️' },
    { key: 'technology' as const, label: 'Teknologi', icon: '🔧' },
    { key: 'value' as const, label: 'Værdi', icon: '💰' },
  ];

  const maxScore = 10;
  const totalScore = car.scores.total || 0;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-gray-900 text-white">
      <div className="container-responsive">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Ugens Bil</h2>
        <p className="text-accent mb-12">Bilklubbens bedømmelse og rangering</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Car Image Placeholder */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm aspect-video bg-gray-700 rounded-lg shadow-2xl flex items-center justify-center text-gray-400">
              <span className="text-lg">{car.brand} {car.model}</span>
            </div>
          </div>

          {/* Car Info & Scores */}
          <div className="space-y-8">
            {/* Title & Ranking */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl font-bold text-accent">#{car.ranking}</span>
                <span className="text-xs bg-secondary text-white px-3 py-1 rounded-full font-semibold">
                  PLACERING
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">
                {car.brand} {car.model}
              </h3>
              {car.year && <p className="text-gray-300">{car.year}</p>}
            </div>

            {/* Total Score */}
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur">
              <p className="text-gray-300 text-sm mb-2">SAMLET SCORE</p>
              <div className="flex items-end gap-3">
                <span className="text-5xl font-bold">{formatScore(totalScore)}</span>
                <span className="text-gray-300">/ 50</span>
              </div>
            </div>

            {/* Category Scores */}
            <div className="space-y-3">
              {scoreCategories.map((category) => {
                const score = car.scores[category.key];
                const percentage = (score / maxScore) * 100;
                return (
                  <div key={category.key}>
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-sm font-semibold flex items-center gap-2">
                        <span>{category.icon}</span>
                        {category.label}
                      </label>
                      <span className="text-sm font-bold">{formatScore(score)}</span>
                    </div>
                    <div className="w-full h-2 bg-white bg-opacity-20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <Link href="/cars" className="inline-block">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                Se hele ranglisten →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
