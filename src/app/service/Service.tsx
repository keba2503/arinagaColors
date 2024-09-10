'use client';

import React, { ReactNode, useState, useContext, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { LanguageContext } from '@/context/LanguageContext'; // Ajusta la ruta según la ubicación de tu contexto
import { translateText } from '@/utils/translate'; // Ajusta la ruta según tu función de traducción

interface ServiceCardProps {
  title: string;
  description: ReactNode;
  imageUrl: string | StaticImageData;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  const [showDescription, setShowDescription] = useState(false);
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('LanguageContext must be used within a LanguageProvider');
  }

  const { language } = context;
  const [translatedTitle, setTranslatedTitle] = useState<string>(title);
  const [translatedButtonText, setTranslatedButtonText] = useState<string>(
    showDescription ? 'Mostrar menos' : 'Leer más',
  );

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  useEffect(() => {
    const translateContent = async () => {
      const translatedTitle = await translateText(title, language);
      const translatedButton = await translateText(
        showDescription ? 'Mostrar menos' : 'Leer más',
        language,
      );
      setTranslatedTitle(translatedTitle);
      setTranslatedButtonText(translatedButton);
    };

    translateContent();
  }, [language, showDescription]);

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="rounded-t-lg">
        <Image src={imageUrl} alt={translatedTitle} width={600} height={400} />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {translatedTitle}
        </h5>
        <p
          className={`text-justify mb-3 font-normal text-gray-700 dark:text-gray-400 ${
            showDescription ? '' : 'hidden'
          }`}
        >
          {description}
        </p>
        <button
          onClick={toggleDescription}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-[rgb(73,155,200)] hover:bg-[rgb(60,135,175)] focus:ring-4 focus:outline-none focus:ring-[rgba(73,155,200,0.5)]"
        >
          {translatedButtonText}
          <svg
            key="toggle-icon"
            className={`w-3.5 h-3.5 ms-2 ${showDescription ? 'rotate-180' : ''}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
