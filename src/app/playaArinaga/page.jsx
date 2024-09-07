'use client';

import React, { useState, useEffect } from 'react';
import { PlayIcon, XMarkIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { Tab } from '@headlessui/react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

const months = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

const getFormattedDate = (dateStr) => {
  const date = new Date(dateStr);
  const day = date.getDate();
  const month = months[date.getMonth()];
  return `${day} de ${month}`;
};

const fetchEvents = async () => {
  const response = await fetch('/api/eventArinaga');
  return response.json();
};

const fetchPlaces = async () => {
  const response = await fetch('/api/placesArinaga');
  return response.json();
};

const Card = ({ title, description, imageUrl, location, date }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const getGoogleMapsLink = () => {
    return `https://www.google.com/maps?q=${location}`;
  };

  return (
    <>
      <div className="relative w-60 h-80 m-4 bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
        {date && (
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
            {getFormattedDate(date).split(' ')[2]}
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
            <div className="text-justify pb-5 pt-5">{parse(description)}</div>
            <p className="mt-2">
              <strong>Ubicación:</strong> {location}
            </p>
            {date && (
              <p>
                <strong>Fecha:</strong> {getFormattedDate(date)}
              </p>
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
  location: PropTypes.string.isRequired,
  date: PropTypes.string, // Opcional porque no todos los lugares tienen fecha
};

const HeroVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [events, setEvents] = useState([]);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const loadEvents = async () => {
      const data = await fetchEvents();
      setEvents(data);
    };

    const loadPlaces = async () => {
      const data = await fetchPlaces();
      setPlaces(data);
    };

    loadEvents();
    loadPlaces();
  }, []);

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
            <Tab
              className={({ selected }) =>
                `w-full py-2.5 text-lg leading-6 font-bold rounded-lg ${
                  selected
                    ? 'bg-white shadow text-[rgb(73,155,200)]'
                    : 'text-white hover:bg-white/[0.12] hover:text-white'
                }`
              }
            >
              Fiestas
            </Tab>
            <Tab
              className={({ selected }) =>
                `w-full py-2.5 text-lg leading-6 font-bold rounded-lg ${
                  selected
                    ? 'bg-white shadow text-[rgb(73,155,200)]'
                    : 'text-white hover:bg-white/[0.12] hover:text-white'
                }`
              }
            >
              Lugares
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {events.map((event) => (
                <Card
                  key={event.id}
                  title={event.name}
                  description={event.description}
                  imageUrl={event.image}
                  location={event.location}
                  date={event.date}
                />
              ))}
            </Tab.Panel>
            <Tab.Panel className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {places.map((place) => (
                <Card
                  key={place.id}
                  title={place.title}
                  description={place.description}
                  imageUrl={place.imageUrl}
                  location={place.location}
                />
              ))}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default HeroVideo;
