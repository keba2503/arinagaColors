import imgInikdark1 from '@/images/Exteriores/inikdark/1.png';
import imgInikdark2 from '@/images/inikdark/2.png';
import imgInikdark3 from '@/images/inikdark/3.png';
import imgInikdark4 from '@/images/inikdark/4.png';
import imgInikdark5 from '@/images/inikdark/5.png';

import imgIniklight1 from '@/images/iniklight/1.png';
import imgIniklight2 from '@/images/iniklight/2.png';
import imgIniklight3 from '@/images/iniklight/3.png';
import imgIniklight4 from '@/images/iniklight/4.png';
import imgIniklight5 from '@/images/iniklight/5.png';

import imgInikcar1 from '@/images/inikcar/1.jpg';
import imgInikcar2 from '@/images/inikcar/2.jpg';
import imgInikcar3 from '@/images/inikcar/3.jpg';
import imgInikcar4 from '@/images/inikcar/4.jpg';
import imgInikcar5 from '@/images/inikcar/5.jpg';

const listings = [
    {
        id: "id_1",
        authorId: 6,
        date: "May 20, 2021",
        href: "/inikdark",
        listingCategoryId: 11,
        title: "The Inikdark house",
        featuredImage: imgInikdark1.src,
        galleryImgs: [
            imgInikdark1.src,
            imgInikdark2.src,
            imgInikdark3.src,
            imgInikdark4.src,
            imgInikdark5.src,
        ],
        commentCount: 47,
        viewCount: 843,
        like: true,
        address: "Playa Arinaga",
        reviewStart: 3.6,
        reviewCount: 16,
        price: "",
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
        href: "/iniklight",
        listingCategoryId: 11,
        title: "The Iniklight house",
        featuredImage: imgIniklight1.src,
        galleryImgs: [
            imgIniklight1.src,
            imgIniklight2.src,
            imgIniklight3.src,
            imgIniklight4.src,
            imgIniklight5.src,
        ],
        commentCount: 47,
        viewCount: 843,
        like: true,
        address: "Playa Arinaga",
        reviewStart: 3.6,
        reviewCount: 16,
        price: "",
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
        href: "/inikcar",
        listingCategoryId: 11,
        title: "The Inikcar house",
        featuredImage: imgInikcar1.src,
        galleryImgs: [
            imgInikcar1.src,
            imgInikcar2.src,
            imgInikcar3.src,
            imgInikcar4.src,
            imgInikcar5.src,
        ],
        commentCount: 47,
        viewCount: 843,
        like: true,
        address: "Playa Arinaga",
        reviewStart: 3.6,
        reviewCount: 16,
        price: "",
        maxGuests: 9,
        bedrooms: 1,
        bathrooms: 8,
        saleOff: null,
        isAds: null,
        map: { lat: 55.247483, lng: 61.5229791 },
    }
];

export default listings;
