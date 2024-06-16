// components/GuideTable.js
import React from 'react';

const GuideTable = () => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Pregunta
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Respuesta
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Acción
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        ¿Cuál es el procedimiento para reservar un apartamento?
                    </th>
                    <td className="px-6 py-4">
                        Puede reservar su apartamento directamente a través de nuestro sitio web, donde encontrará un calendario de disponibilidad y podrá realizar el pago de forma segura.
                    </td>
                    <td className="px-6 py-4">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default GuideTable;
