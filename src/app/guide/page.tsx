'use client'

import React from "react";
import GuideAccordion from "@/app/guide/Guide";

const Page = ({params, searchParams,}:
                  {
                      params: { stepIndex: string };
                      searchParams?: { [key: string]: string | string[] | undefined };
                  }) => {
    const renderHeader = () => {
        return (
            <header className="container rounded-3xl px-4 lg:px-8">
                <div className="max-w-screen-lg mx-auto space-y-5">
                    <h1
                        className="text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-4xl dark:text-neutral-100 max-w-4xl"
                        title="Preguntas frecuentes sobre el alquiler de apartamentos vacacionales"
                    >
                       Guía del huesped
                    </h1>
                    <span className="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1 text-justify">
                        Bienvenido a nuestra guía de usuario. Aquí encontrarás toda
                        la información necesaria para aprovechar al máximo tu estancia en nuestros apartamentos
                        vacacionales. Esta guía incluye instrucciones detalladas sobre diversos aspectos del uso y cuidado del apartamento.
                    </span>
                    <GuideAccordion/>
                </div>
            </header>
        );
    };

    return (
        <div className="nc-PageSingle pt-8 lg:pt-16">
            {renderHeader()}
        </div>

    );
};

export default Page;
