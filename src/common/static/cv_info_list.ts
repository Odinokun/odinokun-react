import { v1 } from 'uuid';

interface ICvInfoList {
  id: string;
  title: string;
  value: string;
  link: string | null;
  target?: string;
  rel?: string;
}

export const cv_info_list: ICvInfoList[] = [
  {
    id: v1(),
    title: 'Name',
    value: 'Dima Hordiienko',
    link: null,
  }, {
    id: v1(),
    title: 'Position',
    value: 'Front-end Developer',
    link: null,
  }, {
    id: v1(),
    title: 'Employment',
    value: 'Full-time',
    link: null,
  }, {
    id: v1(),
    title: 'Location',
    value: 'Canada, Ottawa',
    link: null,
  }, {
    id: v1(),
    title: 'Experience',
    value: '9+ years',
    link: null,
  }, {
    id: v1(),
    title: 'Email',
    value: 'odinokun@gmail.com',
    link: 'mailto:odinokun@gmail.com',
  }, {
    id: v1(),
    title: 'Website',
    value: 'odinokun.com',
    link: 'http://odinokun.com',
  }, {
    id: v1(),
    title: 'Socials',
    value: 'LinkedIn',
    link: 'https://www.linkedin.com/in/dmitry-gordienko/',
    target: '_blank',
    rel: 'noreferrer noopener nofollow',
  }, {
    id: v1(),
    title: '',
    value: 'GitHub',
    link: 'https://github.com/Odinokun',
    target: '_blank',
    rel: 'noreferrer noopener nofollow',
  },
];