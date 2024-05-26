import imgYellow1 from '@/images/Exteriores/Yellow/1.jpg';
import imgYellow2 from '@/images/Exteriores/Yellow/2.jpg';
import imgYellow3 from '@/images/Exteriores/Yellow/3.jpg';
import imgYellow4 from '@/images/Exteriores/Yellow/4.jpg';
import imgYellow5 from '@/images/Exteriores/Yellow/5.jpg';

import imgBlue1 from '@/images/Exteriores/Blue/1.jpg';
import imgBlue2 from '@/images/Exteriores/Blue/2.jpg';
import imgBlue3 from '@/images/Exteriores/Blue/3.jpg';
import imgBlue4 from '@/images/Exteriores/Blue/4.jpg';
import imgBlue5 from '@/images/Exteriores/Blue/5.jpg';

import imgWhite1 from '@/images/Exteriores/White/1.jpg';
import imgWhite2 from '@/images/Exteriores/White/2.jpg';
import imgWhite3 from '@/images/Exteriores/White/3.jpg';
import imgWhite4 from '@/images/Exteriores/White/4.jpg';
import imgWhite5 from '@/images/Exteriores/White/5.jpg';

const listings = [
    {
        id: "id_1",
        authorId: 6,
        date: "May 20, 2021",
        href: "/yellow",
        listingCategoryId: 11,
        title: "The Yellow house",
        featuredImage: imgYellow1.src,
        galleryImgs: [
            imgYellow1.src,
            imgYellow2.src,
            imgYellow3.src,
            imgYellow4.src,
            imgYellow5.src,
        ],
        commentCount: 47,
        viewCount: 843,
        like: true,
        address: "Playa Arinaga",
        reviewStart: 3.6,
        reviewCount: 16,
        price: "€98",
        maxGuests: 9,
        bedrooms: 9,
        bathrooms: 8,
        saleOff: null,
        isAds: null,
        map: { lat: 55.247483, lng: 61.5229791 },
    },
    {
        id: "id_2",
        authorId: 6,
        date: "May 20, 2021",
        href: "/blue",
        listingCategoryId: 11,
        title: "The Blue house",
        featuredImage: imgBlue1.src,
        galleryImgs: [
            imgBlue1.src,
            imgBlue2.src,
            imgBlue3.src,
            imgBlue4.src,
            imgBlue5.src,
        ],
        commentCount: 47,
        viewCount: 843,
        like: true,
        address: "Playa Arinaga",
        reviewStart: 3.6,
        reviewCount: 16,
        price: "€98",
        maxGuests: 9,
        bedrooms: 9,
        bathrooms: 8,
        saleOff: null,
        isAds: null,
        map: { lat: 55.247483, lng: 61.5229791 },
    },
    {
        id: "id_3",
        authorId: 6,
        date: "May 20, 2021",
        href: "/white",
        listingCategoryId: 11,
        title: "The White house",
        featuredImage: imgWhite1.src,
        galleryImgs: [
            imgWhite1.src,
            imgWhite2.src,
            imgWhite3.src,
            imgWhite4.src,
            imgWhite5.src,
        ],
        commentCount: 47,
        viewCount: 843,
        like: true,
        address: "Playa Arinaga",
        reviewStart: 3.6,
        reviewCount: 16,
        price: "€98",
        maxGuests: 9,
        bedrooms: 1,
        bathrooms: 8,
        saleOff: null,
        isAds: null,
        map: { lat: 55.247483, lng: 61.5229791 },
    }
];

export default listings;
