// components/ServiceCard.tsx
import React from 'react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
    return (
        <div className="group relative bg-white shadow-md rounded-lg p-6 flex-shrink-0 w-64">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 h-48">
                <div className="flex items-center justify-center h-full w-full text-6xl">
                    {icon}
                </div>
            </div>
            <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">
                    {title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
