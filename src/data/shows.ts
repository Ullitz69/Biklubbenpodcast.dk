import { LiveShow } from '@/types';

/**
 * Mock Live Shows Data
 * This data can be replaced with API calls or database queries
 */

export const liveShows: LiveShow[] = [
  {
    id: '1',
    title: 'Bilklubben Live - København',
    description: 'En aften fuld af automotive enthusiasm med de bedste fra Bilklubben.',
    date: '2024-02-15',
    time: '19:30',
    location: 'København',
    venue: 'Pumpehuset',
    city: 'København',
    status: 'on-sale',
    ticketUrl: 'https://ticketmaster.dk',
  },
  {
    id: '2',
    title: 'Bilklubben Live - Aarhus',
    description: 'En eksklusiv aften med Bilklubben i Aarhus.',
    date: '2024-03-10',
    time: '19:00',
    location: 'Aarhus',
    venue: 'Spot Festival',
    city: 'Aarhus',
    status: 'upcoming',
  },
  {
    id: '3',
    title: 'Bilklubben Live - Malmö',
    description: 'Speciel show i Malmö med ekstra underholdning.',
    date: '2024-02-05',
    time: '20:00',
    location: 'Malmö',
    venue: 'Debaser Strand',
    city: 'Malmö',
    status: 'low-stock',
    ticketUrl: 'https://ticketmaster.se',
  },
];

export function getLiveShows(): LiveShow[] {
  return liveShows.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export function getUpcomingShows(): LiveShow[] {
  const now = new Date();
  return getLiveShows().filter(
    (show) => new Date(show.date) > now && show.status !== 'happened'
  );
}

export function getLiveShowById(id: string): LiveShow | undefined {
  return liveShows.find((show) => show.id === id);
}

export function getPastShows(): LiveShow[] {
  const now = new Date();
  return getLiveShows().filter((show) => new Date(show.date) <= now || show.status === 'happened');
}
