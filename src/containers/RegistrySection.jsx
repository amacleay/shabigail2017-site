import React from 'react';
import { Link } from 'react-router';

const REGISTRY_URL = "https://www.honeyfund.com/wedding/Shabigail2017";

export default React.createClass({
  render() {
    return (
      <div className="section">
        <h1>Wedding Registry</h1>
        <p>
          We're lucky to already have a home full of everything we need, so in lieu of gifts, we are preparing for our honeymoon! We are planning a road trip adventure to visit many national parks. Hiking, canoeing, and camping out under the stars is the perfect way to celebrate our new marriage and life together!
        </p>

        <div className="rsvp-container container-fluid">
          <div className="row jumbotron">
            <form method="GET" action={REGISTRY_URL} target='_blank'>
              <button className="button btn btn-primary btn-lg col-md-4 col-xs-12">Our online registry</button>
              <div className="col-md-8 col-xs-12">
                Please enjoy browsing our wish list at our <a href={REGISTRY_URL} target='_blank'>online registry</a> as we prepare for a trans-continental National Park adventure!
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  },
});
