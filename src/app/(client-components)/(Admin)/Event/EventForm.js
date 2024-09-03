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

const EventForm = ({ event }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [fullDescription, setFullDescription] = useState('');
  const [exactLocation, setExactLocation] = useState('');
  const [mainActivities, setMainActivities] = useState('');
  const [recommendations, setRecommendations] = useState('');
  const [moreInfoLink, setMoreInfoLink] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [oldImagePublicId, setOldImagePublicId] = useState('');

  useEffect(() => {
    if (event) {
      const formattedDate = event.date
        ? new Date(event.date).toISOString().slice(0, 16)
        : '';
      setDate(formattedDate);
      setName(event.name);
      setLocation(event.location);
      setDescription(event.description);
      setImagePreview(event.image);
      setFullDescription(event.fullDescription);
      setExactLocation(event.exactLocation);
      setMainActivities(event.mainActivities);
      setRecommendations(event.recommendations);
      setMoreInfoLink(event.moreInfoLink);

      // Extract the public_id from the image URL
      if (event.image) {
        const urlParts = event.image.split('/image/upload/');
        if (urlParts.length > 1) {
          const publicIdWithExtension = urlParts[1].split('.')[0];
          const finalPublicId = publicIdWithExtension.replace(
            /^.*\/arinagacolors\/event\//,
            '',
          );
          setOldImagePublicId(finalPublicId);
        }
      }
    }
  }, [event]);

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

    if (image) {
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset', 'ml_default');
      formData.append('folder', 'arinagacolors/event');

      try {
        const res = await axios.post(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          formData,
        );
        imageUrl = res.data.secure_url;

        // Delete the old image if it exists
        if (oldImagePublicId) {
          console.log(`Deleting old image with public_id: ${oldImagePublicId}`);
          try {
            await axios.delete('/api/cloudinaryEvent', {
              headers: { 'Content-Type': 'application/json' },
              data: { public_id: `arinagacolors/event/${oldImagePublicId}` },
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

    const eventData = {
      name,
      date,
      location,
      description,
      image: imageUrl,
      fullDescription,
      exactLocation,
      mainActivities,
      recommendations,
      moreInfoLink,
    };

    try {
      const response = await fetch(`/api/event/${event ? event.id : ''}`, {
        method: event ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });

      if (response.ok) {
        await response.json();
        setSuccessMessage('¡Evento guardado correctamente!');
        if (!event) {
          // Reset form for new event
          setName('');
          setDate('');
          setLocation('');
          setDescription('');
          setImage(null);
          setImagePreview('');
          setFullDescription('');
          setExactLocation('');
          setMainActivities('');
          setRecommendations('');
          setMoreInfoLink('');
        } else {
          // Update oldImagePublicId with the new image's public_id if needed
          if (image) {
            setOldImagePublicId(imageUrl.split('/').pop().split('.')[0]);
          }
        }
      } else {
        console.error('Error saving event:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving event:', error);
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
          htmlFor="name-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Nombre
        </label>
        <input
          type="text"
          id="name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="date-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Fecha
        </label>
        <input
          type="datetime-local"
          id="date-input"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
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
            {event && event.image ? 'Cambiar imagen' : 'Seleccionar imagen'}
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
          href="/admin/event"
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

EventForm.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    date: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    fullDescription: PropTypes.string,
    exactLocation: PropTypes.string,
    mainActivities: PropTypes.string,
    recommendations: PropTypes.string,
    moreInfoLink: PropTypes.string,
  }),
};

export default EventForm;
