import { FC } from 'react';
import {  HomeWrapper } from '@modules/Home/Home.styled.ts';
import { HomeBg } from '@modules/Home/HomeBg/HomeBg.tsx';

interface IProps {}

export const Home: FC<IProps> = () => {
  return (
    <HomeWrapper>
      <HomeBg />
    </HomeWrapper>
  );
};
