import {ReactComponent as Home} from "../assets/img/icons/home.svg";
import {ReactComponent as Cv} from '../assets/img/icons/cv.svg';
import {ReactComponent as Works} from '../assets/img/icons/works.svg';
import {ReactComponent as Blog} from '../assets/img/icons/blog.svg';
import {ReactComponent as Contacts} from '../assets/img/icons/contacts.svg';

const menuItems = [
  {
    link: '/',
    icon: <Home/>,
    text: 'home'
  }, {
    link: '/cv',
    icon: <Cv/>,
    text: 'cv'
  }, {
    link: '/works',
    icon: <Works/>,
    text: 'works'
  }, {
    link: '/blog',
    icon: <Blog/>,
    text: 'blog'
  }, {
    link: '/contacts',
    icon: <Contacts/>,
    text: 'contacts'
  }
]

export default menuItems;