'use client';

import React, { useEffect } from 'react';
import HeroSearchForm from '../(client-components)/(HeroSearchForm)/HeroSearchForm';
import Carrousel from '@/app/(client-components)/(Carrousel)/Carrousel';

const SectionHero: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://www.eltiempo.es/widget/widget_loader/ee0371e1974d1cf28afb74b3d19d9c06';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="relative w-full h-screen">
      <Carrousel />
      <div
        className="absolute top-0 left-0 m-4 z-10"
        style={{ width: '320px', height: '150px' }}
      >
        <div id="c_ee0371e1974d1cf28afb74b3d19d9c06" className="mini"></div>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex justify-center z-10 pb-32">
        <HeroSearchForm />
      </div>
    </div>
  );
};

export default SectionHero;
