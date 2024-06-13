'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import img1 from '../../../images/Exteriores/1.jpg';
import img2 from '../../../images/Exteriores/2.jpg';
import img3 from '../../../images/Exteriores/3.jpg';

const images = [
    { src: img1, caption: "EXPERIENCIA INOLVIDABLE. Modernos y confortables apartamentos ubicados en la. idílica Playa de Arinaga, Gran Canaria." },
    { src: img2, caption: "COMODIDAD. Acceso directo a la playa y a un paso de los mejores. restaurantes, tiendas y actividades de la isla." },
    { src: img3, caption: "RECUERDO IMBORRABLE. Despierta cada mañana con la brisa marina y relájate al. atardecer con vistas espectaculares." },
];

const CarouselBackground: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative w-full h-screen" data-carousel="slide">
            <div className="relative h-full overflow-hidden">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
                        data-carousel-item
                    >
                        <Image
                            src={image.src}
                            alt={`Slide ${index}`}
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                            priority
                        />
                        {currentIndex === index && image.caption && (
                            <div className="absolute top-1/4 left-10 text-white text-xl font-semibold text-left animate__animated animate__fadeIn hidden sm:block">
                                <p className="uppercase text-6xl animate__animated animate__fadeIn animate__delay-1s">{image.caption.split('.')[0]}</p>
                                <p className="text-3xl animate__animated animate__fadeIn animate__delay-1s">{image.caption.split('.')[1].trim()}</p>
                                <p className="text-3xl animate__animated animate__fadeIn animate__delay-1s">{image.caption.split('.').slice(2).join('.').trim()}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="absolute z-50 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
                        aria-current={currentIndex === index}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => setCurrentIndex(index)}
                        data-carousel-slide-to={index}
                    ></button>
                ))}
            </div>

            <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={prevSlide}
                data-carousel-prev
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                    <svg
                        className="w-4 h-4 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>

            <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={nextSlide}
                data-carousel-next
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                    <svg
                        className="w-4 h-4 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

export default CarouselBackground;
