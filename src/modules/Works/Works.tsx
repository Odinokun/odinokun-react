import { Container, Grid } from '@mui/material';

import { PageTitle } from '@common/components/PageTitle/PageTitle.tsx';
import { Work } from '@modules/Works/Work/Work.tsx';

import { WORKS } from '@common/static/works.ts';
import { WorksWrapper } from '@modules/Works/Works.styles.ts';

export const Works = () => {
  return (
    <Container>
      <PageTitle title="Some works" />
      <WorksWrapper container spacing={2}>
        {WORKS.map(work => (
          <Grid item xs={12} md={6} xl={4} key={work.id}>
            <Work work={work} />
          </Grid>
        ))}
      </WorksWrapper>
    </Container>
  );
};
