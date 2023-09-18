import { v4 as uuidv4 } from 'uuid';
import { INavLink } from '@typings/types';
import { ROUTES } from '@routes/routes';

export const NAV_LINKS: INavLink[] = [
  {
    id: uuidv4(),
    path: ROUTES.HOME,
    label: 'layout.nav.home',
    available: true,
    icon: null,
    isDisabled: false,
  },
  {
    id: uuidv4(),
    path: ROUTES.CV,
    label: 'layout.nav.cv',
    available: true,
    icon: null,
    isDisabled: false,
  },
  {
    id: uuidv4(),
    path: ROUTES.WORKS,
    label: 'layout.nav.works',
    available: true,
    icon: null,
    isDisabled: false,
  },
  {
    id: uuidv4(),
    path: ROUTES.BLOG,
    label: 'layout.nav.blog',
    available: true,
    icon: null,
    isDisabled: false,
  },
  {
    id: uuidv4(),
    path: ROUTES.CONTACTS,
    label: 'layout.nav.contacts',
    available: true,
    icon: null,
    isDisabled: false,
  },
  {
    id: uuidv4(),
    path: ROUTES.NOT_FOUND,
    label: 'layout.nav.notFound',
    available: false,
    icon: null,
    isDisabled: false,
  },
];
