import React from 'react';
import { Link } from 'react-router';

const CABIN_RESERVATION_URL = "https://event.gg/6329/";
const RSVP_URL = "http://shabigail2017.anrsvp.com/";

export default React.createClass({
  render() {
    return (
      <div className="section">
        <h1>RSVP</h1>

        <p>
          We really hope you can make it to our big event!  In order to help us plan, we request that you do these two steps as soon as you are able.
        </p>

        <div className="rsvp-container container-fluid">
          <div className="row jumbotron">
            <form method="GET" action={RSVP_URL} target='_blank'>
              <button className="button btn btn-primary btn-lg col-md-4 col-xs-12">RSVP here</button>
              <div className="col-md-8 col-xs-12">
                To indicate whether you will be able to attend, please fill out your <a href={RSVP_URL} target='_blank'>online RSVP form</a>.
              </div>
            </form>
          </div>
          <div className="row jumbotron">
            <form method="GET" action={CABIN_RESERVATION_URL} target='_blank'>
              <button className="button btn btn-primary btn-lg col-md-4 col-xs-12">Reserve your cabin</button>
              <div className="col-md-8 col-xs-12">
                Once you have sent us your RSVP, please proceed <a href={CABIN_RESERVATION_URL} target='_blank'>to reserve your cabin</a>.
                Please check out the <Link to="/accommodations">Accommodations page</Link> for more details.
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  },
});
