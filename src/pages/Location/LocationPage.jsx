import React from 'react';

export class LocationPage extends React.Component {
  render() {
    return (
		<div id='LocationPage'>
		<picture>
	
		<img src={ '../../images/logo.png' } />
		</picture>
		<h1>Premium Account</h1>
		<hr/>
		<p>Your first Month is FREE</p>
		<hr/>
		<p>Service Fee <span className="lineThrough">$3</span></p>
		<p>Premium subscription <span className="lineThrough">$50</span></p>
		<hr/>
		<p>Total <span className="green">$0*</span></p>
		<form>
			<label>
				<input type="checkbox" name="RepeatSubsciption" /> I decline a repeat subscription
			</label>
		</form>
		<div className='form-control'>
			<br/>
			<button>Continue</button>
			</div>
		</div>
    );
  }
}