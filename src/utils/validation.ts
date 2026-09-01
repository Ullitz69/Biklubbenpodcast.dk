/**
 * Validation Utilities
 */

import { QuestionCategory } from '@/types';
import { z } from 'zod';

export const questionFormSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().optional().or(z.literal('')),
  category: z.nativeEnum(QuestionCategory),
  content: z.string().min(10).max(2000),
});

export type QuestionFormData = z.infer<typeof questionFormSchema>;

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validateQuestionLength(text: string, min = 10, max = 2000): boolean {
  return text.length >= min && text.length <= max;
}
