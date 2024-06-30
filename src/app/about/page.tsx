'use client';

import React, { FC, useEffect, useState } from 'react';
import rightImg from '@/images/about-hero-right.png';
import SectionHero from './SectionHero';
import BgGlassmorphism from '@/components/BgGlassmorphism';
import parse from 'html-react-parser';

export interface PageAboutProps {}

interface ApiResponse {
  scope_id: number;
  title: string;
  description: string;
  additional_text: string;
}

const PageAbout: FC<PageAboutProps> = ({}) => {
  const [data, setData] = useState<ApiResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/config')
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data.filter(
          (item: ApiResponse) => item.scope_id === 8,
        );
        setData(filteredData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`nc-PageAbout overflow-hidden relative`}>
      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />
      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        {data.map((item, index) => (
          <div key={index} className="mb-8">
            {' '}
            {/* Añadir margen inferior para separarlos */}
            <SectionHero
              rightImg={rightImg}
              heading={parse(item.title)}
              btnText=""
              subHeading={parse(item.description)}
            />
            <div className="text-justify text-base text-neutral-500 md:text-lg dark:text-neutral-400 pt-4">
              {' '}
              {/* Cambiar pb-1 a pt-4 para añadir padding superior */}
              {item.additional_text.split('\n').map((paragraph, idx) => (
                <span key={idx} className="block mt-4">
                  {parse(paragraph)}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageAbout;
