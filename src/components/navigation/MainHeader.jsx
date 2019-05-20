import React from 'react';
import { Link } from "react-router-dom";

export class MainHeader extends React.Component {
  render() {
    return (
      <header id='MainHeader'>
        <Link to='/'>Home</Link>
        <Link to='/register'>Register</Link>
        <Link to='/my-profile'>My Profile</Link>
      </header>
    );
  }
}