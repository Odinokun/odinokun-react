import {styled} from '@mui/material/styles';
import { Box } from '@mui/material';

export const AppNavWrapper = styled(Box)`
  position: fixed;
  z-index: 10;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;
  height: 100vh;
  padding-top: 25px;
  background-color: ${({ theme }) => theme.palette.background.default};
  border-right: 1px solid ${({ theme }) => theme.palette.common.white};
`;