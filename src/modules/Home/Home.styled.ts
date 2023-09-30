import {styled}  from '@mui/material/styles';
import { Box } from '@mui/material';

export const HomeWrapper = styled(Box)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.palette.common.black};
  min-height: 100vh;
`;