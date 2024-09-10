'use client';

import React, { useState, useContext, useEffect } from 'react';
import Image from 'next/image';
import SocialsList from '@/shared/SocialsList';
import Label from '@/components/Label';
import Input from '@/shared/Input';
import Textarea from '@/shared/Textarea';
import ButtonPrimary from '@/shared/ButtonPrimary';
import ArinagaImage from '../../images/arinaga.jpeg';
import { LanguageContext } from '@/context/LanguageContext';
import { translateText } from '@/utils/translate'; // Función de traducción

const PageContact = () => {
  const { language } = useContext(LanguageContext); // Obtener el idioma actual
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const [translatedTexts, setTranslatedTexts] = useState({
    title: '',
    description: '',
    formTitle: '',
    nameLabel: '',
    emailLabel: '',
    messageLabel: '',
    sendButton: '',
    successMessage: '',
    errorMessage: '',
    addressTitle: '',
    addressDesc: '',
    emailTitle: '',
    emailDesc: '',
    socialTitle: '',
  });

  useEffect(() => {
    // Traducir el contenido estático
    const fetchTranslations = async () => {
      const translatedTitle = await translateText(
        'Contacta con nosotros',
        language,
      );
      const translatedDescription = await translateText(
        'Estamos aquí para resolver cualquier duda o consulta que tengas. No dudes en contactarnos para obtener más información sobre nuestros apartamentos vacacionales, tarifas y disponibilidad.',
        language,
      );
      const translatedFormTitle = await translateText(
        'Formulario de contacto',
        language,
      );
      const translatedNameLabel = await translateText(
        'Nombre completo',
        language,
      );
      const translatedEmailLabel = await translateText(
        'Dirección de correo',
        language,
      );
      const translatedMessageLabel = await translateText('Mensaje', language);
      const translatedSendButton = await translateText(
        'Enviar mensaje',
        language,
      );
      const translatedSuccessMessage = await translateText(
        'Mensaje enviado con éxito!',
        language,
      );
      const translatedErrorMessage = await translateText(
        'Error al enviar el mensaje.',
        language,
      );
      const translatedAddressTitle = await translateText('Dirección', language);
      const translatedAddressDesc = await translateText(
        'Playa de Arinaga, Las Palmas, España',
        language,
      );
      const translatedEmailTitle = await translateText(
        'Correo electrónico',
        language,
      );
      const translatedEmailDesc = await translateText(
        'arinagacolors@gmail.com',
        language,
      );
      const translatedSocialTitle = await translateText(
        'Redes sociales',
        language,
      );

      setTranslatedTexts({
        title: translatedTitle,
        description: translatedDescription,
        formTitle: translatedFormTitle,
        nameLabel: translatedNameLabel,
        emailLabel: translatedEmailLabel,
        messageLabel: translatedMessageLabel,
        sendButton: translatedSendButton,
        successMessage: translatedSuccessMessage,
        errorMessage: translatedErrorMessage,
        addressTitle: translatedAddressTitle,
        addressDesc: translatedAddressDesc,
        emailTitle: translatedEmailTitle,
        emailDesc: translatedEmailDesc,
        socialTitle: translatedSocialTitle,
      });
    };

    fetchTranslations();
  }, [language]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/sendmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (result.success) {
      setResponseMessage(translatedTexts.successMessage);
      setIsError(false);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } else {
      setResponseMessage(translatedTexts.errorMessage);
      setIsError(true);
    }

    // Ocultar el mensaje de respuesta después de 3 segundos
    setTimeout(() => {
      setResponseMessage('');
    }, 3000);
  };

  return (
    <div className="nc-PageContact overflow-hidden">
      <div className="mb-24 lg:mb-32">
        <div className="container max-w-10xl mx-auto pt-10 flex flex-col md:flex-row bg-white rounded-lg h-full">
          <div className="relative md:w-1/2 flex flex-col justify-center shadow-lg rounded-bl-2xl rounded-tl-2xl overflow-hidden">
            <Image
              src={ArinagaImage}
              alt="Playa de Arinaga"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="absolute inset-0 z-0"
            />
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <div className="relative p-10 z-20 text-white">
              <h2 className="text-2xl font-semibold mb-4">
                {translatedTexts.title}
              </h2>
              <p className="mb-8">{translatedTexts.description}</p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <span className="text-3xl">📍</span>
                  <div>
                    <h3 className="uppercase font-semibold text-sm tracking-wider">
                      {translatedTexts.addressTitle}
                    </h3>
                    <span className="block mt-2 text-white">
                      {translatedTexts.addressDesc}
                    </span>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-3xl">✉️</span>
                  <div>
                    <h3 className="uppercase font-semibold text-sm tracking-wider">
                      {translatedTexts.emailTitle}
                    </h3>
                    <span className="block mt-2 text-white">
                      {translatedTexts.emailDesc}
                    </span>
                  </div>
                </div>
              </div>
              <h3 className="uppercase font-semibold text-sm tracking-wider mt-8">
                {translatedTexts.socialTitle}
              </h3>
              <div className="pl-10 mt-2">
                <SocialsList className="text-white" />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-10 shadow-lg rounded-tr-2xl rounded-br-2xl">
            <h2 className="text-2xl font-semibold mb-6">
              {translatedTexts.formTitle}
            </h2>
            <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
              <label className="block">
                <Label>{translatedTexts.nameLabel}</Label>
                <Input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1"
                />
              </label>
              <label className="block">
                <Label>{translatedTexts.emailLabel}</Label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1"
                />
              </label>
              <label className="block">
                <Label>{translatedTexts.messageLabel}</Label>
                <Textarea
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1"
                />
              </label>
              <div>
                <ButtonPrimary type="submit">
                  {translatedTexts.sendButton}
                </ButtonPrimary>
              </div>
            </form>
            {responseMessage && (
              <p
                className={`mt-4 ${isError ? 'text-red-500' : 'text-green-500'}`}
              >
                {responseMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContact;
