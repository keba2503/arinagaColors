'use client';

import React, { useEffect, useState, useContext } from 'react';
import Image from 'next/image';
import parse, { domToReact } from 'html-react-parser';
import PropTypes from 'prop-types';
import { LanguageContext } from '@/context/LanguageContext';
import { translateText } from '@/utils/translate';

const SkeletonCard = () => (
  <div className="bg-white shadow-md p-6 rounded-2xl animate-pulse">
    <div className="w-32 h-32 mx-auto bg-gray-200 rounded"></div>
    <h3 className="text-xl font-bold mt-4 text-center bg-gray-200 rounded w-3/4 mx-auto"></h3>
    <p className="mt-2 text-gray-600 text-justify bg-gray-200 rounded w-full h-24 mx-auto"></p>
  </div>
);

const SkeletonBanner = () => (
  <div className="relative w-full h-96 bg-gray-200 animate-pulse">
    <div className="absolute bottom-5 left-5 bg-opacity-50 p-4 text-white rounded-2xl w-1/2">
      <div className="w-full h-12 bg-gray-300 rounded mb-4"></div>
      <div className="w-full h-24 bg-gray-300 rounded"></div>
    </div>
  </div>
);

const Card = ({ imgSrc, title, text }) => (
  <div className="bg-white shadow-md p-6 rounded-2xl">
    <Image
      src={imgSrc}
      alt={title}
      width={128}
      height={128}
      className="w-32 h-32 mx-auto"
    />
    <h3 className="text-xl font-bold mt-4 text-center">{title}</h3>
    <p className="mt-2 text-gray-600 text-justify">{text}</p>
  </div>
);

Card.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.node.isRequired,
};

const SustainabilitySection = () => {
  const [cardsData, setCardsData] = useState([]);
  const [bannerData, setBannerData] = useState({});
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
        const data = await response.json();

        const banner = data.find((item) => item.scope_id === 16);
        const cards = data.filter((item) => item.scope_id === 17);

        if (banner) {
          const bannerImageUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${banner.subtitle}.webp`;
          const translatedBannerTitle = await translateText(
            banner.title,
            language,
          );
          const translatedBannerDescription = await translateText(
            banner.description,
            language,
          );

          setBannerData({
            ...banner,
            title: translatedBannerTitle,
            description: translatedBannerDescription,
            bannerImageUrl,
          });
        }

        const parsedCards = await Promise.all(
          cards.map(async (card) => ({
            ...card,
            title: await translateText(card.title, language),
            description: parse(
              await translateText(card.description, language),
              {
                replace: (domNode) => {
                  if (domNode.name === 'p') {
                    return (
                      <p className="text-justify">
                        {domToReact(domNode.children)}
                      </p>
                    );
                  }
                },
              },
            ),
            imageUrl: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${card.subtitle}.webp`,
          })),
        );

        setCardsData(parsedCards);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [language]);

  if (loading) {
    return (
      <div className="mt-8 mb-8">
        <SkeletonBanner />
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mb-8">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 mb-8">
      <div className="relative w-full h-96 overflow-hidden">
        <Image
          src={bannerData.bannerImageUrl}
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute bottom-5 left-5 bg-black bg-opacity-50 p-4 text-white rounded-2xl w-1/2">
          <h2 className="text-3xl md:text-4xl">{parse(bannerData.title)}</h2>
          <p className="mt-2 text-base md:text-lg">
            {parse(bannerData.description)}
          </p>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mb-8">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            imgSrc={card.imageUrl}
            title={card.title}
            text={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default SustainabilitySection;
