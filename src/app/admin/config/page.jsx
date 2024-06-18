'use client';

import React, { useState } from 'react';
import TabsComponent from '../../../components/TabsConfigComponent';
import TableTextConfig from '../../../components/TableTextConfig';
import FormTextConfig from '../../../components/FormTextConfig';

const Config = () => {
    const [scopeId, setScopeId] = useState('');

    const handleScopeChange = (newScopeId) => {
        setScopeId(newScopeId);
    };

    return (
        <main className="flex flex-col items-center p-2 md:p-4 lg:p-6 min-h-screen">
            <div className="w-full max-w-7xl">
                <h1 className="mb-4 text-2xl md:text-3xl text-center">
                    Textos configurables
                </h1>
                <TabsComponent />
            </div>
        </main>
    );
};

export default Config;
