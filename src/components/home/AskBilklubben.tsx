'use client';

import Link from 'next/link';
import { Button } from '@/components/ui';

export default function AskBilklubben() {
  return (
    <section className="py-16 md:py-24 bg-secondary text-white">
      <div className="container-responsive">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Har du et bildilemma?</h2>
          <p className="text-lg text-red-50 mb-8">
            Bilklubbens brevkasse er stedet, hvor du kan stille dine spørgsmål, dele dine automative problemstillinger eller
            foreslå biler til næste episode. Værterne svarer på de sjoveste og mest relevante spørgsmål på podcasten.
          </p>

          <Link href="/questions">
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-secondary text-lg px-8 py-4"
            >
              ✉️ Spørg Bilklubben
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
