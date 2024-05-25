// pages/index.tsx
import React from 'react';
import ServiceGallery from "@/app/service/ServiceGallery";
import SectionSubscribe2 from "@/components/SectionSubscribe2";

const Home: React.FC = () => {
    return (
        <>
            <div className="min-h-screen flex  justify-center">
                <ServiceGallery />
            </div>
            <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">

                <SectionSubscribe2 />

            </div>
        </>


);
};

export default Home;
