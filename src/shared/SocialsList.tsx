import { SocialType } from '@/shared/SocialsShare';
import React, { FC } from 'react';

export interface SocialsListProps {
  className?: string;
  itemClass?: string;
  socials?: SocialType[];
}

const socialsDemo: SocialType[] = [
  {
    name: 'Whatsapp',
    icon: 'lab la-whatsapp',
    href: 'https://api.whatsapp.com/send/?phone=34640088144',
  },
  {
    name: 'Telegram',
    icon: 'lab la-telegram',
    href: 'https://t.me/34640088144',
  },
  {
    name: 'Instagram',
    icon: 'lab la-instagram',
    href: 'https://www.instagram.com/arinagacolors',
  },
  {
    name: 'Youtube',
    icon: 'lab la-youtube',
    href: 'https://www.youtube.com/@arinagacolors',
  },
];

const SocialsList: FC<SocialsListProps> = ({
  className = '',
  socials = socialsDemo,
}) => {
  return (
    <nav
      className={`self-center text-2xl md:text-2xl w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-300 focus:outline-none flex items-center justify-center pr-6 ${className}`}
      data-nc-id="SocialsList"
    >
      {socials.map((item, i) => (
        <a
          key={i}
          className={`hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none ${className}`}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          title={item.name}
        >
          <i className={item.icon}></i>
        </a>
      ))}
    </nav>
  );
};

export default SocialsList;
