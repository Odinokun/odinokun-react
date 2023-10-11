import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const CvAvaWrapper = styled(Box)`
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  margin-bottom: 30px;
`;

export const CvAvaImg = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;