'use client';

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlaceForm from 'src/app/(client-components)/(Admin)/Places/PlaceForm';

const EventClient = ({ id }) => {
  const [place, setPlace] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPlace = async () => {
      if (id) {
        try {
          const response = await fetch(`/api/places/${id}`);
          if (response.ok) {
            const data = await response.json();
            setPlace(data);
          } else {
            console.error('Error fetching place:', response.statusText);
          }
        } catch (error) {
          console.error('Error fetching place:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchPlace();
  }, [id]);

  return (
    <main className="flex flex-col items-center p-2 md:p-4 lg:p-6 min-h-screen">
      <div className="w-full max-w-7xl">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl md:text-3xl text-center flex-1">
            {place ? 'Editar Lugar' : 'Crear Lugar'}{' '}
          </h1>
        </div>
        {isLoading ? <p>Cargando...</p> : <PlaceForm place={place} />}{' '}
      </div>
    </main>
  );
};

EventClient.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default EventClient;
