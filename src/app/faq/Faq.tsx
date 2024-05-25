import React, { useState } from 'react';

const FAQAccordion = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "¿Cuál es el procedimiento para reservar un apartamento?",
            answer: "Puede reservar su apartamento directamente a través de nuestro sitio web, donde encontrará un calendario de disponibilidad y podrá realizar el pago de forma segura.",
        },
        {
            question: "¿Cuál es la política de cancelación?",
            answer: "Las cancelaciones realizadas con al menos 30 días de antelación recibirán un reembolso completo. Las cancelaciones realizadas entre 30 y 14 días antes de la llegada recibirán un reembolso del 50%. No se realizarán reembolsos para cancelaciones hechas con menos de 14 días de antelación.",
        },
        {
            question: "¿Se permite la estancia de mascotas en los apartamentos?",
            answer: "Sí, algunos de nuestros apartamentos permiten mascotas. Por favor, verifique la política de mascotas específica del apartamento antes de hacer la reserva.",
        },
        {
            question: "¿Qué servicios están incluidos en el precio del alquiler?",
            answer: "El precio del alquiler incluye todos los servicios básicos como agua, electricidad, internet Wi-Fi, ropa de cama y toallas. Algunos apartamentos también incluyen servicios adicionales como limpieza semanal.",
        },
        {
            question: "¿Hay estacionamiento disponible?",
            answer: "Sí, la mayoría de nuestros apartamentos disponen de estacionamiento gratuito. Asegúrese de verificar la disponibilidad de estacionamiento en la descripción del apartamento.",
        },
        {
            question: "¿A qué hora es el check-in y el check-out?",
            answer: "El check-in se realiza a partir de las 15:00 horas y el check-out debe hacerse antes de las 11:00 horas. Si necesita horarios diferentes, por favor contáctenos y haremos todo lo posible por acomodar sus necesidades.",
        },
        {
            question: "¿Hay opciones de transporte público cerca del apartamento?",
            answer: "Sí, la mayoría de nuestros apartamentos están ubicados cerca de paradas de autobús y estaciones de taxi, facilitando el acceso a las principales atracciones de Gran Canaria.",
        },
        {
            question: "¿Se proporciona cuna o silla alta para bebés?",
            answer: "Sí, bajo petición podemos proporcionar una cuna y una silla alta para bebés sin coste adicional. Por favor, infórmenos con antelación para asegurarnos de que estén disponibles.",
        },
        {
            question: "¿Qué métodos de pago aceptan?",
            answer: "Aceptamos tarjetas de crédito y débito (Visa, MasterCard), transferencias bancarias y pagos a través de plataformas seguras como PayPal.",
        }
    ];

    return (
        <div className="w-full max-w-6xl mx-auto pt-12 p-6">
            {faqs.map((faq, index) => (
                <div key={index} className="mb-4 border-b">
                    <button
                        className="text-neutral-800 w-full text-left flex justify-between items-center p-4 focus:outline-none"
                        onClick={() => toggleAccordion(index)}
                    >
                        <span>{faq.question}</span>
                        <svg
                            className={`w-6 h-6 transform transition-transform ${
                                activeIndex === index ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            ></path>
                        </svg>
                    </button>
                    {activeIndex === index && (
                        <div className="text-neutral-500 dark:text-neutral-300 pb-3 text-justify p-4">
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FAQAccordion;
