import { CvAvaImg, CvAvaWrapper } from '@modules/Cv/CvAva/CvAva.styles.ts';
import cvAvatar from '@assets/images/cv-avatar.jpg';

export const CvAva = () => {
  return (
    <CvAvaWrapper>
      <CvAvaImg src={cvAvatar} alt="Dima Hordiienko - front-end developer" />
    </CvAvaWrapper>
  );
};