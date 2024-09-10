'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import axios from 'axios';
import Image from 'next/image';

const RichTextEditor = dynamic(() => import('src/components/RichTextEditor'), {
  ssr: false,
});

const PlaceForm = ({ place }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [location, setLocation] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [oldImagePublicId, setOldImagePublicId] = useState('');

  useEffect(() => {
    if (place) {
      setTitle(place.title);
      setDescription(place.description);
      setLocation(place.location);
      setImagePreview(place.imageUrl);

      if (place.imageUrl) {
        const urlParts = place.imageUrl.split('/image/upload/');
        if (urlParts.length > 1) {
          const publicIdWithExtension = urlParts[1].split('.')[0];
          const finalPublicId = publicIdWithExtension.replace(
            /^.*\/arinagacolors\/places\//,
            '',
          );
          setOldImagePublicId(finalPublicId);
        }
      }
    }
  }, [place]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');

    let imageUrl = imagePreview;

    // Upload image to Cloudinary if a new one is selected
    if (imageUrl) {
      const formData = new FormData();
      formData.append('file', imageUrl);
      formData.append('upload_preset', 'ml_default');
      formData.append('folder', 'arinagacolors/places');

      try {
        const res = await axios.post(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          formData,
        );
        imageUrl = res.data.secure_url;

        if (oldImagePublicId) {
          try {
            await axios.delete('/api/cloudinaryPlaces', {
              headers: { 'Content-Type': 'application/json' },
              data: { public_id: `arinagacolors/places/${oldImagePublicId}` },
            });
          } catch (error) {
            console.error('Error deleting the old image:', error);
          }
        }
      } catch (error) {
        console.error('Error uploading the image:', error);
        setIsSubmitting(false);
        setSuccessMessage('Hubo un error al subir la imagen');
        return;
      }
    }

    // Data to send to the API
    const placeData = {
      title,
      description,
      imageUrl: imageUrl,
      location,
    };

    try {
      const response = await fetch(
        `/api/places${place ? `/${place.id}` : ''}`,
        {
          method: place ? 'PUT' : 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(placeData),
        },
      );

      if (response.ok) {
        await response.json();
        setSuccessMessage('¡Lugar guardado correctamente!');
        if (!place) {
          setTitle('');
          setDescription('');
          setImage(null);
          setImagePreview('');
          setLocation('');
        } else if (image) {
          setOldImagePublicId(imageUrl.split('/').pop().split('.')[0]);
        }
      } else {
        const errorData = await response.json();
        console.error('Error saving place:', response.status, errorData);
      }
    } catch (error) {
      console.error('Error saving place:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={handleSubmit}
    >
      {/* Form fields */}
      <div className="mb-5">
        <label
          htmlFor="title-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Título
        </label>
        <input
          type="text"
          id="title-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="description-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Descripción
        </label>
        <RichTextEditor value={description} onChange={setDescription} />
      </div>

      <div className="mb-5">
        <label
          htmlFor="image-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Imagen
        </label>
        <div className="flex items-center">
          <input
            type="file"
            id="image-input"
            onChange={handleFileChange}
            className="hidden"
          />
          <label
            htmlFor="image-input"
            className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {place && place.imageUrl ? 'Cambiar imagen' : 'Seleccionar imagen'}
          </label>
          {imagePreview && (
            <div className="ml-4">
              <Image
                src={imagePreview}
                alt="Vista previa"
                width={80}
                height={80}
                className="h-20 w-20 object-cover rounded border"
              />
            </div>
          )}
        </div>
      </div>

      <div className="mb-5">
        <label
          htmlFor="location-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Ubicación
        </label>
        <input
          type="text"
          id="location-input"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Guardando...' : 'Guardar'}
        </button>
        <Link
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          href="/admin/place"
        >
          Volver
        </Link>
      </div>
      {successMessage && (
        <div className="mt-4 text-green-500">{successMessage}</div>
      )}
    </form>
  );
};

PlaceForm.propTypes = {
  place: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    location: PropTypes.string,
  }),
};

export default PlaceForm;
