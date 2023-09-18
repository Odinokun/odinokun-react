import { FC } from 'react';
import i18next from 'i18next';

import { NotFound } from '@modules/NotFound/NotFound';
import { withMetadata } from '@common/hoc/withMetadata';

const NotFoundPage: FC = () => <NotFound />;

export const NotFoundPageMeta = withMetadata({
  title: i18next.t('meta.notFound.title'),
  description: i18next.t('meta.notFound.description'),
})(NotFoundPage);

export default NotFoundPageMeta;
