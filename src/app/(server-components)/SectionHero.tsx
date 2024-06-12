import React from "react";
import HeroSearchForm from "../(client-components)/(HeroSearchForm)/HeroSearchForm";
import Carrousel from "@/app/(client-components)/(Carrousel)/Carrousel";

const SectionHero: React.FC = () => {
    return (
        <div className="relative w-full h-screen">
            <Carrousel />
            <div className="absolute inset-x-0 bottom-0 flex justify-center z-10 pb-32">
                <HeroSearchForm />
            </div>
        </div>
    );
};

export default SectionHero;