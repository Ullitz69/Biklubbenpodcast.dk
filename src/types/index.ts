/**
 * Core Data Types
 * Defines the structure for all major entities in the application
 */

export interface PodcastEpisode {
  id: string;
  title: string;
  description: string;
  episodeNumber: number;
  publishedDate: string;
  duration: number; // in minutes
  coverImage?: string;
  streamingPlatforms: StreamingPlatform[];
  featured?: boolean;
}

export interface StreamingPlatform {
  name: 'spotify' | 'apple' | 'youtube' | 'podimo' | 'other';
  url: string;
  icon?: string;
}

export interface LiveShow {
  id: string;
  title: string;
  description?: string;
  date: string; // ISO date
  time: string; // HH:mm format
  location: string;
  venue: string;
  city: string;
  status: 'upcoming' | 'on-sale' | 'low-stock' | 'sold-out' | 'happened';
  ticketUrl?: string;
  image?: string;
}

export interface CarReview {
  id: string;
  model: string;
  brand: string;
  year?: number;
  imageUrl?: string;
  description?: string;
  scores: CarScores;
  ranking?: number; // Position on leaderboard
  reviewedDate?: string;
  reviewers?: string[];
  notes?: string;
}

export interface CarScores {
  design: number;
  performance: number;
  comfort: number;
  technology: number;
  value: number;
  total?: number; // Calculated
}

export interface Question {
  id: string;
  name: string;
  alias?: string;
  email?: string;
  category: QuestionCategory;
  content: string;
  submittedDate: string;
  status: 'pending' | 'answered' | 'featured';
}

export enum QuestionCategory {
  CARS = 'cars',
  CAR_BUYING = 'car-buying',
  TECHNICAL = 'technical',
  CAR_OF_WEEK = 'car-of-week',
  PODCAST = 'podcast',
  OTHER = 'other',
}

export const QUESTION_CATEGORIES = {
  [QuestionCategory.CARS]: 'Biler',
  [QuestionCategory.CAR_BUYING]: 'Bilkøb',
  [QuestionCategory.TECHNICAL]: 'Teknisk spørgsmål',
  [QuestionCategory.CAR_OF_WEEK]: 'Ugens Bil',
  [QuestionCategory.PODCAST]: 'Podcasten',
  [QuestionCategory.OTHER]: 'Andet',
};
