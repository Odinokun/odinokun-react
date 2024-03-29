import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const PageTitleWrapper = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0 40px 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    padding: 60px 0;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.values.xl}px) {
    padding: 80px 0;
  }
`;

export const PageTitleTypography = styled(Typography)`
  font-family: 'Kaushan Script', cursive;
  font-weight: 700;
  line-height: 1;
  position: relative;
  z-index: 1;
  display: inline-block;
  user-select: none;
  color: ${({ theme }) => theme.palette.text.primary};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.values.xs}px) {
    font-size: 44px;
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    font-size: 60px;
  }

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