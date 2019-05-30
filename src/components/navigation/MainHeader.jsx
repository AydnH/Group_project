import React from 'react';
import { Link } from "react-router-dom";

export class MainHeader extends React.Component {
  render() {
    return (
      <header id='MainHeader'>
        <Link to='/HomePage'>Home</Link>
        <Link to='/SignUp'>Sign Up</Link>
        <Link to='/my-profile'>My Profile</Link>

        <Link to='/Final/'>Final</Link>
        <Link to='/Location/'>Location</Link>
        <Link to='/ProfileSetup/'>ProfileSet</Link>
        <Link to='/Payment/'>Payment</Link>
      </header>
    );
  }
}