import { FC } from 'react';
import { StyledLink, StyledLinkWrapper } from './LinkButton.styles';

interface IProps {
  href: string;
  title: string;
  btncolor: 'light' | 'dark';
  target?: string;
  rel?: string;
}

export const LinkButton: FC<IProps> = ({
  href,
  title,
  btncolor,
  target,
  rel,
}) => {
  return (
    <StyledLinkWrapper btncolor={btncolor}>
      <StyledLink href={href} variant="button" btncolor={btncolor} target={target} rel={rel}>
        {title}
      </StyledLink>
    </StyledLinkWrapper>
  );
};
