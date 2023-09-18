import { FC, ReactNode } from 'react';
import { ThemeProvider } from '@mui/material';
import { theme } from '@theme/theme';

interface IProps {
  children: ReactNode;
}

export const Providers: FC<IProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
