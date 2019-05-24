import React from 'react';
import { Link } from 'react-router-dom';

import { CompleteProfilePage } from "./CompleteProfile/CompleteProfilePage"

export class RegisterPage extends React.Component {
  render() {
    return (
      <div id='RegistrationPage'>
        <form>
          <div className='form-control'>
            <label>Name</label>
            <input type="text" />
          </div>

          <div className='form-control'>
            <label>Email</label>
            <input type="email" />
          </div>

          
          <div className='form-control'>          
          <button><Link to='/CompleteProfilePage'>Register</Link></button>
          </div>
          


          
        </form>
      </div>
    );
  }
}