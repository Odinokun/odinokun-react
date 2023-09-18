import { FC } from 'react';
import i18next from 'i18next';

import { Contacts } from '@modules/Contacts/Contacts';
import { withMetadata } from '@common/hoc/withMetadata';

const ContactsPage: FC = () => <Contacts />;

export const ContactsPageMeta = withMetadata({
  title: i18next.t('meta.contacts.title'),
  description: i18next.t('meta.contacts.description'),
})(ContactsPage);

export default ContactsPageMeta;
