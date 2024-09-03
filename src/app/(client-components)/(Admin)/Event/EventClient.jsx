'use client';

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import EventForm from 'src/app/(client-components)/(Admin)/Event/EventForm';

const EventClient = ({ id }) => {
  const [event, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      if (id) {
        try {
          const response = await fetch(`/api/event/${id}`);
          if (response.ok) {
            const data = await response.json();
            setEvent(data);
          } else {
            console.error('Error fetching event:', response.statusText);
          }
        } catch (error) {
          console.error('Error fetching event:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchEvent();
  }, [id]);

  return (
    <main className="flex flex-col items-center p-2 md:p-4 lg:p-6 min-h-screen">
      <div className="w-full max-w-7xl">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl md:text-3xl text-center flex-1">
            {event ? 'Editar Evento' : 'Crear Evento'}
          </h1>
        </div>
        {isLoading ? <p>Cargando...</p> : <EventForm event={event} />}
      </div>
    </main>
  );
};

EventClient.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default EventClient;
