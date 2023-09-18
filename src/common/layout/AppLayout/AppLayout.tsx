import { FC, DetailedHTMLProps, HTMLAttributes, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppNav } from '../AppNav/AppNav';

type AppLayoutProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const AppLayout: FC<AppLayoutProps> = () => (
  <div>
    <AppNav />
    <div>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  </div>
);

export default AppLayout;
