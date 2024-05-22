import React, { FC } from "react";
import rightImgPng from "@/images/our-features.png";
import Image, { StaticImageData } from "next/image";
import Badge from "@/shared/Badge";

export interface SectionOurFeaturesProps {
  className?: string;
  rightImg?: StaticImageData;
  type?: "type1" | "type2";
}

const SectionOurFeatures: FC<SectionOurFeaturesProps> = ({
  className = "lg:py-14",
  rightImg = rightImgPng,
  type = "type1",
}) => {
  return (
    <div
      className={`nc-SectionOurFeatures relative flex flex-col items-center ${
        type === "type1" ? "lg:flex-row" : "lg:flex-row-reverse"
      } ${className}`}
      data-nc-id="SectionOurFeatures"
    >
      <div className="flex-grow">
        <Image src={rightImg} alt="" />
      </div>
      <div
        className={`max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 ${
          type === "type1" ? "lg:pl-16" : "lg:pr-16"
        }`}
      >
         <span className="uppercase text-sm text-gray-400 tracking-widest">
          BENEFICIOS
        </span>
        <ul className="space-y-10 mt-16">
          <li className="space-y-4 bg-white-border">
            <Badge name="Ubicación Perfecta" />
            <span className="block text-xl font-semibold text-gray-dark">
              Ubicación ideal
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Situados en un encantador paseo junto a la costa de Arinaga, rodeados de una gran variedad de restaurantes y bares.
            </span>
          </li>
          <li className="space-y-4 bg-blue-border">
            <Badge name="Estancia Acogedora" />
            <span className="block text-xl font-semibold text-gray-dark">
              Disfruta de una estancia acogedora
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              En nuestras viviendas vacacionales ubicadas en la Playa de Arinaga, con impresionantes vistas al mar y encantadoras terrazas o balcones.
            </span>
          </li>
          <li className="space-y-4 bg-yellow-border">
            <Badge name="Equipamiento Completo" />
            <span className="block text-xl font-semibold text-gray-dark">
              Todo lo que necesitas
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Nuestras viviendas están completamente equipadas con todas las comodidades modernas, incluyendo lavadora, acceso a Internet de alta velocidad, y más.
            </span>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default SectionOurFeatures;
