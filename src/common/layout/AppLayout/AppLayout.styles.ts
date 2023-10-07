import {styled} from '@mui/material/styles';
import { Box } from '@mui/material';

export const AppLayoutWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    padding-left: 90px;
  }
`;

export const AppLayoutPageWrapper = styled(Box)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;