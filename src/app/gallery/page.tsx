"use client";

import React from "react";
import Image from "next/image";
import FAQAccordion from "@/app/faq/Faq";
import SectionSubscribe2 from "@/components/SectionSubscribe2";

const FeaturedImageGallery: React.FC = () => {
    const data = [
        {
            imgelink:
                "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
            imgelink:
                "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        },
        {
            imgelink:
                "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
        },
        {
            imgelink:
                "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
        },
        {
            imgelink:
                "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
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
            <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
                <SectionSubscribe2 />
            </div>
        </>
    );
};

export default FeaturedImageGallery;
