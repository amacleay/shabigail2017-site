import React from 'react';


export default React.createClass({
  render() {
    return (
      <div className="section">
        <h1>About Us</h1>
        <p>
          We began our journey together in the summer of 2011, both working at <a href="https://yea.org/programs/cadets/cadets">the Cadets</a> drum corps.  We spent a couple of difficult years apart, flying frequently to see one another, but in the summer of 2013, Abigail made the move to Medford, Massachusetts.  We've been causing trouble together in eastern Mass ever since.
        </p>
        <div><img src='/images/abi-cow.jpg' className="abby-cow" /></div>
        <p>
          In the summer of 2015, both of us were on the road on the teaching staff of the Cadets, among many of the same people we'd been with when we met back in 2011.  On finals day, during the final daily staff meeting of the season, Andrew screwed up his courage and asked a question that had been on his mind for the past four years:
        </p>
        <div>
          <video controls>
            <source src="/images/engage.mp4" type="video/mp4"></source>
            Your browser does not support native video.
          </video>
        </div>
      </div>
    );
  },
});
