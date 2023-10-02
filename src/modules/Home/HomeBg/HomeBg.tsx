import { FC } from 'react';
import { HomeBgSvgLetter, HomeBgWrapper } from '@modules/Home/HomeBg/HomeBg.styled.ts';

interface IProps {
}

export const HomeBg: FC<IProps> = () => {
  return (
    <HomeBgWrapper>
      <HomeBgSvgLetter viewBox="0 0 240 770">
        <polyline points="0,35 150,35 205,80 205,690 150,735 35,735 35,0" />
      </HomeBgSvgLetter>
      <HomeBgSvgLetter viewBox="0 0 240 770">
        <polyline points="35,63 35,770 35,500 205,460 205,705 205,0" />
      </HomeBgSvgLetter>
    </HomeBgWrapper>
  );
};