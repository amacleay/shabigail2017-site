import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  propTypes: {
    sectionName: React.PropTypes.string,
    to: React.PropTypes.string
  },

  render() {
    return (
      <div className="col-md-3">
	<h3><Link to={this.props.to}>{this.props.sectionName}</Link></h3>
      </div>
    );
  },
});

