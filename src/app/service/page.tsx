import React from 'react';
import ServiceGallery from '@/app/service/ServiceGallery';

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
