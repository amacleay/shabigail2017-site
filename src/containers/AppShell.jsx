// Define the application shell
import React, { PropTypes } from 'react';
import MainNavLink from 'components/MainNavLink';

const AppShell = ({ children }) => (
  <div className="container-fluid">
    <div className="row">
      <MainNavLink sectionName="Home" />
      <MainNavLink sectionName="Wedding" />
      <MainNavLink sectionName="Travel" />
      <MainNavLink sectionName="RSVP" />
    </div>
    { children }
  </div>
);

AppShell.propTypes = {
  children: PropTypes.element,
};

export default AppShell;

