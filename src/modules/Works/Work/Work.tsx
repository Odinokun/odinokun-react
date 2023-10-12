import { FC } from 'react';

import {
  WorkDate,
  WorkDateText,
  WorkDescription,
  WorkImage,
  WorkImageWrapper,
  WorkLink,
  WorkLinkText,
  WorkTag,
  WorkTags,
  WorkWrapper,
} from '@modules/Works/Work/Work.styles.ts';

import { Box, Typography } from '@mui/material';
import { CalendarMonth, InsertLink } from '@mui/icons-material';
import { IWork } from '@typings/types.ts';

interface IProps {
  work: IWork;
}

export const Work: FC<IProps> = ({work}) => {
  return (
    <WorkWrapper elevation={0}>
      <WorkLink href={work.link} target="_blank" rel="nofollow noopener noreferrer">
        
        <WorkImageWrapper>
          <WorkImage src={work.imgSrc} alt={work.title} />
        </WorkImageWrapper>
        
        <Box>
          <Typography variant={'h5'}>{work.title}</Typography>
          
          <WorkDescription>
            <WorkDate>
              <CalendarMonth />
              <WorkDateText variant={'caption'}>{work.date}</WorkDateText>
            </WorkDate>
            
            <WorkLinkText>
              <InsertLink />
              <Typography variant={'body2'}>{work.linkTitle}</Typography>
            </WorkLinkText>
          </WorkDescription>
          
          <WorkTags>
            {work.tags.map(tag => <WorkTag key={tag} variant={'caption'}>{tag}</WorkTag>)}
          </WorkTags>
        </Box>
      </WorkLink>
    </WorkWrapper>
  );
};
