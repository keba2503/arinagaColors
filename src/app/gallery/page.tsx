"use client";

import React from "react";
import Image from "next/image";
import FAQAccordion from "@/app/faq/Faq";
import SectionSubscribe2 from "@/components/SectionSubscribe2";

const FeaturedImageGallery: React.FC = () => {
    const data = [
        {
            imgelink:
                "https://images.pexels.com/photos/428353/pexels-photo-428353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            imgelink:
                "https://images.pexels.com/photos/2397653/pexels-photo-2397653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            imgelink:
                "https://images.pexels.com/photos/1049298/pexels-photo-1049298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            imgelink:
                "https://images.pexels.com/photos/1002812/pexels-photo-1002812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            imgelink:
                "https://images.pexels.com/photos/1142948/pexels-photo-1142948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }
    ];

    const [active, setActive] = React.useState(data[0].imgelink);

    return (
        <>
            <div className="max-w-screen-lg mx-auto space-y-5 pt-10 text-center">
                <h1
                    className="text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-4xl dark:text-neutral-100 max-w-4xl"
                    title="Preguntas frecuentes sobre el alquiler de apartamentos vacacionales"
                >
                    Nuestra Galería
                </h1>
            </div>
            <div className="w-full max-w-6xl mx-auto pt-12 p-6 pb-20">
                <div className="mb-4">
                    <Image
                        className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
                        src={active}
                        alt="Active gallery image"
                        width={1200}
                        height={800}
                    />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                    {data.map(({ imgelink }, index) => (
                        <div key={index}>
                            <Image
                                onClick={() => setActive(imgelink)}
                                src={imgelink}
                                className={`h-22 w-full cursor-pointer rounded-lg object-cover object-center transition-transform duration-200 ${
                                    active === imgelink ? 'ring-4 ring-blue-500 transform scale-105 p-2' : ''
                                }`}
                                alt="Gallery thumbnail"
                                width={240}
                                height={160}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default FeaturedImageGallery;
