'use client';

import React from 'react';
import LoginForm from '../../components/ui/login-form';

const LoginPage = () => {
    const renderHeader = () => {
        return (
            <header className="container rounded-3xl px-4 lg:px-8">
                <div className="max-w-screen-lg mx-auto space-y-5">
                    <h1
                        className="text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-4xl dark:text-neutral-100 max-w-4xl"
                        title="Iniciar sesión"
                    >
                        Iniciar sesión
                    </h1>
                </div>
            </header>
        );
    };

    return (
        <div className="nc-PageSingle pt-8 lg:pt-16 flex items-center justify-center min-h-screen">
            <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;
