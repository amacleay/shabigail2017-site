import React from 'react';

export default React.createClass({
  propTypes: {
    sectionName: React.PropTypes.string
  },

  render() {
    return (
      <div className="col-md-3">
	<h3>{this.props.sectionName}</h3>
      </div>
    );
  },
});

