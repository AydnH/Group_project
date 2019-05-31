import React from 'react';

export class LocationPage extends React.Component {
  render() {
    return (
		<div id='LocationPage'>
		<picture>
	
		<img src={ '../../images/logo.png' } />
		</picture>
		<h1>Find Friends</h1>
	
		<p>Find out when your friends are near by</p>
		
		<div className='form-control'>
			<br/>
			<button>Back</button>
			<br/>
			<button>Continue</button>
			</div>
		</div>
    );
  }
}