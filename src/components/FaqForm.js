// components/GuideForm.js
'use client'; // Esta línea indica que este archivo se ejecuta en el cliente

import React, { useState } from 'react';
import RichTextEditor from '@/components/RichTextEditor';

const GuideForm = () => {
    const [description, setDescription] = useState('');
    const [answer, setAnswer] = useState('');


    return (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-5">
                <label htmlFor="description-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Pregunta
                </label>
                <RichTextEditor
                    value={answer}
                    onChange={setAnswer}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="description-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Respuesta
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
