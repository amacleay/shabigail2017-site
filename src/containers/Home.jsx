import React from 'react';


export default React.createClass({
  render() {
    return (
      <div className="section">
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
            <h3>September 22 &ndash; 24, 2017</h3>
            <h3>North Woods Camp</h3>
            <h3>Mirror Lake, New Hampshire</h3>
          </div>
        </div>
      </div>
    );
  },
});
