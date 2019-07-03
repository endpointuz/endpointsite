import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faInstagram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faTimes,
  faChevronDown,
  faChevronUp,
  faCheck,
  faHome,
  faHistory,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

import '@babel/polyfill';

import './assets/scss/index.scss';

import routes from '../utils/routes.js';
import createStore from '../utils/createStore';
import { ScrollToTop } from './components/util';

import './assets/img/favicons/android-chrome-192x192.png';
import './assets/img/favicons/android-chrome-512x512.png';
import './assets/img/favicons/apple-touch-icon.png';
import './assets/img/favicons/favicon-16x16.png';
import './assets/img/favicons/favicon-32x32.png';
import './assets/img/favicons/mstile-150x150.png';
import './assets/img/favicons/safari-pinned-tab.svg';
import './assets/img/favicons/favicon.ico';

library.add(
  faFacebookF,
  faInstagram,
  faTelegramPlane,
  faBars,
  faTimes,
  faChevronDown,
  faChevronUp,
  faCheck,
  faHome,
  faHistory,
  faPhone,
  faEnvelope,
  faTimesCircle,
);

const store = createStore(window.STORE_DATA, window);

const jsx = (
  <Provider store={store}>
    <Router>
      <ScrollToTop>
        {renderRoutes(routes)}
      </ScrollToTop>
    </Router>
  </Provider>
);


ReactDOM.hydrate(jsx, document.getElementById('app'));
