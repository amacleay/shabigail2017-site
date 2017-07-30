import logger from 'morgan';
import express from 'express';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import routes from './src/routes';
import appBehaviour from './src/reducers';
const app = express();

/** Returns a rendered string including your initial state
  / and initial render.
  */
function renderFullPage(html, initialState) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="google-site-verification" content="An92hGCohO35ABPiFTmY82vynP-gGtduzc1xTAIuELY" />
        <title>Abby and Andrew</title>
        <link type="text/css" rel="stylesheet" href="dist/main.css" />
        <link href="https://fonts.googleapis.com/css?family=IM+Fell+Great+Primer" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Tangerine" rel="stylesheet">
        <script src="http://code.jquery.com/jquery-3.1.1.slim.min.js" crossorigin="anonymous"></script>
      </head>
      <body>
        <div id="root-app">${html}</div>
          <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
          </script>
          <script async type="application/javascript" src="dist/bundle.js"></script>
      </body>
    </html>`;
}

/**
 * Handles Request. Returns rednered page.
 * Triggered on every request.
 */
function handleRender(req, res) {
  // Matches the incoming request with a potential route in the react app.
  match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      return res.status(500).end('Internal server error');
    }
    // If no route is found return a 404.
    if (!renderProps) {
      return res.status(404).end('Not found.');
    }

    // Initialise our redux store with out reducers.
    const store = createStore(appBehaviour);
    // Initialise the componenet with the store
    // and rendered properties.
    const InitialComponent = (
      <Provider store={store} >
        <RouterContext {...renderProps} />
      </Provider>
    );
    const componentHTML = renderToString(InitialComponent);
    // Grab the initial state from our Redux store
    const initialState = store.getState();
    // Send the rendered page back to the client
    // including any initial state from redux.
    res.status(200).send(renderFullPage(componentHTML, initialState));
  });
}

// Register static assets to serve from server.
app.use('/dist', express.static(`${__dirname}/dist`));
app.use('/images', express.static(`${__dirname}/images`));
// Register middleware.
app.use(logger('combined'));
app.use(handleRender);
export default app;
