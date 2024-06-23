'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const RichTextEditor = dynamic(() => import('@/components/RichTextEditor'), { ssr: false });

const SectionCardService = ({ scope, data }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [feedbackMessage, setFeedbackMessage] = useState('');

    const isEditMode = !!data;

    useEffect(() => {
        if (data) {
            setTitle(data.title);
            setDescription(data.description);
        }
    }, [data]);

    const handleSave = async (e) => {
        e.preventDefault();
        const payload = {
            scope_id: parseInt(scope, 10),
            title,
            description,
        };

        try {
            const response = isEditMode
                ? await fetch(`/api/config/${data.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                })
                : await fetch('/api/config', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            setFeedbackMessage('Se ha guardado correctamente, actualiza para ver los cambios.');
            if (!isEditMode) {
                setTitle('');
                setDescription('');
            }
            setTimeout(() => setFeedbackMessage(''), 5000);
        } catch (error) {
            console.error('Error saving data:', error);
            setFeedbackMessage('Failed to save data.');
            setTimeout(() => setFeedbackMessage(''), 5000);
        }
    };

    return (
        <form className="max-w-4xl mx-auto mb-10 mt-10 p-4" onSubmit={handleSave}>
            <div className="mb-5">
                <label htmlFor="scope-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Id De la sección</label>
                <input
                    type="text"
                    id="scope-input"
                    value={scope}
                    readOnly
                    className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-200 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div className="mb-5">
                <label htmlFor="title-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titulo</label>
                <input
                    type="text"
                    id="title-input"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div className="mb-5">
                <label htmlFor="description-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripción</label>
                <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <RichTextEditor
                        value={description}
                        onChange={setDescription}
                    />
                </div>
            </div>
            {feedbackMessage && (
                <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg" role="alert">
                    {feedbackMessage}
                </div>
            )}
            <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Guardar
            </button>
        </form>
    );
};

export default SectionCardService;
