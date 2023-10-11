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
      {cv_info_list.map(({
        id,
        title,
        value,
        link,
        target,
        rel,
      }) => {
        return (
          <InfoListItem key={id}>
            <InfoListTitle>{title}</InfoListTitle>
            {
              link ?
                <InfoListLink href={link} target={target} rel={rel}>{value}</InfoListLink> :
                <InfoListValue>{value}</InfoListValue>
            }
          </InfoListItem>
        );
      })}
    </InfoListEl>
  );
};