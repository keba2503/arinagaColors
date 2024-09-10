'use client';

import React, { FC, Fragment, useContext, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Squares2X2Icon } from '@heroicons/react/24/outline';
import Badge from '@/shared/Badge';
import ButtonSecondary from '@/shared/ButtonSecondary';
import ButtonClose from '@/shared/ButtonClose';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Amenities_demos, PHOTOS } from './constant';
import { Route } from 'next';
import parse from 'html-react-parser';
import { LanguageContext } from '@/context/LanguageContext';
import { translateText } from '@/utils/translate';

export interface YellowDetailPageProps {}

const YellowDetailPage: FC<YellowDetailPageProps> = () => {
  const [isOpenModalAmenities, setIsOpenModalAmenities] = useState(false);

  const [translatedTexts, setTranslatedTexts] = useState<{
    [key: string]: string | React.ReactNode;
  }>({});

  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('LanguageContext must be used within a LanguageProvider');
  }

  const { language } = context;

  const thisPathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://bookonline.pro/widgets/search/dist/index.js';
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const translateContent = async () => {
      const translations = {
        title: 'The Yellow House',
        guests: await translateText('huespedes', language),
        beds: await translateText('camas', language),
        bath: await translateText('baño', language),
        rooms: await translateText('habitaciones', language),
        infoTitle: await translateText('Información del apartamento', language),
        photos: await translateText('Ver todas las fotos', language),
        more: await translateText('Ver más', language),
        description: parse(
          await translateText(
            '<span className="block mb-4">' +
              'Preciosa y acogedora vivienda vacacional en la Playa de Arinaga, en ' +
              'primera línea de playa con impresionantes vistas al mar y a toda la ' +
              'bahía. Consta de 2 dormitorios dobles, con capacidad para 4 ' +
              'personas.' +
              '</span>' +
              '<span className="block mb-4">' +
              'La vivienda tiene una superficie de 91 m², es exterior con mucha luz ' +
              'y está situada en primera línea de playa, con vistas al mar. Dispone ' +
              'de pequeña terraza y balcón, ideal para relajarse contemplando y ' +
              'escuchando el sonido del mar. Está totalmente equipada con lavadora, ' +
              'plancha, acceso ilimitado a Internet (wifi), secador de pelo y ' +
              'Televisor. La cocina de estilo americana cuenta con placa ' +
              'vitrocerámica, nevera, microondas, horno, congelador, ' +
              'vajilla/cubertería, utensilios/cocina, cafetera, tostadora, hervidor ' +
              'de agua y exprimidor. Ofrecemos cuna bajo petición, de manera ' +
              'gratuita.' +
              '</span>' +
              '<span className="block mb-4">' +
              'A lo largo de la costa de Arinaga, hay un paseo de aproximadamente 2 ' +
              'kilómetros que recorre el pueblo de un extremo a otro. La vivienda ' +
              'se encuentra en el propio paseo, Hay una gran variedad de ' +
              'restaurantes y bares en el paseo. La playa se divide en varias zonas ' +
              'de baño. La gran parte es de piedra, pero hay zonas con arena. ' +
              'Cuenta con una piscina natural en la zona del Soco Negro, con ' +
              'plataformas de madera para tomar el sol. Al final del paseo se ' +
              'encuentra la zona del Risco Verde, ideal para tomar un baño con ' +
              'marea alta. También tiene plataformas de madera para tomar el sol. ' +
              'La playa posee la Bandera Azul desde el año 2017.' +
              '</span>' +
              '<span className="block mb-4">' +
              'La temperatura media es de 25º a lo largo del año. Se puede ' +
              'practicar variedad de deportes, como ciclismo, kitesurf, windsurf, ' +
              'paddle surf y submarinismo. Además, la vivienda se encuentra a 5 ' +
              'minutos de la reserva natural Playa de Cabrón. Es de arena rubia, ' +
              'aunque también cuenta con algunas formaciones rocosas volcánicas. El ' +
              'Cabrón es uno de los enclaves favoritos para practicar el buceo en ' +
              'Gran Canaria, una de las actividades en Gran Canaria que te ' +
              'recomendamos realizar.' +
              '</span>',
            language,
          ),
        ),
        amenitiesTitle: await translateText('Comodidades', language),
        reviews: await translateText('Reseñas', language),
        address: await translateText('Dirección', language),
        thingsToKnow: await translateText('Cosas que debes saber', language),
        cancellationPolicy: await translateText(
          'Política de cancelación',
          language,
        ),
        cancellationPolicyText: await translateText(
          ' Cancelación flexible, si anulas 7 días antes de la entrada al\n' +
            '            alojamiento.',
          language,
        ),
        checkIn: await translateText('Llegada', language),
        checkOut: await translateText('Salida', language),
      };
      setTranslatedTexts(translations);
    };

    translateContent();
  }, [language]);

  function closeModalAmenities() {
    setIsOpenModalAmenities(false);
  }

  function openModalAmenities() {
    setIsOpenModalAmenities(true);
  }

  const handleOpenModalImageGallery = () => {
    router.push(`${thisPathname}/?modal=PHOTO_TOUR_SCROLLABLE` as Route);
  };

  const renderSection1 = () => {
    return (
      <div className="listingSection__wrap !space-y-6">
        {/* 1 */}
        <div className="flex justify-between items-center">
          <Badge className="bg-yellow-200" name="Yellow - Playa de Arinaga" />
        </div>

        {/* 2 */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          {translatedTexts.title || '          The Yellow House'}
        </h2>

        {/* 5 */}
        <div className="w-full border-b border-neutral-100 dark:border-neutral-700" />

        {/* 6 */}
        <div className="flex items-center justify-between xl:justify-start space-x-8 xl:space-x-12 text-sm text-neutral-700 dark:text-neutral-300">
          <div className="flex items-center space-x-3 ">
            <i className=" las la-user text-2xl "></i>
            <span className="">
              4{' '}
              <span className="hidden sm:inline-block">
                {translatedTexts.guests || 'huespedes'}
              </span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <i className=" las la-bed text-2xl"></i>
            <span className=" ">
              3{' '}
              <span className="hidden sm:inline-block">
                {translatedTexts.beds || 'camas'}
              </span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <i className=" las la-bath text-2xl"></i>
            <span className=" ">
              1{' '}
              <span className="hidden sm:inline-block">
                {translatedTexts.bath || 'baño'}
              </span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <i className=" las la-door-open text-2xl"></i>
            <span className=" ">
              2{' '}
              <span className="hidden sm:inline-block">
                {translatedTexts.rooms || 'habitaciones'}
              </span>
            </span>
          </div>
        </div>
      </div>
    );
  };

  const renderSection2 = () => {
    return (
      <div className="listingSection__wrap">
        <h2 className="text-2xl font-semibold">
          {translatedTexts.infoTitle || 'Información del apartamento'}
        </h2>{' '}
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        <div className="text-neutral-6000 dark:text-neutral-300 text-justify">
          <span className="block mb-4">{translatedTexts.description}</span>
        </div>
      </div>
    );
  };

  const renderSection3 = () => {
    return (
      <div className="listingSection__wrap">
        <div>
          <div>{translatedTexts.amenitiesTitle || 'Comodidades'} </div>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            {` Acerca de los servicios y comodidades de la propiedad`}
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        {/* 6 */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 text-sm text-neutral-700 dark:text-neutral-300 ">
          {Amenities_demos.filter((_, i) => i < 12).map((item) => (
            <div key={item.name} className="flex items-center space-x-3">
              <i className={`text-3xl las ${item.icon}`}></i>
              <span className="">{translateText(item.name, language)}</span>
            </div>
          ))}
        </div>

        {/* ----- */}
        <div className="w-14 border-b border-neutral-200"></div>
        <div>
          <ButtonSecondary onClick={openModalAmenities}>
            {translatedTexts.more || 'Ver mas'}{' '}
          </ButtonSecondary>
        </div>
        {renderMotalAmenities()}
      </div>
    );
  };

  const renderMotalAmenities = () => {
    return (
      <Transition appear show={isOpenModalAmenities} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModalAmenities}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block py-8 h-screen w-full max-w-4xl">
                <div className="inline-flex pb-2 flex-col w-full text-left align-middle transition-all transform overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 dark:text-neutral-100 shadow-xl h-full">
                  <div className="relative flex-shrink-0 px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 text-center">
                    <h3
                      className="text-lg font-medium leading-6 text-gray-900"
                      id="headlessui-dialog-title-70"
                    >
                      {translatedTexts.amenitiesTitle || 'Comodidades'}
                    </h3>
                    <span className="absolute left-3 top-3">
                      <ButtonClose onClick={closeModalAmenities} />
                    </span>
                  </div>
                  <div className="px-8 overflow-auto text-neutral-700 dark:text-neutral-300 divide-y divide-neutral-200">
                    {Amenities_demos.filter((_, i) => i < 1212).map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center py-2.5 sm:py-4 lg:py-5 space-x-5 lg:space-x-8"
                      >
                        <i
                          className={`text-4xl text-neutral-6000 las ${item.icon}`}
                        ></i>
                        <span>{translateText(item.name, language)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    );
  };

  const renderSection6 = () => {
    return (
      <div className="listingSection__wrap">
        <h2 className="text-2xl font-semibold">Reseñas</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        <div className="flex justify-center mt-6">
          <iframe
            src={`https://www.avaibook.com/widgets_propietarios/opiniones.php?cod_propietario=92477&cod_alojamiento=357516&subtipo=2&color_texto=000000&lang=${language}`}
            style={{ width: '100%', height: '350px', border: '0px' }}
            frameBorder="0"
          >
            Tu navegador no soporta iframes
          </iframe>
        </div>
      </div>
    );
  };

  const renderSection7 = () => {
    return (
      <div className="listingSection__wrap">
        {/* HEADING */}
        <div>
          <h2 className="text-2xl font-semibold">
            {' '}
            {translatedTexts.address || 'Dirección'}
          </h2>{' '}
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            Playa de Arinaga
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

        {/* MAP */}
        <div className="aspect-w-5 aspect-h-5 sm:aspect-h-3 ring-1 ring-black/10 rounded-xl z-0">
          <div className="rounded-xl overflow-hidden z-0">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.463429938482!2d-15.398423824527264!3d27.857021230339847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc409511bd6d5d33%3A0x0!2zUGxheWEgZGUgQXJpbmFnYQ!5e0!3m2!1ses!2ses!4v1717692918943!5m2!1ses!2ses"
            ></iframe>
          </div>
        </div>
      </div>
    );
  };

  const renderSection8 = () => {
    return (
      <div className="listingSection__wrap">
        <h2 className="text-2xl font-semibold">
          {' '}
          {translatedTexts.thingsToKnow || 'Cosas que debes saber'}
        </h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />
        <div>
          <h4 className="text-lg font-semibold">
            {' '}
            {translatedTexts.cancellationPolicy || 'Política de cancelación'}
          </h4>
          <span className="block mt-3 text-neutral-500 dark:text-neutral-400">
            {' '}
            {translatedTexts.cancellationPolicyText ||
              'Cancelación flexible, si anulas 7 días antes de la entrada al\n' +
                '            alojamiento.'}
            <br />
          </span>
        </div>

        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

        <div>
          <h4 className="text-lg font-semibold"></h4>
          <div className="mt-3 text-neutral-500 dark:text-neutral-400 max-w-md text-sm sm:text-base">
            <div className="flex space-x-10 justify-between p-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
              <span> {translatedTexts.checkIn || 'Llegada'}</span>
              <span>14:00</span>
            </div>
            <div className="flex space-x-10 justify-between p-3">
              <span>{translatedTexts.checkOut || 'Salida'}</span>
              <span>11:00</span>
            </div>
          </div>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />
      </div>
    );
  };

  const renderSidebar = () => {
    return (
      <div className="mt-6">
        <iframe
          src={`https://www.avaibook.com/widgets_propietarios/loader.php?id=148918&lang=${language}`}
          data-target="_self"
          style={{
            width: '100%',
            height: '390px',
            border: '0',
            backgroundColor: 'white',
          }}
        >
          Tu navegador no soporta iframes
        </iframe>
      </div>
    );
  };

  return (
    <div className="nc-ListingStayDetailPage">
      {/*  HEADER */}
      <header className="rounded-md sm:rounded-xl">
        <div className="relative grid grid-cols-3 sm:grid-cols-4 gap-1 sm:gap-2">
          <div
            className="col-span-2 row-span-3 sm:row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer"
            onClick={handleOpenModalImageGallery}
          >
            <Image
              fill
              className="object-cover rounded-md sm:rounded-xl"
              src={PHOTOS[0]}
              alt=""
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
            <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
          </div>
          {PHOTOS.filter((_, i) => i >= 1 && i < 5).map((item, index) => (
            <div
              key={index}
              className={`relative rounded-md sm:rounded-xl overflow-hidden ${
                index >= 3 ? 'hidden sm:block' : ''
              }`}
            >
              <div className="aspect-w-4 aspect-h-3 sm:aspect-w-6 sm:aspect-h-5">
                <Image
                  fill
                  className="object-cover rounded-md sm:rounded-xl "
                  src={item || ''}
                  alt=""
                  sizes="400px"
                />
              </div>

              {/* OVERLAY */}
              <div
                className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                onClick={handleOpenModalImageGallery}
              />
            </div>
          ))}

          <button
            className="absolute hidden md:flex md:items-center md:justify-center left-3 bottom-3 px-4 py-2 rounded-xl bg-neutral-100 text-neutral-500 hover:bg-neutral-200 z-10"
            onClick={handleOpenModalImageGallery}
          >
            <Squares2X2Icon className="w-5 h-5" />
            <span className="ml-2 text-neutral-800 text-sm font-medium">
              {translatedTexts.photos || 'Ver todas las fotos'}{' '}
            </span>
          </button>
        </div>
      </header>

      {/* MAIN */}
      <main className="relative z-10 mt-11 flex flex-col lg:flex-row-reverse">
        {/* SIDEBAR */}
        <div className="lg:block lg:w-1/4 flex-grow mt-14 lg:mt-0 mb-8 lg:ml-8">
          <div className="sticky top-28">{renderSidebar()}</div>
        </div>

        {/* CONTENT */}
        <div className="w-full lg:w-3/5 xl:w-2/3 space-y-8 lg:space-y-10 lg:pr-10">
          {renderSection1()}
          {renderSection2()}
          {renderSection3()}
          {renderSection6()}
          {renderSection7()}
          {renderSection8()}
        </div>
      </main>
    </div>
  );
};

export default YellowDetailPage;
