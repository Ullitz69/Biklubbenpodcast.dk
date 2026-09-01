import type { Metadata } from 'next';
import { Container } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Ugens Bil | Bilklubben',
  description: 'Se bilerne rangeret efter Bilklubben Podcast-værternes vurderinger',
};

export default function CarsPage() {
  return (
    <main className="min-h-screen py-12">
      <Container>
        <h1 className="section-title">Ugens Bil - Rangering</h1>
        <p className="section-subtitle">Bilrangeringer fra Bilklubben Podcast</p>
        
        <div className="bg-surface p-8 rounded-lg border border-border text-center">
          <p className="text-text-secondary">Bilrangering sektion under udvikling...</p>
        </div>
      </Container>
    </main>
  );
}
