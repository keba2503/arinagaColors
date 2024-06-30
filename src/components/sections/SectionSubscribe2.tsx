import React, { FC } from 'react';
import ButtonCircle from '@/shared/ButtonCircle';
import rightImg from '@/images/SVG-subcribe2.png';
import Input from '@/shared/Input';
import Image from 'next/image';

export interface SectionSubscribe2Props {
  className?: string;
}

const SectionSubscribe2: FC<SectionSubscribe2Props> = ({ className = '' }) => {
  return (
    <div
      className={`nc-SectionSubscribe2 relative flex flex-col lg:flex-row lg:items-center ${className}`}
      data-nc-id="SectionSubscribe2"
    >
      <div className="flex-shrink-0 mb-10 lg:mb-0 lg:mr-10 lg:w-2/5">
        <h2 className="font-semibold text-4xl">Contacta con nosotros</h2>
        <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
          Cualquier consulta o duda puedes comunicarte con nosotros cuando
          quieras
        </span>
        <form className="mt-10 relative max-w-sm">
          <div className="mb-4">
            <Input
              required
              aria-required="true"
              placeholder="Tú correo electrónico"
              type="email"
              rounded="rounded"
              sizeClass="h-12 px-5 py-3"
            />
          </div>
          <div className="mb-4">
            <Input
              required
              aria-required="true"
              placeholder="Tú mensaje"
              type="text"
              rounded="rounded"
              sizeClass="h-36 px-5 py-3"
            />
          </div>
          <ButtonCircle
            type="submit"
            className="absolute top-1/2 transform -translate-y-1/2 right-1.5 mt-6"
            size="w-10 h-10"
          >
            <i className="las la-arrow-right text-xl"></i>
          </ButtonCircle>
        </form>
      </div>
      <div className="flex-grow">
        <Image alt="" src={rightImg} />
      </div>
    </div>
  );
};

export default SectionSubscribe2;
