import { styled } from '@mui/material/styles';
import { Box, Link, Paper, Typography } from '@mui/material';

export const WorkWrapper = styled(Paper)`
  overflow: hidden;
  transition: box-shadow 0.3s ease-in-out;
`;

export const WorkLink = styled(Link)`
  color: ${({ theme }) => theme.palette.text.primary};
  text-decoration: none;

  &:hover img {
    opacity: 0.85;
    transform: scale(1.05);
  }
`;

export const WorkImageWrapper = styled(Box)`
  width: 100%;
  height: 200px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.common.black};
  margin-bottom: 10px;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.xl}px) {
    height: 250px;
  }
`;

export const WorkImage = styled('img')`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: all 0.3s ease-in-out;
`;

export const WorkDescription = styled(Box)`
  padding: 10px 0 0 0;
  display: flex;
`;

export const WorkDate = styled(Box)`
  display: flex;
  align-items: center;
  padding-right: 10px;

  svg {
    padding-left: 0;
    margin-right: 5px;
  }
`;

export const WorkDateText = styled(Typography)`
  font-size: 16px;
  margin-bottom: 0;
  line-height: 1;
  padding-top: 4px;
`;

export const WorkLinkText = styled(Box)`
  display: flex;
  align-items: center;
  padding-top: 2px;

  svg {
    margin-right: 5px;
    transform: rotate(-30deg);
  }
`;

export const WorkTags = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  padding-top: 10px;
`;

export const WorkTag = styled(Typography)`
  margin-right: 10px;
  margin-bottom: 5px;
  padding: 3px 5px 0 7px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.text.primary};
  border: 1px solid ${({ theme }) => theme.palette.text.primary};
  border-radius: 4px;
`;

