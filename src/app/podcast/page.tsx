import type { Metadata } from 'next';
import { Container } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Podcasts | Bilklubben',
  description: 'Lyt til alle episoder af Bilklubben Podcast',
};

export default function PodcastPage() {
  return (
    <main className="min-h-screen py-12">
      <Container>
        <h1 className="section-title">Podcast Episoder</h1>
        <p className="section-subtitle">Alle episoder fra Bilklubben</p>
        
        <div className="bg-surface p-8 rounded-lg border border-border text-center">
          <p className="text-text-secondary">Podcast sektion under udvikling...</p>
        </div>
      </Container>
    </main>
  );
}
