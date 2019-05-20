import React from 'react';

export class RegisterPage extends React.Component {
  render() {
    return (
      <div id='RegistrationPage'>
        <form>
          <div class='form-control'>
            <label>Name</label>
            <input type="text" />
          </div>

          <div class='form-control'>
            <label>Email</label>
            <input type="email" />
          </div>

          <div class='form-control'>
            <button>
              Register!
            </button>
          </div>
        </form>
      </div>
    );
  }
}