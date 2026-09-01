/**
 * Formatting Utilities
 */

export function formatDate(dateString: string, locale: string = 'da-DK'): string {
  try {
    return new Date(dateString).toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return dateString;
  }
}

export function formatTime(timeString: string): string {
  try {
    const [hours, minutes] = timeString.split(':');
    return `${hours}:${minutes}`;
  } catch {
    return timeString;
  }
}

export function formatScore(score: number | undefined): string {
  if (!score) return 'N/A';
  return score.toFixed(1);
}

export function truncateText(text: string, maxLength: number = 100): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}
