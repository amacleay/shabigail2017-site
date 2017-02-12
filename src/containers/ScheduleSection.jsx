import React from 'react';

export default React.createClass({
  render() {
    return (
      <div className="section">
        <h2>A Weekend Adventure</h2>
        <p>
          Our wedding weekend begins on Friday, September 22 and will continue through the early afternoon on Sunday, September 24.  We sincerely hope you will be able to spend the entire time with us celebrating this important occasion!  While there are accomodations nearby, we promise that staying with us in the camp will be more relaxing and more fun than any of the alternatives!
        </p>
        <p>
          Please aim to arrive Friday evening so you can be present for the first night's dinner and campfire fun.  There will be ample parking and we will make arrangements to ensure an easy check-in to the camp.  Once on the camp property, please plan on being able to get around the small property without a motor vehicle. <i>Please let us know if this presents a problem - we will make arrangements to ensure everyone's comfort</i>.
        </p>

        <h2>Schedule</h2>
        <p className="text-info">
          <i>Please note that food and drink will be provided throughout the weekend by the capable camp staff.</i>
        </p>

        <div className="schedule-day-container">
          <h4>Friday</h4>

          <ul className="schedule-event-list">
            <li className="schedule-event-item">
              <div className="schedule-event-time">4-6 pm</div>
              <div className="schedule-event-name">Guests arrive</div>
            </li>
            <li className="schedule-event-item">
              <div className="schedule-event-time">6 pm</div>
              <div className="schedule-event-name">Barbecue dinner</div>
            </li>
            <li className="schedule-event-item">
              <div className="schedule-event-time">8 pm</div>
              <div className="schedule-event-name">Campfire and s'mores</div>
            </li>
          </ul>
        </div>

        <div className="schedule-day-container">
          <h4>Saturday</h4>

          <ul className="schedule-event-list">
            <li className="schedule-event-item">
              <div className="schedule-event-time">8 am</div>
              <div className="schedule-event-name">Breakfast</div>
            </li>
            <li className="schedule-event-item">
              <div className="schedule-event-time">9 am</div>
              <div className="schedule-event-name">Activity time</div>
            </li>
            <li className="schedule-event-item">
              <div className="schedule-event-time">12 pm</div>
              <div className="schedule-event-name">Lunch</div>
            </li>
            <li className="schedule-event-item">
              <div className="schedule-event-time">1 pm</div>
              <div className="schedule-event-name">Activity time</div>
            </li>
            <li className="schedule-event-item">
              <div className="schedule-event-time">5:30 pm</div>
              <div className="schedule-event-name">Wedding ceremony</div>
            </li>
            <li className="schedule-event-item">
              <div className="schedule-event-time">6 pm</div>
              <div className="schedule-event-name">Cocktail hour</div>
            </li>
            <li className="schedule-event-item">
              <div className="schedule-event-time">7 pm</div>
              <div className="schedule-event-name">Reception - dinner, music, and dancing</div>
            </li>
          </ul>
        </div>

        <div className="schedule-day-container">
          <h4>Sunday</h4>

          <ul className="schedule-event-list">
            <li className="schedule-event-item">
              <div className="schedule-event-time">8-11 am</div>
              <div className="schedule-event-name">Brunch</div>
            </li>
          </ul>
        </div>
      </div>
    );
  },
});
