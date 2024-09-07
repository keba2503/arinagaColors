'use client';

import GuideForm from '../../(client-components)/(Admin)/EventArinaga/EventForm';
import GuideTable from '../../(client-components)/(Admin)/EventArinaga/EventTable';

const GuidePage = () => {
  return (
    <main className="flex flex-col items-center p-2 md:p-4 lg:p-6 min-h-screen">
      <div className="w-full max-w-7xl">
        <h1 className={`mb-4 text-2xl md:text-3xl text-center`}>
          Playa de Arinaga - Eventos
        </h1>
        <GuideForm />
        <div className="mt-4">
          <GuideTable />
        </div>
      </div>
    </main>
  );
};

export default GuidePage;
