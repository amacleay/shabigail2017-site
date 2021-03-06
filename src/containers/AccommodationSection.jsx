import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div className="section">
        <h1>Accommodations</h1>

        <div className="header-img-container">
          <img
            title="Photo credit Abigail May Malloy"
            src="/images/boys-cabin.jpg"
          />
        </div>

        <p>
          The wedding weekend will be entirely on the property of the North Woods and Pleasant Valley Camps.  We chose to have the wedding here so that we could have all of our family and friends together in one place.  Once we all arrive, there will be plenty of entertainment for folks of all ages and temperaments, and no one has to worry about driving.
        </p>

        <p>
          The cabins are rustic and will provide folks with a true summer camp experience.  All cabins have bunk beds and some single twin beds, most of which can be pushed together.  The cabins are very simple and beautiful wood cabins with screened in windows to allow you to enjoy the beautiful New Hampshire fresh air all weekend long. Many cabins have separated rooms so some guests will share a cabin with others, but with a little privacy. We will do our best to make you the most comfortable in your cabin assignment as possible.
        </p>

        <p>
          Most cabins don't have electricity, but there is access to electricity in all of the communal bathhouses which have hot showers as well as restrooms.  Several cabins do have electicity, though, so please let us know if that is something you need, as we should have no trouble accommodating the request.
        </p>

        <div className="header-img-container">
          <img
            title="Photo credit Abigail May Malloy"
            src="/images/bed-no-mattress.jpg"
          />
        </div>

        <h2>Reservation</h2>
        <p>
          We sincerely hope you will choose to stay with us at camp.
        </p>

        <p>
          The camp charges a per-person fee for lodging and meals for the weekend.  If you are staying with us either or both nights, you will need to <Link to="/rsvp">reserve your cabin</Link>&nbsp; before the event.
        </p>

        <p>
          The cost for staying at the camp includes the shared cabin for two nights and all meals for the weekend:
        </p>

        <ul>
          <li>
            Friday night dinner
          </li>
          <li>
            Saturday breakfast
          </li>
          <li>
            Saturday lunch
          </li>
          <li>
            Saturday late-night snack
          </li>
          <li>
            Sunday brunch
          </li>
        </ul>

        <p>
          Individual attendees, invited couples, and families are asked to contribute $90, $160, or $200, respectively, to cover the cost of facilities, food, and beverages for the entire weekend, from Friday through Sunday.  You are encouraged to provide your own bed linens, but if it is more convenient, the camp is able to provide them for $15 per set.
        </p>

        <p>
          Please let us know if this reservation fee is a hardship, and we will make accommodations for you.  The most important thing is that we have all of our family and friends there with us, so we will do whatever is necessary to make sure you are there.
        </p>
      </div>
    );
  },
});
