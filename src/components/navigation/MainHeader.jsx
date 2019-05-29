import React from 'react';
import { Link } from "react-router-dom";

export class MainHeader extends React.Component {
  render() {
    return (
      <header id='MainHeader'>
        <Link to='/'>Home</Link>
        <Link to='/register'>Register</Link>
        <Link to='/my-profile'>My Profile</Link>

        <Link to='/Final/'>Payment</Link>
        <Link to='/Location/'>Location</Link>
        <Link to='/ProfileSetup/'>ProfileSet</Link>
        <Link to='/ProfileImage/'>ProfileImg</Link>
        <Link to='/Payment/'>Payment</Link>
      </header>
    );
  }
}