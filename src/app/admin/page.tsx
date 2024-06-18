'use client';

import DonutChart from '@/components/DonutChart';
import ColumnChart from '@/components/ColumnChart';
import DataSeriesChart from '@/components/DataSeriesChart';
import Map from '@/components/Map';

export default function Page() {
    return (
        <main className="space-y-8 p-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg shadow dark:bg-gray-800 p-4 min-h-[100px]">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white mb-3">Trafico WEB</h5>
                    <DonutChart/>
                </div>
                <div className="bg-white rounded-lg shadow dark:bg-gray-800 p-4 min-h-[100px]">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white mb-3">Reservas por mes</h5>
                    <ColumnChart/>
                </div>
                <div className="bg-white rounded-lg shadow dark:bg-gray-800 p-4 min-h-[100px]">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white mb-3">Reservas por mes</h5>
                    <DataSeriesChart/>
                </div>
                <div className="lg:col-span-3 bg-white rounded-lg shadow dark:bg-gray-800 p-4 min-h-[500px] pb-30">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white mb-3">Desde donde se conectan</h5>
                    <Map/>
                </div>
            </div>
        </main>
    );
}
