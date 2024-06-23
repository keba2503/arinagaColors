import React, {ReactNode, useState} from 'react';
import type { StaticImageData } from 'next/image';

interface ServiceCardProps {
    title: string;
    description: ReactNode;
    icon: string;
    imageUrl: string | StaticImageData;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, imageUrl }) => {
    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={typeof imageUrl === 'string' ? imageUrl : imageUrl.src} alt={title} />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a>
                <p className={`text-justify mb-3 font-normal text-gray-700 dark:text-gray-400 ${showDescription ? '' : 'hidden'}`}>{description}</p>
                <button
                    onClick={toggleDescription}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-[rgb(73,155,200)] hover:bg-[rgb(60,135,175)] focus:ring-4 focus:outline-none focus:ring-[rgba(73,155,200,0.5)]"
                >
                    {showDescription ? 'Mostrar menos' : 'Leer más'}
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ServiceCard;
