import { cv_info_list } from '@common/static/cv_info_list.ts';
import {
  InfoListEl,
  InfoListItem,
  InfoListLink,
  InfoListTitle,
  InfoListValue,
} from '@modules/Cv/InfoList/InfoList.styles.ts';

export const InfoList = () => {
  return (
    <InfoListEl>
      {cv_info_list.map(item => {
        return (
          <InfoListItem key={item.id}>
            <InfoListTitle>{item.title}</InfoListTitle>
            {
              !item.link ?
                <InfoListValue>{item.value}</InfoListValue> :
                <InfoListLink href={item.link} target={item?.target}>{item.value}</InfoListLink>
            }
          </InfoListItem>
        );
      })}
    </InfoListEl>
  );
};