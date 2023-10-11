import {styled} from '@mui/material/styles';
import { Link, List, ListItem, Typography } from '@mui/material';

export const InfoListEl = styled(List)`
  margin: 0 0 15px 0;
  padding: 0;
  width: 100%;
  
  @media (min-width: ${({theme}) => theme.breakpoints.values.sm}px) {
    width: auto;
  }
`;

export const InfoListItem = styled(ListItem)`
  display: flex;
  margin-bottom: 12px;
  padding: 0;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    flex-direction: row;
  }
`;

export const InfoListTitle = styled(Typography)`
  flex: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    width: 125px;
    padding-right: 10px;
  }
`;

export const InfoListValue = styled(Typography)`
  font-weight: 400;
`;

export const InfoListLink = styled(Link)`
  font-size: 20px;
  color: ${({theme}) => theme.palette.text.primary};
  text-decoration-color: ${({theme}) => theme.palette.text.primary};
  transition: 0.2s ease-in-out;

  &:hover {
    color: ${({theme}) => theme.palette.text.secondary};
  }
`;