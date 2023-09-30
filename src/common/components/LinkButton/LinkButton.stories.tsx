import { LinkButton } from './LinkButton';

export default {
  title: 'LinkButton',
  component: LinkButton,
};

export const BaseLinkButton = () => (
  <LinkButton href='/' title='Download CV' btnColor='light' />
);
export const DarkLinkButton = () => (
  <LinkButton href='/' title='Download CV' btnColor='dark' />
);
