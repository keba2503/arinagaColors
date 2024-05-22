import React, { FC } from "react";
import imagePng from "@/images/hero-right.jpg";
import HeroSearchForm from "../(client-components)/(HeroSearchForm)/HeroSearchForm";
import Image from "next/image";
import ButtonPrimary from "@/shared/ButtonPrimary";

export interface SectionHeroProps {
  className?: string;
}

const SectionHero: FC<SectionHeroProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionHero flex flex-col-reverse lg:flex-col relative ${className}`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl !leading-[114%] ">
           Arinaga Colors
          </h2>
          <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400 text-justify">
      Bienvenido a Arinaga Colors. Disfruta de una estancia inolvidable en nuestros
      apartamentos situados en la hermosa Playa Arinaga, Gran Canaria. Vive una experiencia única
      con acceso directo a la playa y cerca de las mejores atracciones de la isla.
    </span>
          <ButtonPrimary href="/listing-stay-map" sizeClass="px-5 py-4 sm:px-7">
            Reserva Ahora
          </ButtonPrimary>
        </div>
        <div className="flex-grow">
          <Image className="w-full" src={imagePng} alt="Apartamentos en Playa Arinaga" priority />
        </div>
      </div>


      <div className="hidden lg:block z-10 mb-12 lg:mb-0 lg:-mt-40 w-full">
        <HeroSearchForm />
      </div>
    </div>
  );
};

export default SectionHero;
