import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FormTextConfig from '../components/FormTextConfig';
import TableTextConfig from "./TableTextConfig";

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
            {activeTab && <FormTextConfig scope={activeTab} />}
            <TableTextConfig scope={activeTab} />
        </>
    );
};

export default TabsComponent;
