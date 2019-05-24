import React from 'react';
import { Link } from "react-router-dom";

export class RegisterButton extends React.Component {
  render() {
    return (
      <button id='Registerbutton'>
        <Link to='/CompleteProfilePage'>Register</Link>

      </button>
    );
  }
}