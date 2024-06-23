'use client';

import React, { useEffect, useState } from 'react';
import ServiceCard from "@/app/service/Service";
import Heading from "@/shared/Heading";
import parse from 'html-react-parser';
import bebeImage from '../../images/bebe.png';
import limpiezaImage from '../../images/limpieza.png';
import amenitiesImage from '../../images/amenites.png';
import almohadaImage from '../../images/almohada.png';

interface ApiResponse {
    scope_id: number;
    title: string;
    description: string;
    additional_text: string;
}

const localImages = [
    { src: bebeImage, icon: '👶' },
    { src: limpiezaImage, icon: '🧹' },
    { src: amenitiesImage, icon: '🛁' },
    { src: almohadaImage, icon: '🛌' }
];

const ServiceGallery: React.FC = () => {
    const [data, setData] = useState<ApiResponse[]>([]);
    const [loading, setLoading] = useState(true);
    const [header, setHeader] = useState<{ title: string, description: string } | null>(null);
    const [servicesHeader, setServicesHeader] = useState<{ title: string, description: string } | null>(null);

    useEffect(() => {
        fetch('/api/config')
            .then(response => response.json())
            .then(data => {
                const filteredServices = data.filter((item: ApiResponse) => item.scope_id === 11);
                const headerData = data.find((item: ApiResponse) => item.scope_id === 7);

                setHeader(headerData ? { title: headerData.title, description: headerData.description } : null);
                setServicesHeader(filteredServices.length > 0 ? { title: filteredServices[0].title, description: filteredServices[0].description } : null);
                setData(filteredServices);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="relative py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
            {header && (
                <Heading
                    className='pb-20'
                    desc={parse(header.description)}
                >
                    ⛱ {parse(header.title)}
                </Heading>
            )}
            <div className="mt-6 flex flex-col sm:flex-row flex-wrap items-center justify-center">
                {data.map((service, index) => {
                    const image = localImages[index] || {};
                    return (
                        <div key={index} className="mb-6 sm:mb-6 sm:mx-3">
                            <ServiceCard
                                title={service.title}
                                description={parse(service.description)}
                                icon={image.icon || '🛠️'}
                                imageUrl={image.src}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ServiceGallery;
