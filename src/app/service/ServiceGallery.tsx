'use client';

import React from 'react';
import ServiceCard from "@/app/service/Service";

// Importar las imágenes
import bebeImage from '../../images/bebe.png';
import limpiezaImage from '../../images/limpieza.png';
import amenitiesImage from '../../images/amenites.png';
import almohadaImage from '../../images/almohada.png';
import Heading from "@/shared/Heading";

const serviceList = [
    {
        title: 'Para los más pequeños',
        description: 'Para los más pequeños, disponemos de cuna, trona y bañera. Solicítalo en la reserva sin coste adicional.',
        icon: '👶',
        imageUrl: bebeImage,
    },
    {
        title: 'Limpieza extra',
        description: 'Servicio de limpieza del apartamento disponible bajo petición. Solicítalo en la reserva sin coste adicional.',
        icon: '🧹',
        imageUrl: limpiezaImage,
    },
    {
        title: 'Amenities',
        description: 'Ofrecemos una variedad de amenities para su comodidad. Solicítalo en la reserva sin coste adicional.',
        icon: '🛁',
        imageUrl: amenitiesImage,
    },
    {
        title: 'Almohadas extra',
        description: 'Proveemos almohadas extra para su confort. Solicítalo en la reserva sin coste adicional.',
        icon: '🛌',
        imageUrl: almohadaImage,
    },
];

const ServiceGallery: React.FC = () => {
    return (
        <div className="relative py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
            <Heading
                className='pb-20'
                desc="Servicios pensados para mejorar la calidad en su estancia."
            >
                ⛱ Servicios disponibles
            </Heading>        <div className="mt-6 flex flex-col sm:flex-row flex-wrap items-center justify-center">
                {serviceList.map((service, index) => (
                    <div key={index} className="mb-6 sm:mb-6 sm:mx-3">
                        <ServiceCard
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            imageUrl={service.imageUrl}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceGallery;
