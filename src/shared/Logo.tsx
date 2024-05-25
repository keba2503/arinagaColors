import React from "react";
import logoImg from "@/images/logo.png";
import logoLightImg from "@/images/logo-light.png";
import Link from "next/link";
import { StaticImageData } from "next/image";

export interface LogoProps {
  img?: StaticImageData;
  imgLight?: StaticImageData;
  className?: string;
  logoSize?: string;
}

const Logo: React.FC<LogoProps> = ({img = logoImg,  imgLight = logoLightImg, className = "w-24",  logoSize = "100px" }) => {
  return (
      <Link
          href="/"
          className={`ttnc-logo inline-block text-primary-6000 focus:outline-none focus:ring-0 ${className}`}
      >
        {img ? (
            <img
                className={`block max-h-19 ${imgLight ? "dark:hidden" : ""}`}
                src={img.src}
                alt="Logo"
                style={{ height: logoSize }}
            />
        ) : (
            "Logo Here"
        )}
        {imgLight && (
            <img
                className="hidden max-h-18 dark:block"
                src={imgLight.src}
                alt="Logo-Light"
                style={{ height: logoSize }}
            />
        )}
      </Link>
  );
};

export default Logo;
