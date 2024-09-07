'use client';

import PlaceForm from '../../(client-components)/(Admin)/PlacesArinaga/PlaceForm';
import PlaceTable from '../../(client-components)/(Admin)/PlacesArinaga/EventTable';

const EventPage = () => {
  return (
    <main className="flex flex-col items-center p-2 md:p-4 lg:p-6 min-h-screen">
      <div className="w-full max-w-7xl">
        <h1 className={`mb-4 text-2xl md:text-3xl text-center`}>
          Playa de Arinaga - Sitios de interes
        </h1>
        <PlaceForm />
        <div className="mt-4">
          <PlaceTable />
        </div>
      </div>
    </main>
  );
};

export default EventPage;
