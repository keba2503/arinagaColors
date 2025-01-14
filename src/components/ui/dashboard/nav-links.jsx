'use client';

import React from 'react';
import {
  QuestionMarkCircleIcon,
  BookOpenIcon,
  HomeIcon,
  PhotoIcon,
  ArrowLeftOnRectangleIcon,
  CogIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Home', href: '/admin', icon: HomeIcon },
  { name: 'Secciones configurables', href: '/admin/config', icon: CogIcon },
  { name: 'Guía del huésped', href: '/admin/guide', icon: BookOpenIcon },
  { name: 'Gran Canaria - Eventos', href: '/admin/event', icon: SparklesIcon },
  {
    name: 'Gran Canaria - Sitios de interes',
    href: '/admin/places',
    icon: SparklesIcon,
  },
  {
    name: 'Playa de Arinaga - Eventos',
    href: '/admin/eventArinaga',
    icon: SparklesIcon,
  },
  {
    name: 'Playa de Arinaga - Sitios de interes',
    href: '/admin/placesArinaga',
    icon: SparklesIcon,
  },
  { name: 'FAQ', href: '/admin/faq', icon: QuestionMarkCircleIcon },
  { name: 'Gallery', href: '/admin/gallery', icon: PhotoIcon },
  { name: 'Imagenes Home', href: '/admin/hero', icon: PhotoIcon },
  { name: 'Vista del cliente', href: '/', icon: ArrowLeftOnRectangleIcon },
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
            href={link.href}
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
