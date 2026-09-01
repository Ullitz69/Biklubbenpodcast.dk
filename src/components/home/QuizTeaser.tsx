'use client';

import { Button } from '@/components/ui';

export default function QuizTeaser() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-accent to-orange-400 text-primary">
      <div className="container-responsive">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">🎯 Verdens sværeste bilquiz</h2>
          <p className="text-lg mb-8 opacity-90">
            Tror du at du kender til biler? Test din viden mod nogle af Bilklubbens sværeste bilspørgsmål. Få
            point, klim på ranglisten og udfordre dine venner.
          </p>

          <Button
            variant="secondary"
            className="bg-primary text-white hover:bg-gray-800"
          >
            🏆 Test din bilviden
          </Button>

          <p className="text-sm mt-6 opacity-75">Quizzen kommer snart...</p>
        </div>
      </div>
    </section>
  );
}
