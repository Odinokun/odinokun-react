import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const NavMenuBgLogo = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80%;
  pointer-events: none;
  opacity: .04;
`;

export const NavMenuBgLogoLetter = styled('svg')`
  max-height: 100%;
  margin: 0 10px;
  stroke: ${({ theme }) => theme.palette.common.white};
`;