import React from 'react';

export class CompleteProfilePage extends React.Component {
  render() {
    return (
      <div id='CompleteProfilePage'>
        <form>
          <div class='form-control'>
            <label>Age</label>
            <input type="text" />
          </div>

          <div class='form-control'>
            <label>Interests</label>
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