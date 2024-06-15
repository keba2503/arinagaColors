import React from 'react';
import Heading from "@/shared/Heading";

interface Promotion {
    title: string;
    description: string;
    apartment: string;
}

const promotions: Promotion[] = [
    {
        title: '¡Descuento del 10% por Estancias Prolongadas!',
        description: 'Aprovecha un 10% de descuento al quedarte más de una semana en nuestro apartamento The Yellow House.',
        apartment: 'The Yellow House'
    },
    {
        title: 'Reserva Anticipada: 15% de Descuento',
        description: 'Reserva con antelación y obtén un 15% de descuento en nuestro apartamento The Blue House.',
        apartment: 'The Blue House'
    },
    {
        title: 'Escapada de Fin de Semana',
        description: 'Disfruta de una oferta especial para estancias de fin de semana en el apartamento The White House.',
        apartment: 'The White House'
    },
    {
        title: 'Estancias Largas: 20% de Descuento',
        description: 'Disfruta de un 20% de descuento por estancias largas en el apartamento The Yellow House.',
        apartment: 'The Yellow House'
    },
    {
        title: 'Paquete de Bienvenida Gratis',
        description: 'Recibe un paquete de bienvenida gratuito al reservar nuestro apartamento The Blue House.',
        apartment: 'The Blue House'
    },
    {
        title: 'Descuento Familiar',
        description: 'Aprovecha nuestro descuento especial para familias en el apartamento The White House.',
        apartment: 'The White House'
    },
];

const Promotions: React.FC = () => {
    return (
        <div className="container mx-auto p-4 pb-32">
            <div className="relative bg-gradient-to-r from-blue-400 via-white to-yellow-400 text-white p-12 rounded-lg mb-12 max-w-full overflow-hidden mx-4">
                <div className="absolute inset-0 bg-black opacity-25 rounded-lg"></div>
                <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-4">¡Descubre Nuestras Ofertas Especiales!</h2>
                    <p className="text-lg">Aprovecha descuentos y promociones exclusivas.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {promotions.map((promotion, index) => (
                    <div key={index} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                        </svg>
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{promotion.title}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{promotion.description}</p>
                        <p className="text-gray-900 font-semibold mb-4">Apartamento: {promotion.apartment}</p>
                        <a href="#" className="inline-flex font-medium items-center hover:underline" style={{color: 'rgb(73, 155, 200)'}}>
                            Solicitar Oferta
                            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 2a2 2 0 00-2 2v1.085a1.5 1.5 0 000 2.83V10a2 2 0 002 2h1.085a1.5 1.5 0 002.83 0H10a2 2 0 002-2V8.915a1.5 1.5 0 002.83 0H15a2 2 0 002-2V4.915a1.5 1.5 0 000-2.83V2a2 2 0 00-2-2h-1.085a1.5 1.5 0 00-2.83 0H10a2 2 0 00-2-2H8.915a1.5 1.5 0 00-2.83 0H5a2 2 0 00-2-2H4.915a1.5 1.5 0 00-2.83 0H2z"/>
                            </svg>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Promotions;
