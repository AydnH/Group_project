import React from 'react';

export class ProfileImagePage extends React.Component {
  

  
  render() {
    return (
		<div id='ProfileImagePage'>
		<picture>
	
		<img src={ '../../images/logo.png' } />
		</picture>
		<h1>Set Your Profile Image</h1>
		<p>Set a profile image for your new account</p>
	

		<div className='form-control'>
			<br/>
			<button>Acess Images</button>
			<br/>
			<button>Continue</button>
			</div>
		</div>
    );
  }
}