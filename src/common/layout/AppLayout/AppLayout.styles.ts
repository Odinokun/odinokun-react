import {styled} from '@mui/material/styles';
import { Box } from '@mui/material';

export const AppLayoutWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-left: 90px;
  background-color: #a6e22e;
`;

export const AppLayoutPageWrapper = styled(Box)`
  background-color: #fd971f;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;