// Uses React Router as a wrapper to our components.
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Route, Router, IndexRoute } from 'react-router';
import AppShell from './containers/AppShell.jsx';
import WeddingSection from 'containers/WeddingSection';
import LocationSection from 'containers/LocationSection';
import ScheduleSection from 'containers/ScheduleSection';
import AccommodationSection from 'containers/AccommodationSection';
import AboutUsSection from 'containers/AboutUsSection';
import TravelSection from 'containers/TravelSection';
import RsvpSection from 'containers/RsvpSection';

// Polyfill for server side rendering of application
if (typeof require.ensure !== 'function') {
  // eslint-disable-next-line global-require
  require.ensure = require('isomorphic-ensure')({
    // If you require local files, pass the current location:
    dirname: __dirname,
  });
}
/**
 * webpack will bundle separate files on require.ensure
 * and load each file in lazily to reduce initial load.
 */
export default (
   // App Shell
   <Route component={AppShell} path='/'>
    // Home Page (Index /)
    <IndexRoute getComponent={(next, cb) => {
      require.ensure([], (require) => {
        cb(null, require('./containers/Home.jsx'));
      });
    }}/>
    <Route path="/wedding" component={WeddingSection} />
    <Route path="/location" component={LocationSection} />
    <Route path="/schedule" component={ScheduleSection} />
    <Route path="/accommodations" component={AccommodationSection} />
    <Route path="/us" component={AboutUsSection} />
    <Route path="/travel" component={TravelSection} />
    <Route path="/rsvp" component={RsvpSection} />
  </Route>
);
