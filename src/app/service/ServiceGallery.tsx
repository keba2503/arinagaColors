'use client';

import React, { useEffect, useState, useContext } from 'react';
import ServiceCard from '@/app/service/Service';
import Heading from '@/shared/Heading';
import parse from 'html-react-parser';
import { LanguageContext } from '@/context/LanguageContext';
import { translateText } from '@/utils/translate';

interface ApiResponse {
  scope_id: number;
  title: string;
  description: string;
  subtitle: string | null;
}

interface ImageResponse {
  id: string;
  url: string;
}

const ServiceGallery: React.FC = () => {
  const [data, setData] = useState<ApiResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [header, setHeader] = useState<{
    title: string;
    description: string;
  } | null>(null);
  const [images, setImages] = useState<ImageResponse[]>([]);
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('LanguageContext must be used within a LanguageProvider');
  }

  const { language } = context;

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch('/api/config');
        const configData: ApiResponse[] = await response.json();

        const filteredServices = await Promise.all(
          configData
            .filter((item) => item.scope_id === 11)
            .map(async (item) => ({
              scope_id: item.scope_id,
              title: await translateText(item.title, language),
              description: await translateText(item.description, language),
              subtitle: item.subtitle,
            })),
        );

        const headerData = configData.find((item) => item.scope_id === 7);

        setHeader(
          headerData
            ? {
                title: await translateText(headerData.title, language),
                description: await translateText(
                  headerData.description,
                  language,
                ),
              }
            : null,
        );
        setData(filteredServices as ApiResponse[]);
      } catch (error) {
        console.error('Error fetching config data:', error);
      }
    };

    const fetchImages = async () => {
      try {
        const response = await fetch('/api/cloudinaryService');
        const imageData = await response.json();
        setImages(imageData);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchConfig();
    fetchImages();
    setLoading(false);
  }, [language]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const getImageUrl = (subtitle: string | null) => {
    if (!subtitle) return '';
    const image = images.find((img) =>
      img.id.toLowerCase().includes(subtitle.toLowerCase()),
    );
    return image ? image.url : '';
  };

  return (
    <div className="relative py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      {header && (
        <Heading className="pb-20" desc={parse(header.description)}>
          ⛱ {parse(header.title)}
        </Heading>
      )}
      <div className="mt-6 flex flex-col sm:flex-row flex-wrap items-center justify-center">
        {data.map((service, index) => (
          <div key={index} className="mb-6 sm:mb-6 sm:mx-3">
            <ServiceCard
              title={service.title}
              description={parse(service.description)}
              imageUrl={getImageUrl(service.subtitle)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceGallery;
