'use client';

import React, { useEffect, useState, useContext } from 'react';
import Image from 'next/image';
import Badge from '@/shared/Badge';
import parse from 'html-react-parser';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { LanguageContext } from '@/context/LanguageContext';
import { translateText } from '@/utils/translate'; // Ajusta según la ruta de tu función de traducción

export interface SectionOurFeaturesProps {
  className?: string;
  type?: 'type1' | 'type2';
}

interface ApiResponse {
  scope_id: number;
  title: string;
  subtitle: string;
  description: string;
  additional_text: string;
}

interface ImageResponse {
  id: string;
  url: string;
}

const SectionOurFeatures: React.FC<SectionOurFeaturesProps> = ({
  className = 'lg:py-14',
  type = 'type1',
}) => {
  const [features, setFeatures] = useState<ApiResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [rightImgUrl, setRightImgUrl] = useState<string>('');
  const [translatedBenefits, setTranslatedBenefits] = useState<string>('');

  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('LanguageContext must be used within a LanguageProvider');
  }

  const { language } = context;

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch('/api/config');
        const configData = await response.json();

        const filteredFeatures = configData.filter(
          (item: ApiResponse) => item.scope_id === 3,
        );

        // Translate each feature's properties
        const translatedFeatures = await Promise.all(
          filteredFeatures.map(async (feature: ApiResponse) => {
            const translatedTitle = await translateText(
              feature.title,
              language,
            );
            const translatedSubtitle = await translateText(
              feature.subtitle,
              language,
            );
            const translatedDescription = await translateText(
              feature.description,
              language,
            );

            return {
              ...feature,
              title: translatedTitle,
              subtitle: translatedSubtitle,
              description: translatedDescription,
            };
          }),
        );

        setFeatures(translatedFeatures);

        const imageConfig = configData.find(
          (item: ApiResponse) => item.scope_id === 15,
        );

        if (imageConfig) {
          const subtitle = imageConfig.subtitle;

          const imageResponse = await fetch('/api/cloudinaryourFeatures');
          const imageData = await imageResponse.json();

          const rightImage = imageData.find(
            (img: ImageResponse) => img.id === subtitle,
          );

          if (rightImage) {
            setRightImgUrl(rightImage.url);
          }
        }

        // Translate the "BENEFICIOS" text
        const translatedBenefitsText = await translateText(
          'BENEFICIOS DE RESERVAR CON ARINAGA COLORS',
          language,
        );
        setTranslatedBenefits(translatedBenefitsText);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchConfig();
  }, [language]);

  if (loading) {
    return (
      <div
        className={`nc-SectionOurFeatures relative flex flex-col items-center ${
          type === 'type1' ? 'lg:flex-row' : 'lg:flex-row-reverse'
        } ${className}`}
        data-nc-id="SectionOurFeatures"
      >
        <div className="flex-grow">
          <Skeleton height={500} width={500} />
        </div>
        <div
          className={`max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 ${
            type === 'type1' ? 'lg:pl-16' : 'lg:pr-16'
          }`}
        >
          <span className="uppercase text-sm text-gray-400 tracking-widest">
            {translatedBenefits || 'BENEFICIOS'}
          </span>
          <ul className="space-y-10 mt-16">
            {[...Array(3)].map((_, index) => (
              <li key={index} className="space-y-4">
                <Skeleton height={30} width={200} />
                <Skeleton height={20} count={3} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`nc-SectionOurFeatures relative flex flex-col items-center ${
        type === 'type1' ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } ${className}`}
      data-nc-id="SectionOurFeatures"
    >
      <div className="flex-grow">
        {rightImgUrl && (
          <Image src={rightImgUrl} alt="" width={500} height={500} />
        )}
      </div>
      <div
        className={`max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 ${
          type === 'type1' ? 'lg:pl-16' : 'lg:pr-16'
        }`}
      >
        <h1 className="uppercase text-sm text-gray-400 tracking-widest">
          {translatedBenefits || 'BENEFICIOS'}
        </h1>
        <ul className="space-y-10 mt-16">
          {features.map((feature: ApiResponse, index) => (
            <li key={index} className="space-y-4">
              <Badge name={feature.title} />
              <span className="block text-xl font-semibold text-gray-dark">
                {parse(feature.subtitle)}
              </span>
              <span className="text-justify block mt-5 text-neutral-500 dark:text-neutral-400">
                {parse(feature.description)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SectionOurFeatures;
