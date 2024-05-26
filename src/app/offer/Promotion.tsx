import React from 'react';

interface Promotion {
    title: string;
    description: string;
    apartment: string;
}

const promotions: Promotion[] = [
    { title: '¡Descuento del 10% por Estancias Prolongadas!', description: 'Aprovecha un 10% de descuento al quedarte más de una semana en nuestro apartamento Yellow.', apartment: 'Yellow' },
    { title: 'Reserva Anticipada: 15% de Descuento', description: 'Reserva con antelación y obtén un 15% de descuento en nuestro apartamento Blue.', apartment: 'Blue' },
    { title: 'Escapada de Fin de Semana', description: 'Disfruta de una oferta especial para estancias de fin de semana en el apartamento White.', apartment: 'White' },
    { title: 'Estancias Largas: 20% de Descuento', description: 'Disfruta de un 20% de descuento por estancias largas en el apartamento Yellow.', apartment: 'Yellow' },
    { title: 'Paquete de Bienvenida Gratis', description: 'Recibe un paquete de bienvenida gratuito al reservar nuestro apartamento Blue.', apartment: 'Blue' },
    { title: 'Descuento Familiar', description: 'Aprovecha nuestro descuento especial para familias en el apartamento White.', apartment: 'White' },
];

const Promotions: React.FC = () => {
    return (
        <div className="container mx-auto p-4 pb-32">
            <h1   className="text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] dark:text-neutral-100 text-center pb-6">Nuestras Promociones</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
                {promotions.map((promotion, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-xl font-bold mb-2 text-primary-700">{promotion.title}</h2>
                        <p className="text-gray-700 mb-4">{promotion.description}</p>
                        <p className="text-gray-900 font-semibold mb-4">Apartamento: {promotion.apartment}</p>
                        <button className="bg-primary-500 text-white px-4 py-2 rounded hover:bg-primary-600 transition-colors duration-300">
                            Solicitar Oferta
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Promotions;
