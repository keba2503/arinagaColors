'use client';

import React from 'react';
import Promotions from '@/app/offer/Promotion';

const Page = () => {
  const renderHeader = () => {
    return (
      <header className="container rounded-3xl px-4 lg:px-8">
        <div className="max-w-screen-lg mx-auto space-y-5"></div>
        <Promotions />
      </header>
    );
  };

  return <div className="nc-PageSingle pt-8 lg:pt-16">{renderHeader()}</div>;
};

export default Page;
