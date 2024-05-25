import React, { useState } from 'react';

const GuideAccordion = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const guide = [
        {
            title: "Bienvenida",
            content: "Bienvenido a nuestro apartamento de alquiler. Esperamos que disfrute de su estancia. Por favor, lea atentamente esta guía para familiarizarse con las normas y las facilidades del apartamento."
        },
        {
            title: "Normas de Limpieza",
            content: "Durante su estancia, por favor mantenga el apartamento limpio y ordenado. Antes de su salida, asegúrese de que los utensilios de cocina estén limpios y en su lugar, saque la basura y deje los muebles en su posición original. Se cobrará una tarifa adicional si el apartamento se deja en condiciones insatisfactorias."
        },
        {
            title: "Uso de Electrodomésticos",
            content: "El apartamento está equipado con varios electrodomésticos para su comodidad. Por favor, siga estas instrucciones para su uso seguro y eficiente:\n- **Lavadora**: Use detergente adecuado y no sobrecargue la máquina.\n- **Lavavajillas**: Utilice solo detergente específico para lavavajillas y asegúrese de cargar correctamente los platos.\n- **Microondas y Horno**: No utilice recipientes metálicos en el microondas y asegúrese de apagar el horno después de usarlo.\n- **Aire Acondicionado y Calefacción**: Por favor, apague estos aparatos cuando no esté en el apartamento para conservar energía."
        },
        {
            title: "Internet y Entretenimiento",
            content: "El apartamento incluye conexión a Internet Wi-Fi gratuita. La red se llama 'Apartment_WiFi' y la contraseña es 'welcome123'. También hay una televisión con acceso a canales locales e internacionales. Use el control remoto para navegar por los canales disponibles."
        },
        {
            title: "Política de Ruido",
            content: "Por favor, mantenga un nivel de ruido bajo, especialmente después de las 22:00 horas. Evite hacer ruidos fuertes que puedan molestar a los vecinos. Las fiestas y eventos ruidosos están estrictamente prohibidos."
        },
        {
            title: "Normas para Mascotas",
            content: "Si ha traído una mascota, asegúrese de seguir estas normas:\n- No permita que las mascotas suban a los muebles.\n- Saque a pasear a las mascotas fuera del apartamento y recoja sus desechos.\n- No deje a las mascotas solas en el apartamento por largos periodos de tiempo."
        },
        {
            title: "Check-in y Check-out",
            content: "El check-in se realiza a partir de las 15:00 horas. Si llega antes, puede dejar su equipaje en un lugar seguro hasta que el apartamento esté listo. El check-out debe realizarse antes de las 11:00 horas. Para salidas tardías, consulte la disponibilidad con antelación. Asegúrese de dejar las llaves en el lugar designado al momento de su salida."
        },
        {
            title: "Seguridad",
            content: "Por favor, mantenga las puertas y ventanas cerradas cuando no esté en el apartamento para asegurar su seguridad. En caso de emergencia, contacte a los servicios de emergencia locales al número 112 y notifíquenos de inmediato."
        },
        {
            title: "Gestión de Residuos",
            content: "Se proporcionan recipientes para la separación de residuos. Por favor, clasifique su basura adecuadamente:\n- **Reciclables**: Plásticos, vidrios y metales.\n- **Orgánicos**: Residuos de alimentos.\n- **No reciclables**: Restos generales. Deposite la basura en los contenedores correspondientes ubicados en la entrada del edificio."
        },
        {
            title: "Información de Contacto",
            content: "Si necesita asistencia durante su estancia, no dude en contactarnos:\n- **Teléfono de emergencia**: +34 123 456 789\n- **Correo electrónico**: support@apartments.com\nEstamos disponibles las 24 horas para ayudarle con cualquier necesidad que pueda tener."
        }
    ];


    return (
        <div className="w-full max-w-6xl mx-auto pt-12 p-6">
            {guide.map((faq, index) => (
                <div key={index} className="mb-4 border-b">
                    <button
                        className="text-neutral-800 w-full text-left flex justify-between items-center p-4 focus:outline-none"
                        onClick={() => toggleAccordion(index)}
                    >
                        <span>{faq.title}</span>
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
                            {faq.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default GuideAccordion;
