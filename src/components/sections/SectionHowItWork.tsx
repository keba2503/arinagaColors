import React, { FC } from 'react';
import {
  CurrencyEuroIcon,
  CheckCircleIcon,
  CalendarDaysIcon,
  ReceiptPercentIcon,
  XCircleIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline';
import VectorImg from '@/images/VectorHIW.svg';
import Image from 'next/image';
import Heading from '@/shared/Heading';
import { TagIcon } from '@heroicons/react/24/solid';

export interface SectionHowItWorkProps {
  className?: string;
  data?: {
    id: number;
    title: string;
    desc: string;
    Icon: FC;
  }[];
}
const CombinedIcon: FC = () => (
  <div className="relative w-24 h-24 text-gray-600">
    <CalendarDaysIcon className="absolute w-20 h-20" />
    <TagIcon className="absolute w-14 h-14 top-1 right-[-11px]" />
    <ReceiptPercentIcon className="absolute w-6 h-6 top-5 right-1 transform rotate-[-46deg] text-white" />
  </div>
);

const CancelIcon: FC = () => (
  <div className="relative w-24 h-24 text-gray-600">
    <CalendarIcon className="absolute w-20 h-20" />
    <XCircleIcon className="absolute w-10 h-10 top-1/2 left-10 transform -translate-x-1/2 -translate-y-4" />
  </div>
);

const DEMO_DATA: SectionHowItWorkProps['data'] = [
  {
    id: 1,
    Icon: CombinedIcon,
    title: 'Ofertas exclusivas en reservas',
    desc: '',
  },
  {
    id: 2,
    Icon: CurrencyEuroIcon,
    title: 'Mejor precio online',
    desc: '',
  },
  {
    id: 3,
    Icon: CancelIcon,
    title: 'Política de cancelación flexible',
    desc: '',
  },
];

const SectionHowItWork: FC<SectionHowItWorkProps> = ({
  className = '',
  data = DEMO_DATA,
}) => {
  return (
    <div
      className={`nc-SectionHowItWork ${className}`}
      data-nc-id="SectionHowItWork"
    >
      <Heading
        isCenter
        desc="Relájate y disfruta de la estadía"
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
            <div className="mb-8 w-24 h-24 text-gray-600">
              <item.Icon />
            </div>
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
