'use client';

import React, { useEffect, useState } from 'react';
import rightImgPng from '@/images/our-features.png';
import Image, { StaticImageData } from 'next/image';
import Badge from '@/shared/Badge';
import parse from 'html-react-parser';

export interface SectionOurFeaturesProps {
  className?: string;
  rightImg?: StaticImageData;
  type?: 'type1' | 'type2';
}

interface ApiResponse {
  scope_id: number;
  title: string;
  subtitle: string;
  description: string;
  additional_text: string;
}

const SectionOurFeatures: React.FC<SectionOurFeaturesProps> = ({
  className = 'lg:py-14',
  rightImg = rightImgPng,
  type = 'type1',
}) => {
  const [features, setFeatures] = useState<ApiResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/config')
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data.filter(
          (item: ApiResponse) => item.scope_id === 3,
        );
        setFeatures(filteredData);
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
    <div
      className={`nc-SectionOurFeatures relative flex flex-col items-center ${
        type === 'type1' ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } ${className}`}
      data-nc-id="SectionOurFeatures"
    >
      <div className="flex-grow">
        <Image src={rightImg} alt="" />
      </div>
      <div
        className={`max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 ${
          type === 'type1' ? 'lg:pl-16' : 'lg:pr-16'
        }`}
      >
        <span className="uppercase text-sm text-gray-400 tracking-widest">
          BENEFICIOS
        </span>
        <ul className="space-y-10 mt-16">
          {features.map((feature, index) => (
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
