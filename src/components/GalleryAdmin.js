'use client';

import { useState } from 'react';

const GalleryAdmin = ({ images }) => {
    const [gallery, setGallery] = useState(images);

    const handleDelete = async (imageId) => {
        const res = await fetch(`/api/delete/${imageId}`, {
            method: 'DELETE',
        });

        if (res.ok) {
            setGallery(gallery.filter(image => image.id !== imageId));
        }
    };

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
            {gallery.map((image) => (
                <div key={image.id} className="relative">
                    <img className="h-auto max-w-full rounded-lg" src={image.url} alt="" />
                    <button
                        onClick={() => handleDelete(image.id)}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-4 h-4"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4v4m4-4v4M1 7h22" />
                        </svg>
                    </button>
                </div>
            ))}
        </div>
    );
};

export default GalleryAdmin;
