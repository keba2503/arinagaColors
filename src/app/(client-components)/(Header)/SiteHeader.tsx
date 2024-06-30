'use client';

import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import { useThemeMode } from '@/utils/useThemeMode';

const SiteHeader = () => {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    setIsTopOfPage(window.pageYOffset < 5);
    const handleScroll = () => {
      setIsTopOfPage(window.pageYOffset < 5);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useThemeMode();

  const headerClassName = isTopOfPage
    ? ''
    : 'shadow-sm dark:border-b dark:border-neutral-700';

  return (
    <>
      <div className="ControlSelections relative z-40 hidden lg:block"></div>
      <Header className={headerClassName} />
      <div ref={anchorRef} className="h-1 absolute invisible"></div>
    </>
  );
};

export default SiteHeader;
