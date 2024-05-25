'use client'

import React from "react";
import Badge from "@/shared/Badge";
import FAQAccordion from "@/app/faq/Faq";

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
                        Preguntas frecuentes
                    </h1>
                    <span className="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1 text-justify">
                     En esta sección, respondemos a las preguntas más comunes sobre el alquiler de nuestros apartamentos
                     vacacionales. Desde cómo hacer una reserva hasta políticas de cancelación y consejos para
                     disfrutar al máximo tu estancia.
                    </span>
                    <FAQAccordion/>
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
