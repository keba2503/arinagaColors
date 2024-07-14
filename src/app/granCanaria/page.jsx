'use client';

import React, { useState } from 'react';
import { PlayIcon, XMarkIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { Tab } from '@headlessui/react';
import PropTypes from 'prop-types';

const tabs = [
  {
    name: 'Fiestas',
    content: [
      {
        title: 'Carnaval de Las Palmas',
        description:
          'Una de las celebraciones más importantes de la isla, con desfiles, concursos de disfraces y música en vivo que se extienden durante varias semanas.',
        imageUrl:
          'https://www.hotelesdunas.com/content/imgsxml/blog/big-carnaval-de-las-palmas-2020--programa-de-hoy-dia-23-de-febrero1870.jpg',
        location: 'Las Palmas de Gran Canaria',
        coordinates: '28.140638759774877° N, 15.43105072604776° W',
        date: 'Febrero (las fechas varían cada año)',
        month: 'FEBRERO',
      },
      {
        title: 'Fiesta de San José',
        description:
          'Celebrada el 19 de marzo en distintos municipios de la isla, en honor a San José. Incluye misas, procesiones y actividades culturales.',
        imageUrl:
          'https://infonortedigital.com/upload/images/04_2023/5127_sanjose-2.jpg',
        location: 'Agüimes',
        coordinates: ' 27.90408441100935° N, 15.445513676677512° W',
        date: '19 de marzo',
        month: 'MARZO',
      },
      {
        title: 'Fiesta de Nuestra Señora del Pino',
        description:
          'Celebrada en Teror, en honor a la patrona de Gran Canaria. Incluye peregrinaciones, misas y eventos culturales.',
        imageUrl:
          'https://lalagunaahora.com/wp-content/uploads/2019/09/el-pino.jpg',
        location: 'Teror',
        coordinates: '   28.061571185535875° N, 15.545656925034748° W',
        date: '8 de septiembre',
        month: 'SEPTIEMBRE',
      },
      {
        title: 'Fiesta de la Rama',
        description:
          'Una de las festividades más antiguas y populares, celebrada en Agaete. Incluye una procesión de ramas, música y bailes tradicionales.',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8y1R7zihZ4aHQiXYPXuxwns4WQ1oMsVrrpg&s',
        location: 'Agaete',
        coordinates: '28.09971826002198° N, 15.70107385452972° W',
        date: '4 de agosto',
        month: 'AGOSTO',
      },
    ],
  },
  {
    name: 'Sitios de interés',
    content: [
      {
        title: 'Las Dunas de Maspalomas',
        description:
          'Un impresionante paisaje natural de dunas de arena dorada que se extienden a lo largo de varios kilómetros, ubicadas en el sur de la isla. Es una reserva natural donde se puede disfrutar de largas caminatas y observar una gran variedad de flora y fauna.',
        imageUrl:
          'https://es.lowcosttoursgrancanaria.com/templateEditor/kcfinder/upload/images/dunas-de-maspalomas/dunes-of-maspalomas-panoramica.jpg',
        location: '27.74075087140445, -15.575117253844871',
      },
      {
        title: 'Roque Nublo',
        description:
          'Un monolito de roca volcánica que se alza a 80 metros sobre su base, ubicado en el centro de la isla. Es uno de los símbolos más emblemáticos de Gran Canaria y ofrece vistas panorámicas espectaculares de la isla y del océano Atlántico.',
        imageUrl:
          'https://lagavetavoladora.com/wp-content/uploads/2019/11/Sendero-al-Roque-Nublo.jpg',
        location: '27.969090139359466, -15.610704484259404',
      },
      {
        title: 'Puerto de Mogán',
        description:
          'Conocido como la "Pequeña Venecia" de Gran Canaria, este pintoresco puerto es famoso por sus canales, puentes y coloridas casas. Es un lugar ideal para pasear, disfrutar de la gastronomía local y relajarse en sus playas.',
        imageUrl:
          'https://www.cardenas-grancanaria.com/perch/resources/gallery/puerto-de-mogan-puerto-4.jpg',
        location: '27.817425931262445, -15.766066644265782',
      },
      {
        title: 'Cueva Pintada',
        description:
          'Un museo arqueológico y parque arqueológico ubicado en Gáldar, que alberga restos de una antigua ciudad canaria y pinturas rupestres. Ofrece una visión fascinante de la vida y cultura de los antiguos habitantes de la isla.',
        imageUrl:
          'https://lh4.googleusercontent.com/proxy/X6eXz2OAtnEWpidjqXdYrm26g6-ZybnuU4gy8wH2IZhQ_dhvQL7czAAQ8M9ymCUHDuhX8ebpFQyLfG3zwDfgx9wqmk-nOryzPC3oJLQ266Gr22wxH5bVi_iArg',
        location: '28.144315996524433, -15.655109722669698',
      },
    ],
  },
];

const Card = ({
  title,
  description,
  imageUrl,
  location,
  coordinates,
  date,
  month,
}) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const getGoogleMapsLink = () => {
    return coordinates
      ? `https://www.google.com/maps?q=${coordinates}`
      : `https://www.google.com/maps?q=${location}`;
  };

  return (
    <>
      <div className="relative w-60 h-80 m-4 bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
        {month && (
          <div
            className="absolute top-0 left-0"
            style={{
              backgroundColor: 'rgb(73, 155, 200)',
              color: 'white',
              padding: '0.25rem 0.5rem',
              textTransform: 'uppercase',
              fontSize: '0.875rem',
              fontWeight: 'bold',
            }}
          >
            {month}
          </div>
        )}
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white text-center py-2">
          {title}
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={toggleModal}
            className="mt-2 px-4 py-2 rounded-lg"
            style={{ backgroundColor: 'rgb(73, 155, 200)', color: 'white' }}
          >
            Ver más
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-800"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-justify pb-5 pt-5">{description}</p>
            {coordinates && (
              <>
                <p className="mt-2">
                  <strong>Ubicación:</strong> {location}
                </p>
                <p>
                  <strong>Fecha:</strong> {date}
                </p>
              </>
            )}
            <div className="mt-2 flex items-center pt-5">
              <MapPinIcon className="w-5 h-5 text-gray-800 mr-1" />
              <a
                href={getGoogleMapsLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Ver en Google Maps
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  location: PropTypes.string,
  coordinates: PropTypes.string,
  date: PropTypes.string,
  month: PropTypes.string,
};

const HeroVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="w-full">
      <div className="w-full h-[50vh] flex items-center justify-center bg-black relative">
        {isPlaying ? (
          <div className="w-full h-full">
            <div className="relative w-full h-full">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/4a46R3A0O34?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ) : (
          <div className="w-full h-full relative">
            <img
              src="https://spanishcoursesgrancanaria.com/sites/default/files/styles/p1920xauto/public/2019-01/header_why_grancanaria_4.jpg?itok=4f0H9hMN"
              alt="Banner"
              className="w-full h-full object-cover"
            />
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50"
            >
              <PlayIcon className="w-16 h-16" />
              <span className="mt-2 text-xl">Reproducir video</span>
            </button>
          </div>
        )}
      </div>
      <div className="mt-4 mx-auto max-w-6xl">
        <Tab.Group>
          <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
            {tabs.map((tab) => (
              <Tab
                key={tab.name}
                className={({ selected }) =>
                  `w-full py-2.5 text-lg leading-6 font-bold rounded-lg ${
                    selected
                      ? 'bg-white shadow text-[rgb(73,155,200)]'
                      : 'text-white hover:bg-white/[0.12] hover:text-white'
                  }`
                }
              >
                {tab.name}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {tabs.map((tab) => (
              <Tab.Panel
                key={tab.name}
                className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
              >
                {tab.content.map((card, index) => (
                  <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    imageUrl={card.imageUrl}
                    location={card.location}
                    coordinates={card.coordinates}
                    date={card.date}
                    month={card.month}
                  />
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default HeroVideo;
