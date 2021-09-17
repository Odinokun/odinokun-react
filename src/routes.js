import Home from "./pages/Home/Home";
import Cv from "./pages/Cv/Cv";
import Works from "./pages/Works/Works";
import Blog from "./pages/Blog/Blog";
import Contacts from "./pages/Contacts/Contacts";
import NotFound from "./pages/NotFound/NotFound";

import {ReactComponent as Pdf} from './assets/img/icons/home.svg';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  }, {
    path: '/front-end_developer_Dmitry_Gordienko',
    component: Pdf,
    exact: false
  }, {
    path: '/cv',
    component: Cv,
    exact: false
  }, {
    path: '/works',
    component: Works,
    exact: false
  }, {
    path: '/blog',
    component: Blog,
    exact: false
  }, {
    path: '/contacts',
    component: Contacts,
    exact: false
  }, {
    path: '/404',
    component: NotFound,
    exact: false
  }
]

export default routes;