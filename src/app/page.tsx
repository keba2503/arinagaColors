import React from 'react';
import SectionHero from '@/app/(server-components)/SectionHero';
import BgGlassmorphism from '@/components/BgGlassmorphism';
import SectionOurFeatures from '@/components/sections/SectionOurFeatures';
import SectionGridFeaturePlaces from '@/components/sections/SectionGridFeaturePlaces';
import SectionHowItWork from '@/components/sections/SectionHowItWork';

function PageHome() {
  return (
    <main className="nc-PageHome relative overflow-hidden">
      <BgGlassmorphism />
      <div className="relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        <SectionHero />
        <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
          <SectionGridFeaturePlaces cardType="card2" />
          <SectionOurFeatures />
          <SectionHowItWork />
        </div>
      </div>
    </main>
  );
}

export default PageHome;
