import { Inter, Poppins } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-poppins',
});

export const protestRevolution = localFont({
  src: './fonts/Protest_Revolution/ProtestRevolution-Regular.ttf',
  display: 'swap',
  variable: '--font-protest-revolution',
});
