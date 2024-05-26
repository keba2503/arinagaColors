import { ListingGalleryImage } from "@/components/listing-image-gallery/utils/types";
import img1 from '@/images/Exteriores/Yellow/1.jpg';
import img2 from '@/images/Exteriores/Yellow/2.jpg';
import img3 from '@/images/Exteriores/Yellow/3.jpg';
import img4 from '@/images/Exteriores/Yellow/4.jpg';
import img5 from '@/images/Exteriores/Yellow/5.jpg';
import img6 from '@/images/Exteriores/Yellow/6.jpg';
import img7 from '@/images/Exteriores/Yellow/7.jpg';
import img8 from '@/images/Exteriores/Yellow/8.jpg';
import img9 from '@/images/Exteriores/Yellow/9.jpg';
import img10 from '@/images/Exteriores/Yellow/10.jpg';
import img11 from '@/images/Exteriores/Yellow/11.jpg';
import img12 from '@/images/Exteriores/Yellow/12.jpg';
import img13 from '@/images/Exteriores/Yellow/13.jpg';
import img14 from '@/images/Exteriores/Yellow/14.jpg';
import img15 from '@/images/Exteriores/Yellow/15.jpg';
import img16 from '@/images/Exteriores/Yellow/16.jpg';
import img17 from '@/images/Exteriores/Yellow/17.jpg';
import img18 from '@/images/Exteriores/Yellow/18.jpg';
import img19 from '@/images/Exteriores/Yellow/19.jpg';
import img20 from '@/images/Exteriores/Yellow/20.jpg';
import img21 from '@/images/Exteriores/Yellow/21.jpg';
import img22 from '@/images/Exteriores/Yellow/22.jpg';
import img23 from '@/images/Exteriores/Yellow/23.jpg';
import img24 from '@/images/Exteriores/Yellow/24.jpg';
import img25 from '@/images/Exteriores/Yellow/25.jpg';
import img26 from '@/images/Exteriores/Yellow/26.jpg';
import img27 from '@/images/Exteriores/Yellow/27.jpg';
import img28 from '@/images/Exteriores/Yellow/28.jpg';
import img29 from '@/images/Exteriores/Yellow/29.jpg';
import img30 from '@/images/Exteriores/Yellow/30.jpg';

// Agrega todas las imágenes importadas a una matriz
export const PHOTOS = [
  img1.src,
  img2.src,
  img3.src,
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
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
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
      url: item,
    };
  }
);
