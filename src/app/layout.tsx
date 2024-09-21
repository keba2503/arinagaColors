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
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Apartamentos Vacacionales en Playa de Arinaga - Reserva Online',
  description:
    'Alquila apartamentos vacacionales en Playa de Arinaga, Gran Canaria. Disfruta de la playa y reserva online fácilmente con Arinaga Colors.',
  keywords:
    'apartamentos vacacionales, Playa de Arinaga, Gran Canaria, alquiler, reserva online, vacaciones, alojamiento en Gran Canaria',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <Head>
        {/* Metaetiquetas Open Graph */}
        <meta
          property="og:title"
          content="Apartamentos Vacacionales en Playa de Arinaga - Reserva Online"
        />
        <meta
          property="og:description"
          content="Alquila apartamentos vacacionales en Playa de Arinaga, Gran Canaria. Disfruta de la playa y reserva online fácilmente con Arinaga Colors."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.arinagacolors.com/images/arinagacolors.png"
        />
        <meta property="og:url" content="https://www.arinagacolors.com" />
        <meta property="og:site_name" content="Arinaga Colors" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LodgingBusiness',
              name: 'Arinaga Colors',
              description:
                'Apartamentos vacacionales en Playa de Arinaga, Gran Canaria. Reserva online de manera fácil y rápida.',
              image:
                'https://www.arinagacolors.com/images/imagen-destacada.jpg',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Calle Principal',
                addressLocality: 'Playa de Arinaga',
                addressRegion: 'Gran Canaria',
                postalCode: '35118',
                addressCountry: 'ES',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '27.8776',
                longitude: '-15.3964',
              },
              url: 'https://www.arinagacolors.com',
              telephone: '+34 123 456 789',
              priceRange: '$$',
              currenciesAccepted: 'EUR',
              paymentAccepted: 'Cash, Credit Card',
              openingHours: 'Mo-Su 08:00-22:00',
            }),
          }}
        />
      </Head>
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
