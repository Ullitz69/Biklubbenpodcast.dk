import type { Metadata } from 'next';
import { Container } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Stil et spørgsmål | Bilklubben',
  description: 'Stil dit spørgsmål til Bilklubben Podcast',
};

export default function QuestionsPage() {
  return (
    <main className="min-h-screen py-12">
      <Container>
        <h1 className="section-title">Stil et spørgsmål</h1>
        <p className="section-subtitle">Del dine spørgsmål med Bilklubben</p>
        
        <div className="bg-surface p-8 rounded-lg border border-border text-center">
          <p className="text-text-secondary">Spørgeformular under udvikling...</p>
        </div>
      </Container>
    </main>
  );
}
