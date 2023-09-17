import { FC } from 'react';
import { ThemeProvider } from '@mui/material';

import { LinkButton } from './common/components/LinkButton/LinkButton';

import { theme } from './theme/theme';

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <LinkButton href='/' title='Download CV' btnColor='dark' />
      </div>
    </ThemeProvider>
  );
};
