import React from 'react';
import ButtonPrimary from '@/shared/ButtonPrimary';
import Link from 'next/link';

const MobileFooterSticky = () => {
  return (
    <div className="block lg:hidden fixed bottom-0 inset-x-0 py-2 sm:py-3 bg-white dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-6000 z-40">
      <div className="container flex items-center justify-between">
        <div className=""></div>
        <Link href="/booking">
          <ButtonPrimary sizeClass="px-5 sm:px-7 py-3 !rounded-2xl">
            Reservar
          </ButtonPrimary>
        </Link>
      </div>
    </div>
  );
};

export default MobileFooterSticky;
