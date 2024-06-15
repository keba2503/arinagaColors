import React from "react";
import HeroSearchForm from "../(client-components)/(HeroSearchForm)/HeroSearchForm";
import Carrousel from "@/app/(client-components)/(Carrousel)/Carrousel";

const SectionHero: React.FC = () => {
    return (
        <div className="relative w-full h-screen">
            <Carrousel />
            <div className="absolute top-0 left-0 m-4 z-10">
                <iframe
                    src="https://api.wo-cloud.com/content/widget/?geoObjectKey=59243104&language=es&region=ES&timeFormat=HH:mm&windUnit=kmh&systemOfMeasurement=metric&temperatureUnit=celsius"
                    name="CW2"
                    scrolling="no"
                    width="170"
                    height="100"
                    frameBorder="0"
                    style={{
                        borderRadius: "10px",
                        backgroundColor: "rgba(255, 255, 255, 0.5)",
                        border: "1px solid #10658E",
                    }}
                ></iframe>
            </div>
            <div className="absolute inset-x-0 bottom-0 flex justify-center z-10 pb-32">
                <HeroSearchForm />
            </div>
        </div>
    );
};

export default SectionHero;
