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
              Situadas en el encantador paseo marítimo de Arinaga y rodeadas de una gran variedad de restaurantes y bares. Disfruta cada día de la exquisita gastronomía local y momentos inolvidables junto al mar.
            </span>
            </li>
            <li className="space-y-4 bg-blue-border">
              <Badge name="Estancia Acogedora" />
              <span className="block text-xl font-semibold text-gray-dark">
              Experiencia inolvidable
            </span>
              <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Nuestras viviendas vacacionales en la Playa de Arinaga te ofrecen impresionantes vistas al mar y encantadoras terrazas o balcones. Relájate y vive momentos inolvidables en un entorno idílico.
            </span>
            </li>
            <li className="space-y-4 bg-yellow-border">
              <Badge name="Equipamiento Completo" />
              <span className="block text-xl font-semibold text-gray-dark">
              Comodidad Garantizada
            </span>
              <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Nuestras viviendas están completamente equipadas: te ofrecen todo lo que necesitas para una estancia perfecta: lavadora, Internet de alta velocidad y más.
            </span>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default SectionOurFeatures;
