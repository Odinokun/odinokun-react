import { FC } from 'react';
import i18next from 'i18next';

import { Cv } from '@modules/Cv/Cv';
import { withMetadata } from '@common/hoc/withMetadata';

const CvPage: FC = () => <Cv />;

export const CvPageMeta = withMetadata({
  title: i18next.t('meta.cv.title'),
  description: i18next.t('meta.cv.description'),
})(CvPage);

export default CvPageMeta;
