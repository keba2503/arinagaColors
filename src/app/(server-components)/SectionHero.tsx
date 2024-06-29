'use client'

import React, { useEffect } from "react";
import HeroSearchForm from "../(client-components)/(HeroSearchForm)/HeroSearchForm";
import Carrousel from "@/app/(client-components)/(Carrousel)/Carrousel";

const SectionHero: React.FC = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://weatherwidget.io/js/widget.min.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div className="relative w-full h-screen">
            <Carrousel />
            <div className="absolute top-0 left-0 m-4 z-10">
                <a
                    className="weatherwidget-io"
                    href="https://forecast7.com/es/27d86n15d39/arinaga/"
                    data-label_1="Playa de Arinaga"
                    data-label_2=""
                    data-icons="Climacons Animated"
                    data-mode="Current"
                    data-days="3"
                    data-theme="original"
                    data-basecolor=""
                    data-cloudfill="rgba(31, 86, 124, 0.68)"
                    style={{
                        display: "block",
                        width: "320px",
                        height: "150px",
                    }}
                >
                    Playa Arinaga
                </a>
            </div>
            <div className="absolute inset-x-0 bottom-0 flex justify-center z-10 pb-32">
                <HeroSearchForm />
            </div>
        </div>
    );
};

export default SectionHero;
