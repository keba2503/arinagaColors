'use client';

import { QuestionMarkCircleIcon ,BookOpenIcon ,HomeIcon, PhotoIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    { name: 'Home', href: '/dashboard', icon: HomeIcon },
    { name: 'Guía del huésped', href: '/dashboard/guide', icon: BookOpenIcon },
    { name: 'FAQ', href: '/dashboard/faq', icon: QuestionMarkCircleIcon },
    { name: 'Gallery', href: '/dashboard/gallery', icon: PhotoIcon },
    { name: 'Vista del cliente', href: '/', icon: ArrowLeftOnRectangleIcon }
];

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href as any}
                        className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3
                        ${pathname === link.href ? 'bg-sky-100 text-blue-600' : ''}
                        `}
                    >
                        <LinkIcon className="w-6" />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}
