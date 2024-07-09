import imgYellow1 from '@/images/Exteriores/Yellow/18.jpg';
import imgYellow2 from '@/images/Exteriores/Yellow/5.jpg';
import imgYellow3 from '@/images/Exteriores/Yellow/6.jpg';
import imgYellow4 from '@/images/Exteriores/Yellow/28.jpg';
import imgYellow5 from '@/images/Exteriores/Yellow/27.jpg';

import imgBlue1 from '@/images/Exteriores/Blue/14.jpg';
import imgBlue2 from '@/images/Exteriores/Blue/13.jpg';
import imgBlue3 from '@/images/Exteriores/Blue/15.jpg';
import imgBlue4 from '@/images/Exteriores/Blue/16.jpg';
import imgBlue5 from '@/images/Exteriores/Blue/10.jpg';

import imgWhite1 from '@/images/Exteriores/White/6.jpg';
import imgWhite2 from '@/images/Exteriores/White/9.jpg';
import imgWhite3 from '@/images/Exteriores/White/10.jpg';
import imgWhite4 from '@/images/Exteriores/White/17.jpg';
import imgWhite5 from '@/images/Exteriores/White/24.jpg';

const listings = [
  {
    id: 'id_3',
    authorId: 6,
    date: 'May 20, 2021',
    href: '/white',
    listingCategoryId: 11,
    title: 'The White house',
    featuredImage: imgWhite1.src,
    galleryImgs: [
      imgWhite1.src,
      imgWhite2.src,
      imgWhite3.src,
      imgWhite4.src,
      imgWhite5.src,
    ],
    description:
      'Vivienda de 90 m2, con tres dormitorios. Ideal para familias de hasta 6 personas.',
    commentCount: 47,
    viewCount: 843,
    like: true,
    address: 'Playa de Arinaga',
    reviewStart: 3.6,
    reviewCount: 16,
    price: '',
    maxGuests: 9,
    bedrooms: 1,
    bathrooms: 8,
    saleOff: null,
    isAds: null,
    map: { lat: 55.247483, lng: 61.5229791 },
  },
  {
    id: 'id_1',
    authorId: 6,
    date: 'May 20, 2021',
    href: '/yellow',
    listingCategoryId: 11,
    title: 'The Yellow house',
    featuredImage: imgYellow1.src,
    galleryImgs: [
      imgYellow1.src,
      imgYellow2.src,
      imgYellow3.src,
      imgYellow4.src,
      imgYellow5.src,
    ],
    description:
      'Vivienda de 90 m2 con dos dormitorios. Fantástica para parejas o familias de hasta 4 miembros.',
    commentCount: 47,
    viewCount: 843,
    like: true,
    address: 'Playa de Arinaga',
    reviewStart: 3.6,
    reviewCount: 16,
    price: '',
    maxGuests: 9,
    bedrooms: 9,
    bathrooms: 8,
    saleOff: null,
    isAds: null,
    map: { lat: 55.247483, lng: 61.5229791 },
  },
  {
    id: 'id_2',
    authorId: 6,
    date: 'May 20, 2021',
    href: '/blue',
    listingCategoryId: 11,
    title: 'The Blue house',
    featuredImage: imgBlue1.src,
    galleryImgs: [
      imgBlue1.src,
      imgBlue2.src,
      imgBlue3.src,
      imgBlue4.src,
      imgBlue5.src,
    ],
    description:
      'Ático de 40 m2 con un dormitorio. Pensado para el máximo disfrute de una pareja.',
    commentCount: 47,
    viewCount: 843,
    like: true,
    address: 'Playa Arinaga',
    reviewStart: 3.6,
    reviewCount: 16,
    price: '',
    maxGuests: 9,
    bedrooms: 9,
    bathrooms: 8,
    saleOff: null,
    isAds: null,
    map: { lat: 55.247483, lng: 61.5229791 },
  },
];

export default listings;
