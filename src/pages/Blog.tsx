import { FC } from 'react';
import i18next from 'i18next';

import { Blog } from '@modules/Blog/Blog';
import { withMetadata } from '@common/hoc/withMetadata';

const BlogPage: FC = () => <Blog />;

export const BlogPageMeta = withMetadata({
  title: i18next.t('meta.blog.title'),
  description: i18next.t('meta.blog.description'),
})(BlogPage);

export default BlogPageMeta;
