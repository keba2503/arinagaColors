'use client';

import { HomeIcon, CalendarIcon } from '@heroicons/react/24/outline';
import React, { useContext, useEffect, useState } from 'react';
import { PathName } from '@/routers/types';
import MenuBar from '@/shared/MenuBar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LanguageContext } from '@/context/LanguageContext';
import { translateText } from '@/utils/translate';

interface NavItem {
  name: string;
  link?: PathName;
  icon: React.ElementType;
}

const NAV_ITEMS: NavItem[] = [
  {
    name: 'Inicio',
    link: '/',
    icon: HomeIcon,
  },
  {
    name: 'Reservar',
    link: '/booking',
    icon: CalendarIcon,
  },
  {
    name: 'Menu',
    icon: MenuBar,
  },
];

const FooterNav = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('LanguageContext must be used within a LanguageProvider');
  }

  const { language } = context;
  const pathname = usePathname();
  const [translatedNavItems, setTranslatedNavItems] =
    useState<NavItem[]>(NAV_ITEMS);

  useEffect(() => {
    const translateNavItems = async () => {
      try {
        const translatedItems = await Promise.all(
          NAV_ITEMS.map(async (item) => ({
            ...item,
            name: await translateText(item.name, language),
          })),
        );
        setTranslatedNavItems(translatedItems);
      } catch (error) {
        console.error('Error translating nav items:', error);
      }
    };

    translateNavItems();
  }, [language]);

  const renderItem = (item: NavItem, index: number) => {
    const isActive = pathname === item.link;

    return item.link ? (
      <Link
        key={index}
        href={item.link}
        className={`flex flex-col items-center justify-between text-neutral-500 dark:text-neutral-300/90 ${
          isActive ? 'text-neutral-900 dark:text-neutral-100' : ''
        }`}
      >
        <item.icon className={`w-6 h-6 ${isActive ? 'text-red-600' : ''}`} />
        <span
          className={`text-[11px] leading-none mt-1 ${
            isActive ? 'text-red-600' : ''
          }`}
        >
          {item.name}
        </span>
      </Link>
    ) : (
      <div
        key={index}
        className={`flex flex-col items-center justify-between text-neutral-500 dark:text-neutral-300/90 ${
          isActive ? 'text-neutral-900 dark:text-neutral-100' : ''
        }`}
      >
        <item.icon className="w-6 h-6" />
        <span className="text-[11px] leading-none mt-1">{item.name}</span>
      </div>
    );
  };

  return (
    <div className="FooterNav block md:!hidden p-2 bg-white dark:bg-neutral-800 fixed bottom-0 inset-x-0 z-30 border-t border-neutral-300 dark:border-neutral-700">
      <div className="w-full max-w-lg flex justify-around mx-auto text-sm text-center ">
        {translatedNavItems.map(renderItem)}
      </div>
    </div>
  );
};

export default FooterNav;
