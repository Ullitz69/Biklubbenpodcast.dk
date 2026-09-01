/**
 * Application Constants
 */

export const SITE_NAME = 'Bilklubben Podcast';
export const SITE_DESCRIPTION = 'Premium automotive podcast platform';
export const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

// Scoring configuration
export const CAR_SCORE_CATEGORIES = ['design', 'performance', 'comfort', 'technology', 'value'] as const;
export const MIN_CAR_SCORE = 0;
export const MAX_CAR_SCORE = 10;

// Pagination
export const ITEMS_PER_PAGE = 12;

// Form configuration
export const QUESTION_FORM_FIELDS = {
  name: { label: 'Navn eller alias', required: true, maxLength: 100 },
  email: { label: 'E-mail (valgfrit)', required: false, maxLength: 255 },
  category: { label: 'Kategori', required: true },
  content: { label: 'Dit spørgsmål', required: true, minLength: 10, maxLength: 2000 },
};

export const QUESTION_MIN_LENGTH = 10;
export const QUESTION_MAX_LENGTH = 2000;
