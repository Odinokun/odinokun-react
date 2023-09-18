import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { AppLayout } from '@common/layout';
import {
  HomePage,
  CvPage,
  WorksPage,
  BlogPage,
  ContactsPage,
  NotFoundPage,
  ROUTES,
} from '@routes/routes';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTES.HOME} element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTES.CV} element={<CvPage />} />
        <Route path={ROUTES.WORKS} element={<WorksPage />} />
        <Route path={ROUTES.BLOG} element={<BlogPage />} />
        <Route path={ROUTES.CONTACTS} element={<ContactsPage />} />
      </Route>
      <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />,
    </>
  )
);
