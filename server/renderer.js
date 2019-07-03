import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import '@babel/polyfill';
import routes from '../utils/routes.js';
import { ScrollToTop } from '../client/components/util';

const renderer = (req, store) => {
  const context = {};
  const state = store.getState();

  const content = renderToString(
    <Provider store={store}>
      <Router context={context} location={req.path} query={req.query}>
        <ScrollToTop>
          {renderRoutes(routes)}
        </ScrollToTop>
      </Router>
    </Provider>,
  );
  const jsx = `
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          <link rel="icon" sizes="16x16" href="/img/favicon-16x16.png">
          <link rel="icon" sizes="32x32" href="/img/favicon-32x32.png">
          <link rel="icon" href="/img/favicon.ico">
          <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#00а0ff" />
          <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
          <link rel="icon" sizes="192x192" href="/img/android-chrome-192x192.png">
          <link rel="icon" sizes="512x512" href="/img/android-chrome-512x512.png">
          <link rel="stylesheet" href="/main.css" />
      </head>

      <body>
          <div class="loader">
            <div class="loader-circle"></div>
          </div>
          <div id="app">${content}</div>
          <script>
            window.STORE_DATA = ${JSON.stringify(state).replace('<script>', '')}
          </script>
          <script src="/vendors.js"></script>
          <script src="/runtime.js"></script>
          <script src="/main.js"></script>
      </body>
      </html>
  `;

  return { jsx, context };
};

export default renderer;
