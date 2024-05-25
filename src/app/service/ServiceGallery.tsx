'use client'

import React, { useRef } from 'react';
import ServiceCard from "@/app/service/Service";

const services = [
    {
        title: 'Búsqueda en el Aeropuerto',
        description: 'Ofrecemos un servicio de búsqueda en el aeropuerto para su comodidad.',
        icon: '✈️',
    },
    {
        title: 'Sillas de Bebés',
        description: 'Proveemos sillas de bebés para la seguridad de sus pequeños.',
        icon: '👶',
    },
    {
        title: 'Limpieza del Apartamento',
        description: 'Servicio de limpieza del apartamento disponible bajo petición.',
        icon: '🧹',
    },
    {
        title: 'Alquiler de Kayaks',
        description: 'Disfrute de la aventura alquilando nuestros kayaks.',
        icon: '🛶',
    },
    {
        title: 'Tablas de Paddle',
        description: 'Disponemos de tablas de paddle para su diversión en el agua.',
        icon: '🏄‍♂️',
    },
];

const ServiceGallery: React.FC = () => {
    const galleryRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (galleryRef.current) {
            galleryRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (galleryRef.current) {
            galleryRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative  py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">Servicios Disponibles</h2>
            <div className="mt-6 flex items-center relative">
                <div ref={galleryRef} className="flex overflow-hidden space-x-6 p-4">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ServiceGallery;
