import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  title: 'Tilphee | Intelligent Automation, Better Business',
  description: 'Boluwatife Dorcas Oladapo is a Certified AI Automation Specialist helping real estate professionals and businesses streamline operations through intelligent automation.',
  metadataBase: new URL('https://tilphee.com'),
  openGraph: {
    title: 'Tilphee | Intelligent Automation, Better Business',
    description: 'Helping real estate professionals and businesses work smarter through intelligent automation.',
    type: 'website'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader />{children}<SiteFooter /></body></html>;
}
