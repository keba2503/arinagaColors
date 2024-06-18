'use client';

import { usePathname } from 'next/navigation';
import SiteHeader from '../app/(client-components)/(Header)/SiteHeader';

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const isDashboard = pathname.startsWith('/dashboard');

    return (
        <>
            {!isDashboard && <SiteHeader />}
            {children}
        </>
    );
};

export default ClientWrapper;
