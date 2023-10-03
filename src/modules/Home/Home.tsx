import { FC } from 'react';

import { HomeBg } from '@modules/Home/HomeBg/HomeBg.tsx';
import { LinkButton } from '@common/components/LinkButton/LinkButton.tsx';

import {
  HomeButton,
  HomeContent,
  HomeSubtitle,
  HomeTitle,
  HomeWrapper,
} from '@modules/Home/Home.styled.ts';

interface IProps {
}

export const Home: FC<IProps> = () => {
  return (
    <HomeWrapper>
      <HomeBg />
      <HomeContent>
        <HomeTitle variant="h1">Dima Hordiienko</HomeTitle>
        <HomeSubtitle variant="h2">front-end developer</HomeSubtitle>
        <HomeButton>
          <LinkButton href="https://www.google.com/" target="_blank" title="Download CV" btnColor="light" />
        </HomeButton>
      </HomeContent>
    </HomeWrapper>
  );
};
