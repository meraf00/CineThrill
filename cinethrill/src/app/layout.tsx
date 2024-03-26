import type { Metadata } from 'next';
import { poppins } from '@/libs/fonts';
import './globals.css';
import Providers from './providers';
import { Toaster, ToastBar } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'CineThrill',
  description:
    'Explore CineThrill, the cutting-edge cinema center management system designed to enhance and streamline your movie-going experience. Discover innovative features for efficient ticketing, scheduling, and audience engagement. Revolutionize the way cinemas deliver unparalleled cinematic journeys.',
  keywords:
    'cinema, movie, ticket, schedule, audience, engagement, ethiopia,CineThrill, cinema center, movie experience, ticketing, scheduling, audience engagement, innovation, cinematic journey',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-y-auto h-screen">
      <body
        id="body"
        className={`relative text-foreground ${poppins.className} font-normal bg-gradient-to-b from-blueblack to-blueblack-light w-full overflow-x-hidden bg-fixed overflow-y-auto h-full`}
      >
        <Providers>
          <Toaster position="top-right"></Toaster>
          {children}
        </Providers>
      </body>
    </html>
  );
}
