import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';

import { Providers } from '@common/components/Providers/Providers';
import { router } from '@routes/router';

export const App: FC = () => {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
};
