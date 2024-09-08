// RootLayout.tsx o RootLayout.js
import ClientCommons from './ClientCommons';
import './globals.css';
import '@/fonts/line-awesome-1.3.0/css/line-awesome.css';
import '@/styles/index.scss';
import 'rc-slider/assets/index.css';
import Footer from '@/components/footer/Footer';
import { Metadata } from 'next';
import ClientWrapper from '../components/ClientWrapper';
import React from 'react';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Arinaga Colors - Booking online',
  description: 'Booking online',
  keywords: 'Booking online',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-custom text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
        <ClientCommons />
        <ClientWrapper>{children}</ClientWrapper>
        <Footer />

        {/* Script de Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KC046K851R"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KC046K851R');
          `}
        </Script>
      </body>
    </html>
  );
}
