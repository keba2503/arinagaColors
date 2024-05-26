import { ListingGalleryImage } from "@/components/listing-image-gallery/utils/types";
import img1 from '@/images/Exteriores/White/1.jpg';
import img2 from '@/images/Exteriores/White/2.jpg';
import img3 from '@/images/Exteriores/White/3.jpg';
import img4 from '@/images/Exteriores/White/4.jpg';
import img5 from '@/images/Exteriores/White/5.jpg';
import img6 from '@/images/Exteriores/White/6.jpg';
import img7 from '@/images/Exteriores/White/7.jpg';
import img8 from '@/images/Exteriores/White/8.jpg';
import img9 from '@/images/Exteriores/White/9.jpg';
import img10 from '@/images/Exteriores/White/10.jpg';
import img11 from '@/images/Exteriores/White/11.jpg';
import img12 from '@/images/Exteriores/White/12.jpg';
import img13 from '@/images/Exteriores/White/13.jpg';
import img14 from '@/images/Exteriores/White/14.jpg';
import img15 from '@/images/Exteriores/White/15.jpg';
import img16 from '@/images/Exteriores/White/16.jpg';
import img17 from '@/images/Exteriores/White/17.jpg';
import img18 from '@/images/Exteriores/White/18.jpg';
import img19 from '@/images/Exteriores/White/19.jpg';
import img20 from '@/images/Exteriores/White/20.jpg';
import img21 from '@/images/Exteriores/White/21.jpg';
import img22 from '@/images/Exteriores/White/22.jpg';
import img23 from '@/images/Exteriores/White/23.jpg';
import img24 from '@/images/Exteriores/White/24.jpg';

// Agrega todas las imágenes importadas a una matriz
export const PHOTOS = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24
];

export const Amenities_demos = [
  { name: "la-key", icon: "la-key" },
  { name: "la-luggage-cart", icon: "la-luggage-cart" },
  { name: "la-shower", icon: "la-shower" },
  { name: "la-smoking", icon: "la-smoking" },
  { name: "la-snowflake", icon: "la-snowflake" },
  { name: "la-spa", icon: "la-spa" },
  { name: "la-suitcase", icon: "la-suitcase" },
  { name: "la-suitcase-rolling", icon: "la-suitcase-rolling" },
  { name: "la-swimmer", icon: "la-swimmer" },
  { name: "la-swimming-pool", icon: "la-swimming-pool" },
  { name: "la-tv", icon: "la-tv" },
  { name: "la-umbrella-beach", icon: "la-umbrella-beach" },
  { name: "la-utensils", icon: "la-utensils" },
  { name: "la-wheelchair", icon: "la-wheelchair" },
  { name: "la-wifi", icon: "la-wifi" },
  { name: "la-baby-carriage", icon: "la-baby-carriage" },
  { name: "la-bath", icon: "la-bath" },
  { name: "la-bed", icon: "la-bed" },
  { name: "la-briefcase", icon: "la-briefcase" },
  { name: "la-car", icon: "la-car" },
  { name: "la-cocktail", icon: "la-cocktail" },
  { name: "la-coffee", icon: "la-coffee" },
  { name: "la-concierge-bell", icon: "la-concierge-bell" },
  { name: "la-dice", icon: "la-dice" },
  { name: "la-dumbbell", icon: "la-dumbbell" },
  { name: "la-hot-tub", icon: "la-hot-tub" },
  { name: "la-infinity", icon: "la-infinity" },
];

export const imageGallery: ListingGalleryImage[] = [...PHOTOS].map(
  (item, index): ListingGalleryImage => {
    return {
      id: index,
      url: item.src,
    };
  }
);
