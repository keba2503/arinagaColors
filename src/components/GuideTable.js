// components/GuideTable.js
import React from 'react';

const GuideTable = () => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Título
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Descripción
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Acción
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Normas de limpieza
                    </th>
                    <td className="px-6 py-4">
                        Durante su estancia, por favor mantenga el apartamento limpio y ordenado. Antes de su salida, asegúrese de que los utensilios de cocina estén limpios y en su lugar, saque la basura y deje los muebles en su posición original. Se cobrará una tarifa adicional si el apartamento se deja en condiciones insatisfactorias.
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


