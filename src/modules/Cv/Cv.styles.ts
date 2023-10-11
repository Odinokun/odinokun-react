import { styled } from '@mui/material/styles';
import { Box, Paper } from '@mui/material';

export const CvGrid   = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  align-items: start;
  grid-gap: 30px;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
    grid-template-columns: 360px 1fr;
    padding: 0;
  }
`;

export const CvLeftCol   = styled(Paper)`
  margin-bottom: 50px;
  overflow: hidden;
  padding: 35px;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
    padding: 0 0 50px 0;
  }
`;

export const CvLeftColInfo  = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
    padding: 0 35px;
  }
`;

export const CvRightCol   = styled(Paper)`
  margin-bottom: 50px;
  padding: 35px;
`;

export const CvRightItem   = styled(Box)`
  margin-bottom: 35px;
  
  p {
    margin-bottom: 10px;
  }
`;
