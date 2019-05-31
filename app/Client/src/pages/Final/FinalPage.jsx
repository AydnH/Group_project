import React from 'react';

export class FinalPage extends React.Component {
  render() {
    return (
		<div id='FinalPage'>
		<picture>
	
		<img src={ '../../images/logo.png' } />
		</picture>
		<h1>Sign Up Complete!</h1>
		<hr/>
		<p>Thank you for signing up for____</p>
		
		<p>During the process of signing up we were able to ____</p>
		
		<div className='form-control'>
			<br/>
			<button>Delete Account</button>
			</div>
		</div>
    );
  }
}