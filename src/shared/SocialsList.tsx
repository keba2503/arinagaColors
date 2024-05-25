import { SocialType } from "@/shared/SocialsShare";
import React, { FC } from "react";

export interface SocialsListProps {
  className?: string;
  itemClass?: string;
  socials?: SocialType[];
}

const socialsDemo: SocialType[] = [
  { name: "Youtube", icon: "lab la-youtube", href: "#" },
  { name: "Instagram", icon: "lab la-instagram", href: "#" },
];

const SocialsList: FC<SocialsListProps> = ({
  className = "",
  itemClass = "block",
  socials = socialsDemo,
}) => {
  return (
    <nav className={`self-center text-2xl md:text-3xl w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-300 focus:outline-none flex items-center justify-center ${className}`}
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
