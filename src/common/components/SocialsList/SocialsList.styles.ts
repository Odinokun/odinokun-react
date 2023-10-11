import { Link, List, ListItem, styled } from '@mui/material';

export const SocialList = styled(List)`
  display: flex;
  margin-bottom: 25px;
`;

export const SocialListItem = styled(ListItem)`
  padding: 0;
`;

export const SocialLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  transform: scale(1);
  transition: 0.2s ease-in-out;
  color: ${({ theme }) => theme.palette.text.primary};

  svg {
    width: 40px;
    height: 40px;
  }

  &:hover {
    transform: scale(1.2);
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;
