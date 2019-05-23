import React from 'react';

export class PaymentPage extends React.Component {
  render() {
    return (
		<div id='PaymentPage'>
		<img src="../../images/logo.png" alt="logo"/> 
		<h1>Premium Account</h1>
		<hr/>
		<p>Your first Month is FREE</p>
		<hr/>
		<p>Service Fee <span class="lineThrough">$3</span></p>
		<p>Premium subscription <span class="lineThrough">$50</span></p>
		<hr/>
		<p>Total <span class="green">$0*</span></p>
		<form>
			<label>
				<input type="checkbox" name="RepeatSubsciption" /> I decline a repeat subscription
			</label>
		</form>
		<div class='form-control'>
			<br/>
				<button>
					Continue!
				</button>
			</div>
		</div>
    );
  }
}