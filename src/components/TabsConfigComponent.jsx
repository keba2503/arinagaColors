import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SectionAbout from './admin/Forms/SectionAbout';
import SectionFaq from './admin/Forms/SectionFaq';
import SectionGuide from './admin/Forms/SectionGuide';
import SectionHero from './admin/Forms/SectionHero';
import SectionOurFeatures from './admin/Forms/SectionOurFeatures';
import SectionService from './admin/Forms/SectionService';
import TableTextConfig from "./admin/Tables/TableTextConfig";
import SectionCardService from "./admin/Forms/SectionCardService";

const TabsComponent = () => {
    const [scopes, setScopes] = useState([]);
    const [activeTab, setActiveTab] = useState('');

    useEffect(() => {
        const fetchScopes = async () => {
            try {
                const response = await axios.get('/api/scope');
                setScopes(response.data);
                if (response.data.length > 0) {
                    setActiveTab(response.data[0].id);
                }
            } catch (error) {
                console.error('Error fetching scopes:', error);
            }
        };

        fetchScopes();
    }, []);

    const componentMapping = {
        8: SectionAbout,
        10: SectionFaq,
        9: SectionGuide,
        2: SectionHero,
        3: SectionOurFeatures,
        7: SectionService,
        11: SectionCardService,
    };

    const ActiveComponent = componentMapping[activeTab] || null;

    return (
        <>
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                {scopes.map((scope) => (
                    <li className="me-2" key={scope.id}>
                        <a
                            href="#"
                            onClick={() => setActiveTab(scope.id)}
                            className={`inline-block p-4 rounded-t-lg ${
                                activeTab === scope.id
                                    ? 'text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500'
                                    : 'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'
                            }`}
                        >
                            {scope.name}
                        </a>
                    </li>
                ))}
            </ul>
            {ActiveComponent && <ActiveComponent scope={activeTab} />}
            <TableTextConfig scope={activeTab} />
        </>
    );
};

export default TabsComponent;
