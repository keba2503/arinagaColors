'use client';

import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import parse from 'html-react-parser';
import Heading from "@/shared/Heading";

interface Promotion {
    title: string;
    description: string;
    subtitle: string;
}

const RichTextEditor = dynamic(() => import('@/components/RichTextEditor'), {ssr: false});

const Promotions: React.FC = () => {
    const [promotions, setPromotions] = useState<Promotion[]>([]);
    const [headerTitle, setHeaderTitle] = useState('');
    const [headerDescription, setHeaderDescription] = useState('');
    const promotionScopeId = 12;
    const headerScopeId = 13;

    useEffect(() => {
        const fetchPromotions = async () => {
            try {
                const response = await fetch('/api/config');
                const configData = await response.json();

                const filteredPromotions = configData.filter((item: any) => item.scope_id === promotionScopeId);
                const headerData = configData.find((item: any) => item.scope_id === headerScopeId);

                setPromotions(filteredPromotions);

                if (headerData) {
                    setHeaderTitle(headerData.title);
                    setHeaderDescription(headerData.description);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchPromotions();
    }, []);

    return (
        <div className="container mx-auto p-4 pb-32">
            <div className="relative bg-gradient-to-r from-blue-400 via-white to-yellow-400 text-white p-12 rounded-lg mb-12 max-w-full overflow-hidden mx-4">
                <div className="absolute inset-0 bg-black opacity-25 rounded-lg"></div>
                <div className="relative z-10">
                    <h2 className="text-4xl font-bold mb-4">{headerTitle}</h2>
                    <p className="text-lg">{parse(headerDescription)}</p>
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
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{parse(promotion.description)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Promotions;
