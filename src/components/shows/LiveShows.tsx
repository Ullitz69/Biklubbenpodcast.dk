'use client';

import Link from 'next/link';
import { Button } from '@/components/ui';
import { formatDate } from '@/utils/format';
import { LiveShow } from '@/types';

interface LiveShowsProps {
  shows: LiveShow[];
}

const STATUS_LABELS: Record<string, { label: string; bgColor: string; textColor: string }> = {
  'upcoming': { label: 'Snart', bgColor: 'bg-blue-100', textColor: 'text-blue-800' },
  'on-sale': { label: 'Billetter til salg', bgColor: 'bg-green-100', textColor: 'text-green-800' },
  'low-stock': { label: 'Få billetter', bgColor: 'bg-orange-100', textColor: 'text-orange-800' },
  'sold-out': { label: 'Udsolgt', bgColor: 'bg-red-100', textColor: 'text-red-800' },
  'happened': { label: 'Afholdt', bgColor: 'bg-gray-100', textColor: 'text-gray-800' },
};

export default function LiveShows({ shows }: LiveShowsProps) {
  const upcomingShows = shows.filter((show) => show.status !== 'happened').slice(0, 2);
  const nextShow = upcomingShows[0];

  if (!nextShow) {
    return (
      <section className="py-16 md:py-24 bg-white">
        <div className="container-responsive">
          <h2 className="section-title">Bilklubben Live</h2>
          <p className="section-subtitle">Kommende shows og billetter</p>
          <p className="text-text-secondary">Ingen kommende shows pt.</p>
        </div>
      </section>
    );
  }

  const statusInfo = STATUS_LABELS[nextShow.status] || STATUS_LABELS['upcoming'];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-responsive">
        <h2 className="section-title">Bilklubben Live</h2>
        <p className="section-subtitle">Eventyr, musik og automotive sjov</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
          {/* Next Show Feature */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm aspect-video bg-gray-200 rounded-lg shadow-lg flex items-center justify-center text-gray-500">
              <span>Show billede</span>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${statusInfo.bgColor} ${statusInfo.textColor}`}>
                  {statusInfo.label}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">{nextShow.title}</h3>
              {nextShow.description && <p className="text-text-secondary">{nextShow.description}</p>}
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📅</span>
                <div>
                  <p className="font-semibold text-primary">{formatDate(nextShow.date)}</p>
                  <p className="text-text-secondary">Kl. {nextShow.time}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-semibold text-primary">{nextShow.venue}</p>
                  <p className="text-text-secondary">{nextShow.city}</p>
                </div>
              </div>
            </div>

            {nextShow.ticketUrl && (
              <a href={nextShow.ticketUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" className="w-full md:w-auto">
                  🎟️ Køb billetter
                </Button>
              </a>
            )}

            {upcomingShows.length > 1 && (
              <Link href="/shows">
                <Button variant="secondary" className="w-full md:w-auto">
                  Se alle shows →
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Other Upcoming Shows */}
        {upcomingShows.length > 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t pt-12">
            <h3 className="col-span-full font-semibold text-lg text-primary mb-2">Andre kommende shows</h3>
            {upcomingShows.slice(1).map((show) => (
              <div key={show.id} className="card p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold text-primary">{show.title}</p>
                    <p className="text-sm text-text-secondary">{show.venue}, {show.city}</p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold whitespace-nowrap ${
                      STATUS_LABELS[show.status].bgColor
                    } ${STATUS_LABELS[show.status].textColor}`}
                  >
                    {STATUS_LABELS[show.status].label}
                  </span>
                </div>
                <p className="text-sm text-text-secondary mb-4">
                  {formatDate(show.date)} • Kl. {show.time}
                </p>
                {show.ticketUrl && (
                  <a href={show.ticketUrl} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-red-700 font-semibold text-sm">
                    Køb billetter →
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
