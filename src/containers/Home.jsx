import React from 'react';


export default React.createClass({
  render() {
    return (
      <div className="section">
      <br />
        <div className="sorta-jumbotron">
          <div className="name-container-container">
            <div className="name-container">
              <span className="name">Abigail</span>
              <img
                className="name heart"
                src='/images/small-red-heart.png'
                title='From clcker.com; http://www.clker.com/cliparts/C/m/R/8/C/K/small-red-heart-with-transparent-background-th.png'
                alt='Small Red Heart With Transparent Background clip art'
              />
              <span className="name">Andrew</span>
            </div>
          </div>
          <div>
            <img
              className="our-adventure-img"
              title="From https://blog.onlinelabels.com/2015/06/17/diy-calligraphy-wedding-signs/; https://blog.onlinelabels.com/wp-content/uploads/2015/06/our-adventure-begins.jpg"
              src="/images/our-adventure-begins.png" />
          </div>
          <div className="date">
            <div>September 22 &ndash; 24, 2017</div>
            <div>North Woods Camp</div>
            <div>Mirror Lake, New Hampshire</div>
          </div>
        </div>
      </div>
    );
  },
});
