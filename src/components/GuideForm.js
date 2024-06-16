// components/GuideForm.js
'use client';

import React, { useState } from 'react';
import RichTextEditor from '@/components/RichTextEditor';

const GuideForm = () => {
    const [description, setDescription] = useState('');

    return (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-5">
                <label htmlFor="title-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Título
                </label>
                <input
                    type="text"
                    id="title-input"
                    className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div className="mb-5">
                <label htmlFor="description-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Descripción
                </label>
                <RichTextEditor
                    value={description}
                    onChange={setDescription}
                />
            </div>
            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
};

export default GuideForm;