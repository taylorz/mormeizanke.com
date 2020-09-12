import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import { HashLink as HashLink } from 'react-router-hash-link';
import './Header.scss'

class Header extends Component {
  render() {
    const { className } = this.props
    return (
      <div className={`header ${className}`}>
      <div className="header-home">
        <Link to="/">Mormei Zanke</Link>
      </div>
      <div className="header-links">
        <HashLink to="#writing-section">Writing</HashLink>
        <Link to="/about">About Me</Link>
      </div>
      </div>
    );
  }
}

export default Header;
