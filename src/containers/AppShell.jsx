// Define the application shell
import React, { PropTypes } from 'react';
import MainNavLink from 'components/MainNavLink';
import { Link } from 'react-router';

const AppShell = ({ children }) => (
    <div className="outerShell">
        <div>
          <img
            style={{ maxWidth: '100%' }}
            title="Photo from pexels.com; https://static.pexels.com/photos/139951/pexels-photo-139951.jpeg"
            src="/images/pexels-photo-139951.jpeg" />
        </div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">Abby and Andrew</Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Event<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><MainNavLink to="/wedding">Our Wedding</MainNavLink></li>
                  <li><MainNavLink to="/location">Location</MainNavLink></li>
                  <li><MainNavLink to="/schedule">Schedule</MainNavLink></li>
                  <li><MainNavLink to="/activities">Activities</MainNavLink></li>
                </ul>
              </li>
              <li><MainNavLink to="/us">About us</MainNavLink></li>
              <li><MainNavLink to="/travel">Travel</MainNavLink></li>
              <li><MainNavLink to="/rsvp">RSVP</MainNavLink></li>
            </ul>
          </div>
          </div>
        </nav>
        <div className="container">
          { children }
        </div>
      </div>
);

AppShell.propTypes = {
  children: PropTypes.element,
};

export default AppShell;

