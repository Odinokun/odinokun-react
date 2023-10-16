import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';

// eslint-disable-next-line
export const styles = {
  wrapperLight: {
    borderLeftColor: '#fdf9f3',
    borderRightColor: '#fdf9f3',
    '&:before, &:after': {
      backgroundColor: '#fdf9f3',
    },
  },
  buttonLight: {
    color: '#fdf9f3',
    '&:before, &:after': {
      backgroundColor: '#fdf9f3',
    },
  },
  wrapperDark: {
    borderLeftColor: '#1e1e1e',
    borderRightColor: '#1e1e1e',
    '&:before, &:after': {
      backgroundColor: '#1e1e1e',
    },
  },
  buttonDark: {
    color: '#1e1e1e',
    '&:before, &:after': {
      backgroundColor: '#1e1e1e',
    },
  },
};

export const MultiButtonWrapper = styled(Box)`
  position: relative;
  padding: 0;
  border-left-width: 2px;
  border-left-style: solid;
  border-right-width: 2px;
  border-right-style: solid;
  border-top: none;
  border-bottom: none;
  display: inline-flex;
  flex-direction: column;
  align-items: stretch;
  transition: all 0.5s;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    height: 2px;
    width: 60%;
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

    &:before,
    &:after {
      width: 10px;
    }
  }
`;

export const MultiButtonLink = styled(NavLink)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  padding: 2px 46px 0 46px;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.5s;
  text-transform: uppercase;

  &:before,
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    height: 2px;
    width: 60%;
    transition: all 0.5s;
  }

  &:before {
    left: 0;
  }

  &:after {
    right: 0;
  }

  &:hover {
    color: ${({ theme }) => theme.palette.text.secondary};

    &:before,
    &:after {
      width: 10px;
    }
  }
`;

