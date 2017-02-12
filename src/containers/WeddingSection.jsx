import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div className="section">
        <div className="lead text-center">
          <div>
            <img
              className="our-adventure-img"
              title="From https://blog.onlinelabels.com/2015/06/17/diy-calligraphy-wedding-signs/; https://blog.onlinelabels.com/wp-content/uploads/2015/06/our-adventure-begins.jpg"
              src="/images/our-adventure-begins.png" />
          </div>

          <h2>September 22nd through September 24th, 2017</h2>
          <h4>North Woods/Pleasant Valley Camp</h4>
          <h4>Mirror Lake, New Hampshire</h4>
        </div>


        <p>
          Please join us as we begin the next phase of our adventure together!
        </p>

        <p>
          Our wedding weekend begins on Friday, September 22 and will continue through the early afternoon on Sunday, September 24.  We sincerely hope you will be able to spend the entire time with us celebrating this important occasion!  While there are accomodations nearby, we promise that staying with us in the camp will be more relaxing and more fun than any of the alternatives!
        </p>

        <p>
          For more information about what will be happening and when, take a look at the <Link to="/schedule">Schedule</Link> for the weekend and the <Link to="/activities">Activities</Link> we have planned!
        </p>

        <h2>FAQ</h2>

        <ul>
          <li className="wedding-faq-qna">
            <div className="wedding-faq-q">
              What are sleeping accomodations like?
            </div>
            <div className="wedding-faq-a">
              <p>
                Please see the <Link to="/accommodations">Accommodations</Link> section.
              </p>
            </div>
          </li>

          <li className="wedding-faq-qna">
            <div className="wedding-faq-q">
              Can I camp in a tent or hammock instead of sleeping in a cabin?
            </div>
            <div className="wedding-faq-a">
              Absolutely!  You'll still be able to use all of the facilities, so this is a great option for those that want to engage more with the outdoors!
            </div>
          </li>

          <li className="wedding-faq-qna">
            <div className="wedding-faq-q">
              What do we do about food and drink?
            </div>
            <div className="wedding-faq-a">
              <p>
                Meals will be provided throughout the weekend: dinner on Friday, three meals Saturday, and brunch on Sunday.  Various alcoholic and non-alcoholic beverages will be available freely at all times, with special service on Saturday evening.
              </p>
            </div>
          </li>

          <li className="wedding-faq-qna">
            <div className="wedding-faq-q">
              Can I bring my own food and drink, or some to share?
            </div>
            <div className="wedding-faq-a">
              Please do if you like!  While it won't be necessary, you may bring in whatever you like, so long as you clean up after yourself.
            </div>
          </li>
        </ul>
      </div>
    );
  },
});
