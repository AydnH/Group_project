import React from 'react';
import Logo from './images/logo.png';
import { useAlert } from 'react-alert';

import { ButtonToolbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export class PaymentPage extends React.Component {

render() {
return (
	<div id='PaymentPage'>		
		<div className='image-container'>	
		<img style={{width:80, height: 80}} src={require('./images/logo.png')} alt='Logo'/>
		</div>	
			<br/> <br/><br/> <br/>
<hr/>
		<h1>PREMIUN ACCOUNT</h1>
		<hr/>
		<p>As a welcome gift we're giving you one month of <span className="green">FREE</span> premium membership!</p>
		<hr/>
		<p>Service Fee <span className="lineThrough">$3</span></p>
		<p>Premium membership <span className="lineThrough">$50</span></p>
		<hr/>
		<p>Total <span className="green">$0</span></p>

		<form>
			<label>
			<span className="light"><input type="checkbox" id="RepeatSubsciption"/> I decline a repeat subscription</span>
			</label>
			
		</form>
		<div className='form-control'>
			<br/>
 <button className= 'continue'>Continue</button>
			
		</div>
	</div>
    );
  }

}