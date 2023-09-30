import { FC } from 'react';
import i18next from 'i18next';

import { Home } from '@modules/Home/Home';
import { withMetadata } from '@common/hoc/withMetadata';

const HomePage: FC = () => <Home />;

export const HomePageMeta = withMetadata({
  title: i18next.t('meta.home.title'),
  description: i18next.t('meta.home.description'),
})(HomePage);

export default HomePageMeta;
