import type { Metadata } from 'next';
import { Container } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Liveshows & Billetter | Bilklubben',
  description: 'Kommende Bilklubben liveshows - book billetter her',
};

export default function ShowsPage() {
  return (
    <main className="min-h-screen py-12">
      <Container>
        <h1 className="section-title">Liveshows & Billetter</h1>
        <p className="section-subtitle">Kommende begivenheder</p>
        
        <div className="bg-surface p-8 rounded-lg border border-border text-center">
          <p className="text-text-secondary">Liveshows sektion under udvikling...</p>
        </div>
      </Container>
    </main>
  );
}
