import React, { FC } from 'react';
import GallerySlider from '@/components/Gallery/GallerySlider';
import { DEMO_STAY_LISTINGS } from '@/data/listings';
import { StayDataType } from '@/data/types';
import Link from 'next/link';

export interface StayCard2Props {
  className?: string;
  data?: StayDataType;
  size?: 'default' | 'small';
}

const DEMO_DATA = DEMO_STAY_LISTINGS[0];

const StayCard2: FC<StayCard2Props> = ({
  size = 'default',
  className = '',
  data = DEMO_DATA,
}) => {
  const { galleryImgs, description, address, title, href, id } = data;

  const renderSliderGallery = () => {
    return (
      <div className="relative w-full">
        <GallerySlider
          uniqueID={`StayCard2_${id}`}
          ratioClass="aspect-w-12 aspect-h-11"
          galleryImgs={galleryImgs}
          imageClass="rounded-lg"
          href={href}
        />
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div className={size === 'default' ? 'mt-3 space-y-3' : 'mt-2 space-y-2'}>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <h2
              className={`font-semibold capitalize text-neutral-900 dark:text-white ${
                size === 'default' ? 'text-base' : 'text-base'
              }`}
            >
              <span className="line-clamp-1">{title}</span>
            </h2>
          </div>
          <div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm space-x-1.5">
            {size === 'default' && (
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            )}
            <span className="">{address}</span>
          </div>
        </div>
        <div className="w-14 border-b border-neutral-100 dark:border-neutral-800"></div>
        <div className="text-sm text-neutral-500 dark:text-neutral-400">
          {description}
        </div>
        <div>
          <Link
            href={href}
            className="inline-block mt-3 px-4 py-2 rounded-md"
            style={{
              backgroundColor: 'rgb(73, 155, 200)',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Ver más
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className={`nc-StayCard2 group relative ${className}`}>
      {renderSliderGallery()}
      <div>{renderContent()}</div>
    </div>
  );
};

export default StayCard2;
