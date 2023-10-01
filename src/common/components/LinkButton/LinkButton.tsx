import { FC } from 'react';
import { StyledLink, StyledLinkWrapper } from './LinkButton.styles';

interface IProps {
  href: string;
  title: string;
  btnColor: 'light' | 'dark';
  target?: string;
  rel?: string;
}

export const LinkButton: FC<IProps> = ({
  href,
  title,
  btnColor,
  target,
  rel,
}) => {
  return (
    <StyledLinkWrapper btnColor={btnColor}>
      <StyledLink href={href} variant="button" btnColor={btnColor} target={target} rel={rel}>
        {title}
      </StyledLink>
    </StyledLinkWrapper>
  );
};
