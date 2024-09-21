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
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'Apartamentos Vacacionales en Playa de Arinaga - Reserva Online',
  description:
    'Alquila apartamentos vacacionales en Playa de Arinaga, Gran Canaria. Disfruta de la playa y reserva online fácilmente con Arinaga Colors.',
  keywords:
    'apartamentos vacacionales, Playa de Arinaga, Gran Canaria, alquiler, reserva online, vacaciones, alojamiento en Gran Canaria',
  openGraph: {
    type: 'website',
    url: 'https://www.arinagacolors.com',
    title: 'Apartamentos Vacacionales en Playa de Arinaga - Reserva Online',
    description:
      'Alquila apartamentos vacacionales en Playa de Arinaga, Gran Canaria. Disfruta de la playa y reserva online fácilmente con Arinaga Colors.',
    siteName: 'Arinaga Colors',
    images: [
      {
        url: 'https://www.arinagacolors.com/images/arinagacolors.png',
        width: 800,
        height: 600,
        alt: 'Imagen representativa de Arinaga Colors',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@arinagaColors',
    title: 'Apartamentos Vacacionales en Playa de Arinaga - Reserva Online',
    description:
      'Alquila apartamentos vacacionales en Playa de Arinaga, Gran Canaria. Disfruta de la playa y reserva online fácilmente con Arinaga Colors.',
    images: ['https://www.arinagacolors.com/images/arinagacolors.png'],
  },

  alternates: {
    canonical: 'https://www.arinagacolors.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-custom text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
        <LanguageProvider>
          <ClientCommons />
          <ClientWrapper>{children}</ClientWrapper>
          <Footer />
        </LanguageProvider>

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
