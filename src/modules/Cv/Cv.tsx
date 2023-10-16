import { Container, Typography } from '@mui/material';

import { PageTitle } from '@common/components/PageTitle/PageTitle.tsx';
import { SocialsList } from '@common/components/SocialsList/SocialsList.tsx';
import { CvAva } from '@modules/Cv/CvAva/CvAva.tsx';
import { InfoList } from '@modules/Cv/InfoList/InfoList.tsx';
import { MultiButton } from '@common/components/MultiButton/MultiButton.tsx';

import { skillsArr } from '@common/static/skills.ts';
import { CvGrid, CvLeftCol, CvLeftColInfo, CvRightCol, CvRightItem } from '@modules/Cv/Cv.styles.ts';

export const Cv = () => {
  return (
    <Container>
      <PageTitle title={'My CV'} />
      <CvGrid>
        <CvLeftCol elevation={3}>
          <CvAva />
          <CvLeftColInfo>
            <InfoList />
            <SocialsList />
            <MultiButton
              href='https://odinokun.com/public/pdf/front-end_developer_Dima_Hordiienko.pdf'
              title='Download cv'
              btnColor='dark'
              target='_blank'
            />
          </CvLeftColInfo>
        </CvLeftCol>
        
        <CvRightCol elevation={3}>
          <CvRightItem>
            <Typography variant={'h4'}>Skills</Typography>
            {skillsArr.map((item, index) => {
              return (
                <Typography variant={'h6'} display={'inline'} key={index}>
                  {index !== (skillsArr.length - 1) ? item + ' / ' : item}
                </Typography>
              );
            })}
          </CvRightItem>
          
          <CvRightItem>
            <Typography variant={'h4'}>Summary</Typography>
            <Typography variant={'body1'}>
              I have worked as a front-end developer for 9++ years, since 2014.
            </Typography>
            <Typography variant={'body1'}>
              I have experience of working in large corporate teams and in small startups. However, despite my
              experience in both large corporate teams and small startups, I prefer long-term working relationships and
              am not inclined to frequently change jobs.
            </Typography>
            <Typography variant={'body1'}>
              My superpower is the ability to transform a design of any complexity into a correctly functioning website.
            </Typography>
            <Typography variant={'body1'}>
              I love the frontend because new technologies appear in it every day. The work of a front-end developer was
              very well described by Lewis Carroll "My dear, here we must run as fast as we can, just to stay in place.
              And if you wish to go anywhere you must run twice as fast as that."
            </Typography>
          </CvRightItem>
          
          <CvRightItem>
            <Typography variant={'h4'}>Education</Typography>
            <Typography variant={'body1'}>
              Kyiv University of Tourism, Economics and Law - <strong>Bachelor's degree</strong> in law
            </Typography>
          </CvRightItem>
          
          <CvRightItem>
            <Typography variant={'h4'}>Additional courses </Typography>
            <Typography variant={'body1'}><strong>React Developer Course</strong> - IT Incubator (2023)</Typography>
            <Typography variant={'body1'}><strong>Complete JavaScript Course</strong> - Loftschool (2018)</Typography>
            <Typography variant={'body1'}><strong>Web Development for Advanced</strong> - Loftschool (2016)</Typography>
          </CvRightItem>
        
        </CvRightCol>
      </CvGrid>
    </Container>
  );
};
