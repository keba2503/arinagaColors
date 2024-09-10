'use client';

import React, { FC, useContext, useEffect, useState } from 'react';
import {
  CurrencyEuroIcon,
  CalendarDaysIcon,
  ReceiptPercentIcon,
  XCircleIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline';
import VectorImg from '@/images/VectorHIW.svg';
import Image from 'next/image';
import Heading from '@/shared/Heading';
import { TagIcon } from '@heroicons/react/24/solid';
import { LanguageContext } from '@/context/LanguageContext';
import { translateText } from '@/utils/translate';

export interface SectionHowItWorkProps {
  className?: string;
  data?: {
    id: number;
    title: string;
    desc: string;
    Icon: FC;
  }[];
}

const CombinedIcon: FC = () => (
  <div className="relative w-24 h-24 text-gray-600">
    <CalendarDaysIcon className="absolute w-20 h-20" />
    <TagIcon className="absolute w-14 h-14 top-1 right-[-11px]" />
    <ReceiptPercentIcon className="absolute w-6 h-6 top-5 right-1 transform rotate-[-46deg] text-white" />
  </div>
);

const CancelIcon: FC = () => (
  <div className="relative w-24 h-24 text-gray-600">
    <CalendarIcon className="absolute w-20 h-20" />
    <XCircleIcon className="absolute w-10 h-10 top-1/2 left-10 transform -translate-x-1/2 -translate-y-4" />
  </div>
);

const DEMO_DATA: SectionHowItWorkProps['data'] = [
  {
    id: 1,
    Icon: CombinedIcon,
    title: 'Ofertas exclusivas en reservas',
    desc: 'Disfruta de las mejores ofertas al reservar con nosotros.',
  },
  {
    id: 2,
    Icon: CurrencyEuroIcon,
    title: 'Mejor precio online',
    desc: 'Garantizamos los precios más bajos.',
  },
  {
    id: 3,
    Icon: CancelIcon,
    title: 'Política de cancelación flexible',
    desc: 'Cancelación sin complicaciones.',
  },
];

const SectionHowItWork: FC<SectionHowItWorkProps> = ({
  className = '',
  data = DEMO_DATA,
}) => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('LanguageContext must be used within a LanguageProvider');
  }

  const { language } = context;
  const [translatedData, setTranslatedData] = useState(data);
  const [translatedHeading, setTranslatedHeading] = useState(
    '¿Por qué reservar en Arinaga Colors?',
  );
  const [translatedDesc, setTranslatedDesc] = useState(
    'Relájate y disfruta de la estadía',
  );

  useEffect(() => {
    const translateData = async () => {
      const newData = await Promise.all(
        data.map(async (item) => {
          const translatedTitle = await translateText(item.title, language);
          const translatedDesc = await translateText(item.desc, language);
          return {
            ...item,
            title: translatedTitle,
            desc: translatedDesc,
          };
        }),
      );

      const translatedHeadingText = await translateText(
        '¿Por qué reservar en Arinaga Colors?',
        language,
      );
      const translatedDescText = await translateText(
        'Relájate y disfruta de la estadía',
        language,
      );

      setTranslatedData(newData);
      setTranslatedHeading(translatedHeadingText);
      setTranslatedDesc(translatedDescText);
    };

    translateData();
  }, [language, data]);

  return (
    <div
      className={`nc-SectionHowItWork ${className}`}
      data-nc-id="SectionHowItWork"
    >
      <Heading
        isCenter
        desc={translatedDesc}
        className="text-lg leading-tight tracking-tight"
      >
        {translatedHeading}
      </Heading>

      <div className="mt-20 relative grid md:grid-cols-3 gap-20">
        <Image
          className="hidden md:block absolute inset-x-0 top-10"
          src={VectorImg}
          alt=""
        />
        {translatedData.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col items-center max-w-xs mx-auto"
          >
            <div className="mb-8 w-24 h-24 text-gray-600">
              <item.Icon />
            </div>
            <div className="text-center mt-auto">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
                {item.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionHowItWork;
