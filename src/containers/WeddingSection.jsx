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

          <h3>September 22nd through September 24th, 2017</h3>
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

        <h3>Accomodations</h3>

        <p>
          The wedding weekend will be entirely on the property of the North Woods and Pleasant Valley Camps.  These are summer camps for youth, and as such are <i>very rustic</i>.  These are far from five-star accomodations, but we believe that you will enjoy the quiet, relaxed pace of a weekend among friends and family, unplugged, without the distractions of modern convenience.
        </p>

        <p>
          Most of us will be sleeping in humble wooden cabins and using shared restrooms.  Not all cabins have electricity, heat, or even wind-proof windows, but some cabins do. <i>Please let us know if you require special accomodations - we will make arrangements to ensure everyone's comfort</i>.
        </p>

        <h3>FAQ</h3>

        <ul>
          <li className="wedding-faq-qna">
            <div className="wedding-faq-q">
              What are sleeping accomodations like?
            </div>
            <div className="wedding-faq-a">
              <p>
                Beds are typical simple summer camp beds with thin mattresses.  You may either bring a sleeping bag of your choosing or request that we provide you with linens.
              </p>
              <p>
                Temperature should not be an issue due to the season, but you should be prepared for the evenings to get a little chilly, even in the cabins.
              </p>
              <p>
                If any of this presents a problem, please let us know so we can make alternate arrangements. <i>We will ensure everyone's comfort</i>.
              </p>
            </div>
          </li>

          <li className="wedding-faq-qna">
            <div className="wedding-faq-q">
              Can I camp in a tent or hammock instead of sleeping in a cabin?
            </div>
            <div className="wedding-faq-a">
              Absolutely!
            </div>
          </li>

          <li className="wedding-faq-qna">
            <div className="wedding-faq-q">
              What do we do about electricity?
            </div>
            <div className="wedding-faq-a">
              <p>
                Some cabins and much of the camps facilities do have electricity, so by sharing, you should be able to get your mobile phone charged and plug in your various hair drying equipment on Saturday.
              </p>
              <p>
                If you have a particular requirement for electricity in your cabin for one reason or another, please let us know and we will make arrangements.
              </p>
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
