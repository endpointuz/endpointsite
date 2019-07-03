import Homepage from '../client/view/Homepage';
import NotFound from '../client/view/NotFound';
import Portfolio from '../client/view/Portfolio';
import Projects from '../client/view/Projects';
import Contacts from '../client/view/Contacts';
import About from '../client/view/About';
import SinglePortfolio from '../client/view/SinglePortfolio';
import portfolioContent from './portfolioContent';

const singlePortfolioRoutes = portfolioContent.map(({ id }) => `/portfolio/${id}/`);

const routes = [
  {
    component: Homepage,
    path: '/',
    exact: true,
  },
  {
    component: Portfolio,
    path: '/portfolio',
    exact: true,
  },
  {
    component: SinglePortfolio,
    path: singlePortfolioRoutes,
    exact: true,
  },
  {
    component: Projects,
    path: '/projects',
    exact: true,
  },
  {
    component: Contacts,
    path: '/contacts',
    exact: true,
  },
  {
    component: About,
    path: '/about',
    exact: true,
  },
  {
    component: NotFound,
    path: '/',
    exact: false,
  },
];

export default routes;
