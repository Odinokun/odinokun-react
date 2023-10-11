import { FC } from 'react';
import { PageTitleTypography, PageTitleWrapper } from '@common/components/PageTitle/PageTitle.styles.ts';

interface IProps {
  title: string;
}

export const PageTitle: FC<IProps> = ({title}) => {
  return (
    <PageTitleWrapper>
      <PageTitleTypography>{title}</PageTitleTypography>
    </PageTitleWrapper>
  );
};