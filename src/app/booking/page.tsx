"use client";

import React, {FC} from "react";
import SectionGridFeaturePlaces from "@/components/SectionGridFeaturePlaces";
import HeroSearchForm from "@/app/(client-components)/(HeroSearchForm)/HeroSearchForm";

export interface BookingPageProps {
    className?: string;
}

const Booking: FC<BookingPageProps> = ({className = ""}) => {

    return (
        <main className="nc-PageHome relative overflow-hidden">
            <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
                {/* SECTION HERO */}
                <div className={`nc-SectionHero flex flex-col-reverse lg:flex-col relative ${className}`}>
                    <div className="flex flex-col lg:flex-row lg:items-center">
                        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
                        </div>
                    </div>
                    <div className="hidden lg:block z-10 mb-12 lg:mb-0 lg:-mt-40 w-full">
                        <HeroSearchForm/>
                    </div>
                </div>
                <SectionGridFeaturePlaces cardType="card2"/>
            </div>
        </main>
    );
};

export default Booking;
