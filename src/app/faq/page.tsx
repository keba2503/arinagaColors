'use client';

import React, { useEffect, useState, useContext } from 'react';
import FAQAccordion from '@/app/faq/Faq';
import parse from 'html-react-parser';
import { LanguageContext } from '@/context/LanguageContext';
import { translateText } from '@/utils/translate';

interface ApiResponse {
  scope_id: number;
  title: string;
  description: string;
  additional_text: string;
}

const Page = () => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('LanguageContext must be used within a LanguageProvider');
  }

  const { language } = context;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/config');
        const configData = await response.json();
        const filteredData = configData.find(
          (item: ApiResponse) => item.scope_id === 10,
        );

        if (filteredData) {
          // Traducir los textos dinámicos obtenidos de la API
          const translatedTitle = await translateText(
            filteredData.title,
            language,
          );
          const translatedDescription = await translateText(
            filteredData.description,
            language,
          );

          setData({
            ...filteredData,
            title: translatedTitle,
            description: translatedDescription,
          });
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [language]); // Dependencia del idioma

  const renderHeader = () => {
    if (!data) return null;

    return (
      <header className="container rounded-3xl px-4 lg:px-8">
        <div className="max-w-screen-lg mx-auto space-y-5">
          <h1
            className="text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-4xl dark:text-neutral-100 max-w-4xl"
            title={data.title}
          >
            {parse(data.title)}
          </h1>
          <span className="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pt-4 text-justify">
            {parse(data.description)}
          </span>
          <FAQAccordion />
        </div>
      </header>
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div className="nc-PageSingle pt-8 lg:pt-16">{renderHeader()}</div>;
};

export default Page;
