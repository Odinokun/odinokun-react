import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const CvAvaWrapper = styled(Box)`
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  margin: 0 auto 30px;
  max-width: 450px;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
    margin: 0 0 30px 0;
    max-width: 100%;
  }
`;

export const CvAvaImg = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;