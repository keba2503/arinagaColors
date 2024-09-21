'use client';

import React, { FC, ReactNode, useContext, useEffect, useState } from 'react';
import { DEMO_STAY_LISTINGS } from '@/data/listings';
import { StayDataType } from '@/data/types';
import StayCard from '../cards/StayCard';
import StayCard2 from '../cards/StayCard2';
import { LanguageContext } from '@/context/LanguageContext';
import { translateText } from '@/utils/translate';

// OTHER DEMO WILL PASS PROPS
const DEMO_DATA: StayDataType[] = DEMO_STAY_LISTINGS.filter((_, i) => i < 8);

export interface SectionGridFeaturePlacesProps {
  stayListings?: StayDataType[];
  gridClass?: string;
  heading?: ReactNode;
  subHeading?: ReactNode;
  headingIsCenter?: boolean;
  tabs?: string[];
  cardType?: 'card1' | 'card2';
}

const SectionGridFeaturePlaces: FC<SectionGridFeaturePlacesProps> = ({
  stayListings = DEMO_DATA,
  gridClass = '',
  heading = 'Apartamentos en Playa de Arinaga',
  subHeading = 'Descansa y disfruta junto al mar.',
  cardType = 'card2',
}) => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('LanguageContext must be used within a LanguageProvider');
  }

  const { language } = context;
  const [translatedHeading, setTranslatedHeading] = useState<string>(
    heading as string,
  );
  const [translatedSubHeading, setTranslatedSubHeading] = useState<string>(
    subHeading as string,
  );
  const [translatedStayListings, setTranslatedStayListings] =
    useState<StayDataType[]>(stayListings);

  useEffect(() => {
    const translateContent = async () => {
      try {
        const headingTranslation = await translateText(
          heading as string,
          language,
        );
        const subHeadingTranslation = await translateText(
          subHeading as string,
          language,
        );

        // Translate each stay's properties
        const translatedListings = await Promise.all(
          stayListings.map(async (stay) => {
            const translatedDescription = await translateText(
              stay.description,
              language,
            );

            return {
              ...stay,
              title: stay.title,
              description: translatedDescription,
            };
          }),
        );

        setTranslatedHeading(headingTranslation);
        setTranslatedSubHeading(subHeadingTranslation);
        setTranslatedStayListings(translatedListings);
      } catch (error) {
        console.error('Error translating text:', error);
      }
    };

    translateContent();
  }, [language, heading, subHeading, stayListings]);

  const renderCard = (stay: StayDataType) => {
    let CardName = StayCard;
    switch (cardType) {
      case 'card1':
        CardName = StayCard;
        break;
      case 'card2':
        CardName = StayCard2;
        break;
      default:
        CardName = StayCard;
    }

    return <CardName key={stay.id} data={stay} />;
  };

  return (
    <div className="nc-SectionGridFeaturePlaces relative">
      <h1 className="text-3xl md:text-4xl font-semibold">
        {translatedHeading}
      </h1>
      <span className="block mt-2 md:mt-3 font-normal text-base sm:text-lg text-neutral-500 dark:text-neutral-40 pb-8">
        {translatedSubHeading}
      </span>
      <div
        className={`grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ${gridClass}`}
      >
        {translatedStayListings.map((stay) => renderCard(stay))}
      </div>
    </div>
  );
};

export default SectionGridFeaturePlaces;
