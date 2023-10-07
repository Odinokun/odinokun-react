import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const PageTitleWrapper = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;
`;

export const PageTitleTypography = styled(Typography)`
  font-family: 'Kaushan Script', cursive;
  font-size: 60px;
  font-weight: 700;
  line-height: 1;
  position: relative;
  z-index: 1;
  display: inline-block;
  user-select: none;
  color: ${({ theme }) => theme.palette.text.primary};

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    font-size: 90px;
  }

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    left: -5px;
    bottom: 10px;
    width: calc(100% + 20px);
    background-color: #ffb100;
    height: 5px;

    @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
      bottom: 15px;
      height: 10px;
    }
  }
`;