/**
 * API Services
 * 
 * Central location for API communication.
 * Currently using mock data, ready for API integration.
 * 
 * Pattern:
 * - Each service handles one domain (podcasts, shows, cars, etc)
 * - All API calls go through services, not directly in components
 * - Services return typed data
 * - Error handling is centralized
 */

// Example service pattern:
// export const podcastService = {
//   getEpisodes: async () => {},
//   getEpisode: async (id: string) => {},
// };
