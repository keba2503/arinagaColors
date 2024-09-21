import { NavItemType } from '@/shared/Navigation/NavigationItem';
import ncNanoId from '@/utils/ncNanoId';

export const NAVIGATION_DEMO: NavItemType[] = [
  {
    id: ncNanoId(),
    href: '/',
    name: 'Inicio',
  },
  {
    id: ncNanoId(),
    href: '/booking',
    name: 'Reservar',
  },
  {
    id: ncNanoId(),
    href: '/offer',
    name: 'Ofertas',
  },
  {
    id: ncNanoId(),
    href: '/',
    name: 'Servicios',
    type: 'dropdown',
    children: [
      {
        id: ncNanoId(),
        href: '/service',
        name: 'Nuestros servicios',
      },
      {
        id: ncNanoId(),
        href: '/sustainability',
        name: 'Sostenibilidad',
      },
    ],
  },
  {
    id: ncNanoId(),
    href: '/',
    name: 'Entorno',
    type: 'dropdown',
    children: [
      {
        id: ncNanoId(),
        href: '/playaArinaga',
        name: 'Playa de Arinaga',
      },
      {
        id: ncNanoId(),
        href: '/granCanaria',
        name: 'Explora Gran Canaria',
      },
    ],
  },
  {
    id: ncNanoId(),
    href: '/gallery',
    name: 'Galería',
  },
  {
    id: ncNanoId(),
    href: '/guide',
    name: 'Guía del huésped',
  },
  {
    id: ncNanoId(),
    href: '/',
    name: 'Descubre más',
    type: 'dropdown',
    children: [
      {
        id: ncNanoId(),
        href: '/about',
        name: 'Quiénes somos',
      },
      {
        id: ncNanoId(),
        href: '/faq',
        name: 'FAQ',
      },
      {
        id: ncNanoId(),
        href: '/contact',
        name: 'Contacto',
      },
    ],
  },
];
