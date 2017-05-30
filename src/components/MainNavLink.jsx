import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    const { children, ...other } = this.props;
    return (
      <li>
        <Link {...other} activeClassName="active" className="hidden-xs">
          {this.props.children}
        </Link>
        <Link {...other} activeClassName="active" className="visible-xs" data-toggle="collapse" data-target=".navbar-collapse">
          {this.props.children}
        </Link>
      </li>
    );
  },
});

