'use client';

import React, { FC } from 'react';
import StaySearchForm from './(stay-search-form)/StaySearchForm';

export interface HeroSearchFormProps {
  className?: string;
}

const HeroSearchForm: FC<HeroSearchFormProps> = ({ className = '' }) => {
  return (
    <div className={`nc-HeroSearchForm  max-w-7xl py-1 lg:py-0 ${className}`}>
      <StaySearchForm />
    </div>
  );
};

export default HeroSearchForm;
