import { FC } from 'react';
import { MultiButtonLink, MultiButtonWrapper, styles } from '@common/components/MultiButton/MultiButton.styles.tsx';

interface IProps {
  href: string;
  title: string;
  btnColor: 'light' | 'dark';
  target?: string;
  rel?: string;
}

export const MultiButton: FC<IProps> = ({
  href,
  title,
  btnColor,
  target,
  rel,
}) => {
  return (
    <MultiButtonWrapper
      sx={btnColor === 'light' ? styles.wrapperLight : styles.wrapperDark}
    >
      <MultiButtonLink
        to={href}
        target={target}
        rel={rel}
        sx={btnColor === 'light' ? styles.buttonLight : styles.buttonDark}
      >
        {title}
      </MultiButtonLink>
    </MultiButtonWrapper>
  );
};
