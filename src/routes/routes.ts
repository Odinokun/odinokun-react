import { lazy } from 'react';

export enum ROUTES {
  HOME = '/',
  CV = 'cv',
  WORKS = 'works',
  BLOG = 'blog',
  CONTACTS = 'contacts',
  NOT_FOUND = '*',
}

export const HomePage = lazy(
  () => import('../pages/Home' /* webpackChunkName: "HomePage" */)
);

export const CvPage = lazy(
  () => import('../pages/Cv' /* webpackChunkName: "CvPage" */)
);

export const WorksPage = lazy(
  () => import('../pages/Works' /* webpackChunkName: "WorksPage" */)
);

export const BlogPage = lazy(
  () => import('../pages/Blog' /* webpackChunkName: "BlogPage" */)
);

export const ContactsPage = lazy(
  () => import('../pages/Contacts' /* webpackChunkName: "ContactsPage" */)
);

export const NotFoundPage = lazy(
  () => import('../pages/NotFound' /* webpackChunkName: "NotFoundPage" */)
);
