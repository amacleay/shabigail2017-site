// Define the application shell
import React, { PropTypes } from 'react';
import MainNavLink from 'components/MainNavLink';
import { Link } from 'react-router';

const AppShell = ({ children }) => (
    <div>
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
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Wedding <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><MainNavLink to="/wedding">Overview</MainNavLink></li>
                </ul>
              </li>
              <li><MainNavLink to="/travel">Travel</MainNavLink></li>
              <li><MainNavLink to="/rsvp">RSVP</MainNavLink></li>
            </ul>
          </div>
          </div>
        </nav>
        { children }
      </div>
);

AppShell.propTypes = {
  children: PropTypes.element,
};

export default AppShell;

