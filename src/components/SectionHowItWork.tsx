import React, { FC } from "react";
import HIW1img from "@/images/HIW1.png";
import HIW2img from "@/images/HIW2.png";
import HIW3img from "@/images/HIW3.png";
import VectorImg from "@/images/VectorHIW.svg";
import Image, { StaticImageData } from "next/image";
import Heading from "@/shared/Heading";

export interface SectionHowItWorkProps {
  className?: string;
  data?: {
    id: number;
    title: string;
    desc: string;
    img: StaticImageData;
    imgDark?: StaticImageData;
  }[];
}

const DEMO_DATA: SectionHowItWorkProps["data"] = [
  {
    id: 1,
    img: HIW1img,
    title: "Ofertas exclusivas",
    desc: "",
  },
  {
    id: 2,
    img: HIW2img,
    title: "Mejor precio online",
    desc: ""
  },
  {
    id: 3,
    img: HIW3img,
    title: "Política de cancelación flexible",
    desc: "",
  },
];

const SectionHowItWork: FC<SectionHowItWorkProps> = ({
                                                       className = "",
                                                       data = DEMO_DATA,
                                                     }) => {
  return (
      <div
          className={`nc-SectionHowItWork  ${className}`}
          data-nc-id="SectionHowItWork"
      >
        <Heading
            isCenter
            desc="Relájate y disfruta de la estadia"
            className="text-lg leading-tight tracking-tight"
        >
          ¿Por qué reservar en Arinaga Colors?
        </Heading>

        <div className="mt-20 relative grid md:grid-cols-3 gap-20">
          <Image
              className="hidden md:block absolute inset-x-0 top-10"
              src={VectorImg}
              alt=""
          />
          {data.map((item) => (
              <div
                  key={item.id}
                  className="relative flex flex-col items-center max-w-xs mx-auto"
              >
                {item.imgDark ? (
                    <>
                      <Image
                          className="dark:hidden block mb-8 max-w-[180px] mx-auto grayscale"
                          src={item.img}
                          alt=""
                      />
                      <Image
                          alt=""
                          className="hidden dark:block mb-8 max-w-[180px] mx-auto grayscale"
                          src={item.imgDark}
                      />
                    </>
                ) : (
                    <Image
                        alt=""
                        className="mb-8 max-w-[180px] mx-auto grayscale"
                        src={item.img}
                    />
                )}
                <div className="text-center mt-auto">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
                {item.desc}
              </span>
                </div>
              </div>
          ))}
        </div>
      </div>
  );
};

export default SectionHowItWork;
