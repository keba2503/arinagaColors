import React from 'react';
import Image, { StaticImageData } from 'next/image';
import logoImg from '@/images/logos/6.png';
import logoLightImg from '@/images/logo-light.png';
import Link from 'next/link';

export interface LogoProps {
  img?: StaticImageData;
  imgLight?: StaticImageData;
  className?: string;
  height?: string;
  width?: string;
}

const Logo: React.FC<LogoProps> = ({
  img = logoImg,
  imgLight = logoLightImg,
  className = '',
  height = '80',
  width = '80',
}) => {
  return (
    <Link
      href="/"
      className={`ttnc-logo inline-block focus:outline-none focus:ring-0 ${className}`}
    >
      {img ? (
        <div className={`block max-h-full ${imgLight ? 'dark:hidden' : ''}`}>
          <Image
            src={img}
            alt="Logo"
            width={parseInt(width)}
            height={parseInt(height)}
            style={{
              maxHeight: '100%',
              maxWidth: '100%',
              height: 'auto',
              width: 'auto',
            }}
          />
        </div>
      ) : (
        'Logo Here'
      )}
      {imgLight && (
        <div className="hidden max-h-full dark:block">
          <Image
            src={imgLight}
            alt="Logo-Light"
            width={parseInt(width)}
            height={parseInt(height)}
            style={{
              maxHeight: '100%',
              maxWidth: '100%',
              height: 'auto',
              width: 'auto',
            }}
          />
        </div>
      )}
    </Link>
  );
};

export default Logo;
