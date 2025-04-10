import { Header } from '@/components/header';
import { TanstackQueryProvider } from '@/providers/tanstack-query';
import { ThemeProvider } from '@/providers/theme-provider';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Is The Show Finished?',
  description: 'Search for TV shows and check if they are finished or not.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <Script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7783316904653454'
          crossOrigin='anonymous'
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen`}>
        <TanstackQueryProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main>{children}</main>
          </ThemeProvider>
        </TanstackQueryProvider>
        {/*   Google Analytics   */}
        <Script
          id='google_analytics_gtag'
          strategy='lazyOnload'
          src='https://www.googletagmanager.com/gtag/js?id=G-T116Z2TCLP'
        />
        <Script id='google_analytics' strategy='lazyOnload' src='/g_analytics.js' />
        <Analytics />
      </body>
    </html>
  );
}
