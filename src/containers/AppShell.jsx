// Define the application shell
import React, { PropTypes } from 'react';
import MainNavLink from 'components/MainNavLink';
import { Link } from 'react-router';

function handleImageLoaded(e) {
  $('.navwrapper').height($('.navbar').height());
  $('.navbar').affix({
    offset: {
      top: e.target.height,
    },
  });
  return true;
}

class AppShell extends React.Component {
  componentDidMount() {
    const banner = $('img.banner-img').get(0);

    // If the image is already loaded, the onLoad event
    // never fires.  We can tell if it will fire by
    // checking the 'complete' property
    if (banner.complete) {
      handleImageLoaded({ target: banner });
    }
  }
  render() {
    return (
      <div className="outerShell">
        <div>
          <img
            className="banner-img"
            style={{ maxWidth: '100%' }}
            title="Photo from pexels.com; https://static.pexels.com/photos/139951/pexels-photo-139951.jpeg"
            onLoad={(e) => handleImageLoaded(e)}
            src="/images/pexels-photo-139951.jpeg" />
        </div>
        <div className="navwrapper">
          <nav className="navbar navbar-default affix" data-spy="affix">
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
                <ul className="nav navbar-nav navbar-right">
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Event<span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <MainNavLink to="/wedding">Our Wedding</MainNavLink>
                      <MainNavLink to="/location">Location</MainNavLink>
                      <MainNavLink to="/schedule">Schedule</MainNavLink>
                    </ul>
                  </li>
                  <MainNavLink to="/us">About us</MainNavLink>
                  <MainNavLink to="/travel">Travel</MainNavLink>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Staying<span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <MainNavLink to="/accommodations">Accommodations</MainNavLink>
                      <MainNavLink to="/packing">Packing List</MainNavLink>
                    </ul>
                  </li>
                  <MainNavLink to="/rsvp">RSVP</MainNavLink>
                </ul>
              </div>
              </div>
            </nav>
          </div>
          <div className="container">
            { this.props.children }
          </div>
        </div>
    );
  }
}

AppShell.propTypes = {
  children: PropTypes.element,
};

export default AppShell;

