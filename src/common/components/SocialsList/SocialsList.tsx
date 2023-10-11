import { SOCIAL_MEDIA } from '@common/static/social_media.ts';
import {
  SocialLink,
  SocialList,
  SocialListItem,
} from '@common/components/SocialsList/SocialsList.styles.ts';

export const SocialsList = () => {
  return (
    <SocialList>
      {SOCIAL_MEDIA.map(({
        id,
        label,
        link,
        icon: SocialIcon,
        target,
        rel,
      }) => (
        <SocialListItem key={id}>
          <SocialLink href={link} target={target} rel={rel}>
            <SocialIcon title={label} />
          </SocialLink>
        </SocialListItem>
      ))}
    </SocialList>
  );
};