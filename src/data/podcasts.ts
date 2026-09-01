import { PodcastEpisode } from '@/types';

/**
 * Mock Podcast Episodes Data
 * This data can be replaced with API calls or database queries
 * Format is ready to be consumed by components
 */

export const podcastEpisodes: PodcastEpisode[] = [
  {
    id: '1',
    title: 'Ferrari F8 Tributo - Italiensk pragtværk',
    description:
      'I denne episode tester vi den fantastiske Ferrari F8 Tributo. Vi diskuterer design, performance og hvad der gør den til et ikonisk køretøj.',
    episodeNumber: 42,
    publishedDate: '2024-01-15',
    duration: 45,
    featured: true,
    streamingPlatforms: [
      { name: 'spotify', url: 'https://spotify.com' },
      { name: 'apple', url: 'https://apple.com' },
      { name: 'youtube', url: 'https://youtube.com' },
    ],
  },
  {
    id: '2',
    title: 'Porsche 911 Turbo - Klassikeren videreudviklet',
    description:
      'En dybdegående samtale om Porsche 911 Turbo. Vi udforsker teknikken, historien og hvorfor den stadig er relevant.',
    episodeNumber: 41,
    publishedDate: '2024-01-08',
    duration: 52,
    streamingPlatforms: [
      { name: 'spotify', url: 'https://spotify.com' },
      { name: 'apple', url: 'https://apple.com' },
    ],
  },
];

export function getPodcastEpisodes(): PodcastEpisode[] {
  return podcastEpisodes;
}

export function getPodcastEpisodeById(id: string): PodcastEpisode | undefined {
  return podcastEpisodes.find((ep) => ep.id === id);
}

export function getFeaturedPodcasts(): PodcastEpisode[] {
  return podcastEpisodes.filter((ep) => ep.featured);
}
