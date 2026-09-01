import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import LatestEpisode from '@/components/podcast/LatestEpisode';
import CarOfTheWeek from '@/components/cars/CarOfTheWeek';
import LiveShows from '@/components/shows/LiveShows';
import AskBilklubben from '@/components/home/AskBilklubben';
import QuizTeaser from '@/components/home/QuizTeaser';
import Hosts from '@/components/home/Hosts';
import { getPodcastEpisodes } from '@/data/podcasts';
import { getCarReviews } from '@/data/cars';
import { getLiveShows } from '@/data/shows';

export const metadata: Metadata = {
  title: 'Bilklubben Podcast - Danmarks bedste bilpodcast',
  description: 'Bilklubben Podcast - en platform for bilentusiaster. Høring podcast, se bilrangeringer, deltag i quiz og stil dine spørgsmål til værterne.',
  openGraph: {
    title: 'Bilklubben Podcast',
    description: 'Danmarks bedste bilpodcast med ugens bil rangering og liveshows',
    type: 'website',
  },
};

export default function HomePage() {
  // Get data for the homepage
  const podcasts = getPodcastEpisodes();
  const latestEpisode = podcasts[0];
  const cars = getCarReviews();
  const topCar = cars[0];
  const shows = getLiveShows();

  return (
    <main>
      <Hero />
      {latestEpisode && <LatestEpisode episode={latestEpisode} />}
      {topCar && <CarOfTheWeek car={topCar} />}
      {shows.length > 0 && <LiveShows shows={shows} />}
      <AskBilklubben />
      <QuizTeaser />
      <Hosts />
    </main>
  );
}
