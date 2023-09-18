import { FC, ReactNode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@mui/material';
import { theme } from '@theme/theme';

interface IProps {
  children: ReactNode;
}

export const Providers: FC<IProps> = ({ children }) => {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </HelmetProvider>
  );
};
