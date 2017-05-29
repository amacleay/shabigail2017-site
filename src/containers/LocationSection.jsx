import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div className="section">

        <div className="header-img-container">
          <img
            title="Photo credit: Abigail Mae Malloy"
            src="/images/lifeguard-tower.jpg"
          />
        </div>

        <h2>About the camps</h2>
        <p><a href="http://ymcaboston.org/pleasantvalleycamp">Pleasant Valley Camp for Girls</a> and <a href="http://ymcaboston.org/northwoodscamp">North Woods Camp for Boys</a> are inclusive, traditional summer camps, focused on personal growth, YMCA values, and providing an unforgettable summer.  By coming up to celebrate with us, you will be helping to continue to provide a great growing experience for deserving kids in the Boston area.</p>

      <p>
        Please see the <Link to="/travel">Travel</Link> section for directions.
      </p>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369619.99254306726!2d-71.55770779190537!3d43.63451427922407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb32688b352a86d%3A0xe720ee805c766182!2sNorth+Woods+Camp!5e0!3m2!1sen!2sus!4v1486927789105" width="600" height="450" frameBorder="0" style={{ border: 0, paddingTop: '3em' }} allowFullScreen></iframe>

      </div>

    );
  },
});
