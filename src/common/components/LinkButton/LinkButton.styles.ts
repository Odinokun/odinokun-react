import { styled } from '@mui/material/styles';
import { Link, Box } from '@mui/material';

export const StyledLinkWrapper = styled(Box)<{ btncolor: 'light' | 'dark' }>(
  ({ btncolor }) => `
  position: relative;
  padding: 0;
  border-left: 2px solid ${btncolor === 'light' ? '#fdf9f3' : '#1e1e1e'};
  border-right: 2px solid ${btncolor === 'light' ? '#fdf9f3' : '#1e1e1e'};
  border-top: none;
  border-bottom: none;
  color: ${btncolor === 'light' ? '#fdf9f3' : '#1e1e1e'};
  display: inline-flex;
  flex-direction: column;
  align-items: stretch;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    height: 2px;
    width: 60%;
    background-color: ${btncolor === 'light' ? '#fdf9f3' : '#1e1e1e'};
    transition: all 0.5s;
  }

  &:before {
    left: 0;
  }

  &:after {
    right: 0;
  }

  &:hover {
    border-top: none;
    border-bottom: none;
    border-left: 2px solid ${btncolor === 'light' ? '#fdf9f3' : '#1e1e1e'};
    border-right: 2px solid ${btncolor === 'light' ? '#fdf9f3' : '#1e1e1e'};
    &:before,
    &:after {
      width: 10px;
    }
  }
`,
);

export const StyledLink = styled(Link)<{ btncolor: 'light' | 'dark' }>(
  ({ btncolor }) => `
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  padding: 2px 46px 0 46px;

  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  color: ${btncolor === 'light' ? '#fdf9f3' : '#1e1e1e'};
  transition: all 0.5s;

  &:before,
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    height: 2px;
    width: 60%;
    background-color: ${btncolor === 'light' ? '#fdf9f3' : '#1e1e1e'};
    transition: all 0.5s;
  }

  &:before {
    left: 0;
  }

  &:after {
    right: 0;
  }

  &:hover {
    color: #ffb100;
    
    &:before,
    &:after {
      width: 10px;
    }
  }
`,
);
