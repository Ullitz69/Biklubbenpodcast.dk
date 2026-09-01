import { CarReview, CarScores } from '@/types';

/**
 * Mock Car Reviews Data
 * This data can be replaced with imported Excel data or API calls
 */

const carReviews: CarReview[] = [
  {
    id: '1',
    model: 'F8 Tributo',
    brand: 'Ferrari',
    year: 2024,
    scores: {
      design: 9.5,
      performance: 9.8,
      comfort: 8.2,
      technology: 8.9,
      value: 7.5,
      total: 43.9,
    },
    ranking: 1,
    reviewedDate: '2024-01-10',
    reviewers: ['Host A', 'Host B'],
    notes: 'Fantastisk italiensk V12 performance',
  },
  {
    id: '2',
    model: '911 Turbo',
    brand: 'Porsche',
    year: 2024,
    scores: {
      design: 9.0,
      performance: 9.5,
      comfort: 8.5,
      technology: 9.2,
      value: 8.0,
      total: 43.2,
    },
    ranking: 2,
    reviewedDate: '2024-01-03',
    reviewers: ['Host A', 'Host C'],
    notes: 'Klassikeren forbedret med moderne teknologi',
  },
  {
    id: '3',
    model: 'M440i',
    brand: 'BMW',
    year: 2024,
    scores: {
      design: 8.5,
      performance: 8.7,
      comfort: 9.0,
      technology: 9.1,
      value: 8.5,
      total: 43.8,
    },
    ranking: 3,
    reviewedDate: '2023-12-27',
    reviewers: ['Host B', 'Host C'],
    notes: 'Fantastisk dagligdagsbil med sport',
  },
];

export function getCarReviews(): CarReview[] {
  return carReviews.sort((a, b) => (a.ranking || 0) - (b.ranking || 0));
}

export function getCarReviewById(id: string): CarReview | undefined {
  return carReviews.find((car) => car.id === id);
}

export function getTopCars(count: number = 3): CarReview[] {
  return getCarReviews().slice(0, count);
}

export function getCarsByBrand(brand: string): CarReview[] {
  return getCarReviews().filter((car) => car.brand.toLowerCase() === brand.toLowerCase());
}

export function searchCars(query: string): CarReview[] {
  const q = query.toLowerCase();
  return getCarReviews().filter(
    (car) => car.model.toLowerCase().includes(q) || car.brand.toLowerCase().includes(q)
  );
}

export function calculateAverageScores(): Partial<CarScores> {
  if (carReviews.length === 0) return {};

  const scores: Partial<CarScores> = {
    design: 0,
    performance: 0,
    comfort: 0,
    technology: 0,
    value: 0,
  };

  carReviews.forEach((car) => {
    Object.keys(car.scores).forEach((key) => {
      if (key !== 'total' && key in scores) {
        const scoreKey = key as keyof CarScores;
        const carScoreValue = car.scores[scoreKey];
        if (typeof carScoreValue === 'number') {
          scores[scoreKey] = (scores[scoreKey] || 0) + carScoreValue;
        }
      }
    });
  });

  Object.keys(scores).forEach((key) => {
    const scoreKey = key as keyof CarScores;
    const avgValue = scores[scoreKey];
    if (typeof avgValue === 'number') {
      scores[scoreKey] = Math.round((avgValue / carReviews.length) * 10) / 10;
    }
  });

  return scores;
}
