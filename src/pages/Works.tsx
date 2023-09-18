import { FC } from 'react';
import i18next from 'i18next';

import { Works } from '@modules/Works/Works';
import { withMetadata } from '@common/hoc/withMetadata';

const WorksPage: FC = () => <Works />;

export const WorksPageMeta = withMetadata({
  title: i18next.t('meta.works.title'),
  description: i18next.t('meta.works.description'),
})(WorksPage);

export default WorksPageMeta;
