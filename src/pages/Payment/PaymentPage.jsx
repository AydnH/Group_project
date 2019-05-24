import React from 'react';
import Logo from './images/logo.png';


export class PaymentPage extends React.Component {
  render() {
    return (
		<div id='PaymentPage'>	
		<div className='image-container'>	
		<img src={require('./images/logo.png')} alt='Logo'/>
		</div>		
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
				<button>
					Continue!
				</button>
			</div>
		</div>
    );
  }
}