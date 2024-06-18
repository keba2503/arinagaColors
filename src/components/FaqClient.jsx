'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import GuideForm from '@/components/FaqForm';

const FaqClient = ({ id }) => {
    const [faq, setFaq] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchGuide = async () => {
            if (id) {
                try {
                    const response = await fetch(`/api/faq/${id}`);
                    if (response.ok) {
                        const data = await response.json();
                        setFaq(data);
                    } else {
                        console.error('Error fetching faq:', response.statusText);
                    }
                } catch (error) {
                    console.error('Error fetching faq:', error);
                } finally {
                    setIsLoading(false);
                }
            }
        };

        fetchGuide();
    }, [id]);

    const handleBack = () => {
        router.push('/admin/faq');
    };

    return (
        <main className="flex flex-col items-center p-2 md:p-4 lg:p-6 min-h-screen">
            <div className="w-full max-w-7xl">
                <div className="flex justify-between mb-4">
                    <h1 className="text-2xl md:text-3xl text-center flex-1">
                        {faq ? 'Editar Guía del huésped' : 'Crear Guía del huésped'}
                    </h1>

                </div>
                {isLoading ? (
                    <p>Cargando...</p>
                ) : (
                    <GuideForm faq={faq} />
                )}
            </div>
        </main>
    );
};

export default FaqClient;
