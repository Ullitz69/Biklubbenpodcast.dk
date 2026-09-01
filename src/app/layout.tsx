import type { Metadata } from 'next';
import './globals.css';
import RootLayout from '@/components/layout/RootLayout';

export const metadata: Metadata = {
  title: 'Bilklubben Podcast - Premium Automotive Entertainment',
  description:
    'Bilklubben Podcast - Your go-to platform for automotive podcast, car reviews, and rankings. Featuring exclusive car rankings, live shows, and community engagement.',
  keywords: 'podcast, bilkluben, cars, automotive, reviews, rankings',
  openGraph: {
    title: 'Bilklubben Podcast',
    description: 'Premium automotive podcast platform',
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://bilklubben.dk',
    siteName: 'Bilklubben Podcast',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da">
      <body className="bg-background text-text-primary">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
