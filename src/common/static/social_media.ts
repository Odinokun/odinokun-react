import { v1 } from 'uuid';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';

interface ISocialMedia {
  id: string;
  label: string;
  link: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  target?: string;
  rel?: string;
}

export const SOCIAL_MEDIA: ISocialMedia[] = [
  {
    id: v1(),
    label: 'E-mail',
    link: 'mailto:odinokun@gmail.com',
    icon: Email,
  },
  {
    id: v1(),
    label: 'GitHub',
    link: 'https://github.com/Odinokun',
    icon: GitHub,
    target: '_blank',
    rel: 'noreferrer noopener nofollow',
  },
  {
    id: v1(),
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/dmitry-gordienko/',
    icon: LinkedIn,
    target: '_blank',
    rel: 'noreferrer noopener nofollow',
  },
];