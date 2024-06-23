'use client'

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import SectionAbout from '../../../../components/admin/Forms/SectionAbout';
import SectionFaq from '../../../../components/admin/Forms/SectionFaq';
import SectionGuide from '../../../../components/admin/Forms/SectionGuide';
import SectionHero from '../../../../components/admin/Forms/SectionHero';
import SectionService from '../../../../components/admin/Forms/SectionService';
import SectionCardService from '../../../../components/admin/Forms/SectionCardService';
import SectionOurFeatures from '../../../../components/admin/Forms/SectionOurFeatures';
import SectionCardOffer from "../../../../components/admin/Forms/SectionCardOffer";

// Mapeo de componentes según scope
const componentMapping = {
    8: SectionAbout,
    10: SectionFaq,
    9: SectionGuide,
    2: SectionHero,
    3: SectionOurFeatures,
    7: SectionService,
    11: SectionCardService,
    12: SectionCardOffer,
};

const ConfigIdPage = ({ params }) => {
    const searchParams = useSearchParams();
    const { id } = params;
    const scope = searchParams.get('scope') || '';

    const [data, setData] = useState(null);

    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                try {
                    const response = await fetch(`/api/config/${id}`);
                    if (response.ok) {
                        const result = await response.json();
                        setData(result);
                    } else {
                        console.error('Failed to fetch data:', response.statusText);
                    }
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };

            fetchData();
        }
    }, [id]);

    // Convertir scope a número para el mapeo
    const numericScope = parseInt(scope, 10);
    const ActiveComponent = componentMapping[numericScope] || null;

    // Mensajes de depuración
    console.log(`Scope recibido: ${scope}`);
    console.log(`Scope convertido a numérico: ${numericScope}`);
    console.log(`Componente activo encontrado: ${ActiveComponent ? ActiveComponent.name : 'Ninguno'}`);
    console.log(`Datos cargados: ${data ? JSON.stringify(data) : 'No data'}`);

    if (!ActiveComponent) {
        console.error(`Componente no encontrado para el scope: ${scope}`);
    }

    return (
        <>
            {ActiveComponent ? <ActiveComponent scope={scope} data={data} /> : <p>Componente no encontrado para el scope: {scope}</p>}
        </>
    );
};

export default ConfigIdPage;
