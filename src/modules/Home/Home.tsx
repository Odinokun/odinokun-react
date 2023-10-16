import { FC } from 'react';

import { HomeBg } from '@modules/Home/HomeBg/HomeBg.tsx';
import { MultiButton } from '@common/components/MultiButton/MultiButton.tsx';

import { HomeButton, HomeContent, HomeSubtitle, HomeTitle, HomeWrapper } from './Home.styled.ts';

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
          <MultiButton
            href='https://odinokun.com/public/pdf/front-end_developer_Dima_Hordiienko.pdf'
            title='Download cv'
            btnColor='light'
            target='_blank'
          />
        </HomeButton>
      </HomeContent>
    </HomeWrapper>
  );
};
