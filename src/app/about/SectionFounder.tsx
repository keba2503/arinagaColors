import Heading from "@/shared/Heading";
import Image, {StaticImageData} from "next/image";
import React from "react";
import avatar from "../../images/avatar.png";

export interface People {
    id: string;
    name: string;
    job: string;
    avatar: StaticImageData;
}

const FOUNDER_DEMO: People[] = [
    {
        id: "1",
        name: `--`,
        job: "Co-founder",
        avatar: avatar
    },
    {
        id: "4",
        name: `--`,
        job: "Co-founder",
        avatar: avatar
    }
];

const SectionFounder = () => {
    return (
        <div className="nc-SectionFounder relative">
            <Heading
                desc="Somos una familia y cada día nos esforzamos por crear experiencias únicas y de clase mundial para nuestros huéspedes."
            >
                ⛱ Fundadores
            </Heading>
            <div className="grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-2 xl:gap-x-8">
                {FOUNDER_DEMO.map((item) => (
                    <div key={item.id} className="max-w-sm">
                        <div className="relative h-0 aspect-h-1 aspect-w-1 rounded-xl overflow-hidden">
                            <Image
                                fill
                                className=" object-cover"
                                src={item.avatar}
                                alt=""
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 30vw"
                            />
                        </div>

                        <h3 className="text-lg font-semibold text-neutral-900 mt-4 md:text-xl dark:text-neutral-200">
                            {item.name}
                        </h3>
                        <span className="block text-sm text-neutral-500 sm:text-base dark:text-neutral-400">
              {item.job}
            </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SectionFounder;
