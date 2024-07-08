'use client';

import Logo from '@/shared/Logo';
import SocialsList1 from '@/shared/SocialsList1';
import { CustomLink } from '@/data/types';
import React from 'react';
import FooterNav from './FooterNav';

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

const widgetMenus: WidgetFooterMenu[] = [];

const Footer: React.FC = () => {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-2 space-y-2">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                key={index}
                className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <FooterNav />
      <div className="nc-Footer relative py-10 lg:py-10 border-t border-neutral-200 dark:border-neutral-700">
        <div className="container mx-auto px-2 flex flex-col items-center gap-2 max-w-6xl">
          <div className="flex items-center mb-4">
            <Logo />
          </div>
          <div className="flex items-center mb-4">
            <SocialsList1 className="flex items-center space-x-3" />
          </div>
          <div className="flex flex-col items-center gap-4 w-full">
            {widgetMenus.map(renderWidgetMenuItem)}
          </div>
        </div>
      </div>
      <div className="text-center py-2">&copy; 2024, Karen Borrero</div>
    </>
  );
};

export default Footer;
