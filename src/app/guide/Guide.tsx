'use client';

import React, { useEffect, useState, useContext } from 'react';
import parse from 'html-react-parser';
import { LanguageContext } from '@/context/LanguageContext';
import { translateText } from '@/utils/translate';

interface Guide {
  title: string;
  description: string;
}

const GuideAccordion: React.FC = () => {
  const [guides, setGuides] = useState<Guide[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('LanguageContext must be used within a LanguageProvider');
  }

  const { language } = context;
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const fetchGuides = async () => {
      try {
        const response = await fetch('/api/guide');
        if (response.ok) {
          const data: Guide[] = await response.json();

          // Traducir el título y la descripción de cada guía
          const translatedGuides = await Promise.all(
            data.map(async (guide) => ({
              title: await translateText(guide.title, language),
              description: await translateText(guide.description, language),
            })),
          );

          setGuides(translatedGuides);
        } else {
          console.error('Error fetching guides:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching guides:', error);
      }
    };

    fetchGuides();
  }, [language]);

  return (
    <div className="w-full max-w-6xl mx-auto pt-12 p-6">
      {guides.map((guide, index) => (
        <div key={index} className="mb-4 border-b">
          <button
            className="text-neutral-800 w-full text-left flex justify-between items-center p-4 focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <span>{guide.title}</span>
            <svg
              className={`w-6 h-6 transform transition-transform ${
                activeIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {activeIndex === index && (
            <div className="text-neutral-500 dark:text-neutral-300 pb-3 text-justify p-4">
              <div className="custom-html-styles">
                {parse(guide.description)}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default GuideAccordion;
