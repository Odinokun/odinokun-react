import { v4 as uuidv4 } from 'uuid';
import { INavLink } from '@typings/types';
import { ROUTES } from '@routes/routes';

import { ReactComponent as HomeIcon } from '@assets/icons/menu-icons/home.svg';
import { ReactComponent as CVIcon } from '@assets/icons/menu-icons/cv.svg';
import { ReactComponent as WorksIcon } from '@assets/icons/menu-icons/works.svg';
import { ReactComponent as BlogIcon } from '@assets/icons/menu-icons/blog.svg';
import { ReactComponent as ContactsIcon } from '@assets/icons/menu-icons/contacts.svg';

export const NAV_LINKS: INavLink[] = [
  {
    id: uuidv4(),
    path: ROUTES.HOME,
    label: 'Home',
    available: true,
    icon: HomeIcon,
    isDisabled: false,
  },
  {
    id: uuidv4(),
    path: ROUTES.CV,
    label: 'CV',
    available: true,
    icon: CVIcon,
    isDisabled: false,
  },
  {
    id: uuidv4(),
    path: ROUTES.WORKS,
    label: 'Works',
    available: true,
    icon: WorksIcon,
    isDisabled: false,
  },
  {
    id: uuidv4(),
    path: ROUTES.BLOG,
    label: 'Blog',
    available: true,
    icon: BlogIcon,
    isDisabled: false,
  },
  {
    id: uuidv4(),
    path: ROUTES.CONTACTS,
    label: 'Contacts',
    available: true,
    icon: ContactsIcon,
    isDisabled: false,
  },
  {
    id: uuidv4(),
    path: ROUTES.NOT_FOUND,
    label: 'Not Found',
    available: false,
    icon: '',
    isDisabled: false,
  },
];
