// pages/index.tsx
import React from 'react';
import ServiceGallery from '@/app/service/ServiceGallery';
import SectionSubscribe2 from '@/components/sections/SectionSubscribe2';

const Home: React.FC = () => {
  return (
    <>
      <div className="min-h-screen flex  justify-center">
        <ServiceGallery />
      </div>
    </>
  );
};

export default Home;
