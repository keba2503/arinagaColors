'use client';

import ListingImageGallery from '@/components/listing-image-gallery/ListingImageGallery';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { ReactNode, Suspense } from 'react';
import MobileFooterSticky from './(components)/MobileFooterSticky';
import { imageGallery as listingStayImageGallery } from './listing-stay-detail/constant';
import { imageGallery as listingYellowImageGallery } from './yellow/constant';
import { imageGallery as listingBlueImageGallery } from './blue/constant';
import { imageGallery as listingWhiteImageGallery } from './white/constant';
import { Route } from 'next';

const DetailLayoutContent = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const thisPathname = usePathname();
  const searchParams = useSearchParams();
  const modal = searchParams?.get('modal');

  const handleCloseModalImageGallery = () => {
    let params = new URLSearchParams(document.location.search);
    params.delete('modal');
    router.push(`${thisPathname}/?${params.toString()}` as Route);
  };

  const getImageGalleryListing = () => {
    if (thisPathname?.includes('/listing-stay-detail')) {
      return listingStayImageGallery;
    }
    if (thisPathname?.includes('/yellow')) {
      return listingYellowImageGallery;
    }
    if (thisPathname?.includes('/blue')) {
      return listingBlueImageGallery;
    }
    if (thisPathname?.includes('/white')) {
      return listingWhiteImageGallery;
    }

    return [];
  };

  return (
    <div className="ListingDetailPage">
      <ListingImageGallery
        isShowModal={modal === 'PHOTO_TOUR_SCROLLABLE'}
        onClose={handleCloseModalImageGallery}
        images={getImageGalleryListing()}
      />

      <div className="container ListingDetailPage__content">{children}</div>

      <div className="container py-24 lg:py-32">
        {/* Other sections can be added here */}
      </div>
      <MobileFooterSticky />
    </div>
  );
};

const DetailtLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailLayoutContent>{children}</DetailLayoutContent>
    </Suspense>
  );
};

export default DetailtLayout;
