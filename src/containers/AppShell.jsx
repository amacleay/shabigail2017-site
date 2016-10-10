// Define the application shell
import React, { PropTypes } from 'react';
import MainNavLink from 'components/MainNavLink';

const AppShell = ({ children }) => (
  <div className="container-fluid">
    <div className="row">
      <MainNavLink to="/" sectionName="Home" />
      <MainNavLink to="/wedding" sectionName="Wedding" />
      <MainNavLink to="/travel" sectionName="Travel" />
      <MainNavLink to="/rsvp" sectionName="RSVP" />
    </div>
    { children }
  </div>
);

AppShell.propTypes = {
  children: PropTypes.element,
};

export default AppShell;

