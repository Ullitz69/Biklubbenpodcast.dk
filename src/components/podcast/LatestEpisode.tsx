'use client';

import Link from 'next/link';
import { Button } from '@/components/ui';
import { formatDate } from '@/utils/format';
import { PodcastEpisode } from '@/types';

interface LatestEpisodeProps {
  episode: PodcastEpisode;
}

export default function LatestEpisode({ episode }: LatestEpisodeProps) {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="container-responsive">
        <h2 className="section-title">Seneste Episode</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Podcast Cover */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm aspect-square bg-gray-300 rounded-lg shadow-lg flex items-center justify-center text-gray-500">
              <span>Episodebillede</span>
            </div>
          </div>

          {/* Episode Info */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm font-semibold text-secondary mb-2">EPISODE {episode.episodeNumber}</p>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">{episode.title}</h3>
              <p className="text-text-secondary leading-relaxed">{episode.description}</p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
              {episode.publishedDate && (
                <span>📅 {formatDate(episode.publishedDate)}</span>
              )}
              {episode.duration && (
                <span>⏱️ {episode.duration} min</span>
              )}
            </div>

            {/* Streaming Links */}
            <div className="flex flex-wrap gap-3">
              {episode.streamingPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-gray-800 transition-colors"
                  aria-label={`Lyster på ${platform.name}`}
                >
                  {platform.name === 'spotify' && '🎵'}
                  {platform.name === 'apple' && '🎙️'}
                  {platform.name === 'youtube' && '▶️'}
                  <span className="capitalize">{platform.name}</span>
                </a>
              ))}
            </div>

            <Link href="/podcast">
              <Button variant="primary" className="w-full md:w-auto">
                Se alle episoder →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
