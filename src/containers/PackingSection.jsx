import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div className="section">

        <h2>Packing for the weekend</h2>

        <p>
        We truly hope you will stay with us for as much of the weekend as you are able.
        This will really be a wedding weekend like no other, so we advise that you come prepared to celebrate in comfort and style!
        </p>

        <p>
          For more information about the camp, see the <Link to="/accommodations">Accommodations</Link> section.
        </p>

        <h2>What to bring</h2>

        <ul>

          <li className="wedding-faq-qna">
            <div className="wedding-faq-q">
              Your dogs
            </div>
            <div className="wedding-faq-a">
              Dogs are more than welcome for the weekend.  There is some wildlife around (porcupines, chipmunks, etc), so do be sure that you can keep them out of trouble.
            </div>
          </li>

          <li className="wedding-faq-qna">
            <div className="wedding-faq-q">
              Comfortable, seasonable clothes
            </div>
            <div className="wedding-faq-a">
              We are going to have lots of activites for you to do!  If you enjoy such things, be prepared for outdoor sports and games, and you probably won't do as well as you'd like in a suit or dress.
            </div>
          </li>

          <li className="wedding-faq-qna">
            <div className="wedding-faq-q">
              Bathing suit
            </div>
            <div className="wedding-faq-a">
              We are on a lake, after all.
            </div>
          </li>

          <li className="wedding-faq-qna">
            <div className="wedding-faq-q">
              Outdoor activities
            </div>
            <div className="wedding-faq-a">
              We will have some equipment for outdoor games, but we can always use more.  Balls, frisbees, hacky sacks, etc. are all fair game!
            </div>
          </li>

          <li className="wedding-faq-qna">
            <div className="wedding-faq-q">
              Sweater and jacket
            </div>
            <div className="wedding-faq-a">
              It is likely to be cool at night.  Come prepared so that you won't be cold, especially if you are coming from Miami!
            </div>
          </li>

          <li className="wedding-faq-qna">
            <div className="wedding-faq-q">
              Sleeping bag
            </div>
            <div className="wedding-faq-a">
              The camp will provide linens for your bed, but they charge $15 per set.  Bring your own sleeping bag or warm sheets and blanket to avoid the charge.  Remember &mdash; it can get cool in New Hampshire in late September!
            </div>
          </li>

          <li className="wedding-faq-qna">
            <div className="wedding-faq-q">
              Bug spray
            </div>
            <div className="wedding-faq-a">
              September is still summer, so mosquitoes are likely to be a factor.
            </div>
          </li>

          <li className="wedding-faq-qna">
            <div className="wedding-faq-q">
              Sun screen
            </div>
            <div className="wedding-faq-a">
              Don't forget to use sunscreen even if it's cool out &mdash; the sun is still shining.
            </div>
          </li>

          <li className="wedding-faq-qna">
            <div className="wedding-faq-q">
              Rain jacket
            </div>
            <div className="wedding-faq-a">
              Rain or shine, we are going to have a good time!
            </div>
          </li>

          <li className="wedding-faq-qna">
            <div className="wedding-faq-q">
              Shower items
            </div>
            <div className="wedding-faq-a">
              You will want to bring soap, towel, toothbrush, toothpaste, and all of the other essentials.
            </div>
          </li>

          <li className="wedding-faq-qna">
            <div className="wedding-faq-q">
              Additional snacks and drinks
            </div>
            <div className="wedding-faq-a">
              We, together with the camp, will be providing food and drink for the whole weekend, but you should feel free to bring along any snacks or beverages you like.  In particular, we encourage you to bring along additional beer and wine &mdash; we will have a fair amount, but additional supplies will be appreciated!
            </div>
          </li>

        </ul>
      </div>
    );
  },
});
