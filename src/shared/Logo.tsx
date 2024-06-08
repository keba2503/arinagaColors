import React from "react";
import Image, { StaticImageData } from "next/image";
import logoImg from "@/images/logo.png";
import logoLightImg from "@/images/logo-light.png";
import Link from "next/link";

export interface LogoProps {
    img?: StaticImageData;
    imgLight?: StaticImageData;
    className?: string;
    logoSize?: string;
}

const Logo: React.FC<LogoProps> = ({ img = logoImg, imgLight = logoLightImg, className = "w-24", logoSize = "100px" }) => {
    return (
        <Link href="/" className={`ttnc-logo inline-block text-primary-6000 focus:outline-none focus:ring-0 ${className}`}>
            {img ? (
                <div className={`block max-h-19 ${imgLight ? "dark:hidden" : ""}`}>
                    <Image
                        src={img}
                        alt="Logo"
                        width={parseInt(logoSize)}
                        height={parseInt(logoSize)}
                        style={{ height: logoSize }}
                    />
                </div>
            ) : (
                "Logo Here"
            )}
            {imgLight && (
                <div className="hidden max-h-18 dark:block">
                    <Image
                        src={imgLight}
                        alt="Logo-Light"
                        width={parseInt(logoSize)}
                        height={parseInt(logoSize)}
                        style={{ height: logoSize }}
                    />
                </div>
            )}
        </Link>
    );
};

export default Logo;
