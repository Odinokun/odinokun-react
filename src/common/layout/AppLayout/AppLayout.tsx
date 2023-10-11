import { FC, DetailedHTMLProps, HTMLAttributes, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AppNav } from '../AppNav/AppNav';

import { AppLayoutPageWrapper, AppLayoutWrapper } from './AppLayout.styles.ts';

type AppLayoutProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const AppLayout: FC<AppLayoutProps> = () => (
  <AppLayoutWrapper>
    <AppNav />
    
    <AppLayoutPageWrapper>
      <Suspense>
        <Outlet />
      </Suspense>
    </AppLayoutPageWrapper>
  </AppLayoutWrapper>
);

export default AppLayout;
