import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  propTypes: {
    to: React.PropTypes.string
  },

  render() {
    return (
      <Link to={this.props.to}>
        {this.props.children}
      </Link>
    );
  },
});

