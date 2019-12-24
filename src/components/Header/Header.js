import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Header.scss'

class Header extends Component {
  render() {
    const { className } = this.props
    return (
      <div className={`header ${className}`}>
      <div className="header-home">
        <a href="/">Mormei Zanke</a>
      </div>
      <div className="header-links">
        <a href="/">Writing</a>
        <a href="/">About Me</a>
      </div>
      </div>
    );
  }
}

export default Header;
