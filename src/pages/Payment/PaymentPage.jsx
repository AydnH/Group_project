import React from 'react';
import Logo from './images/logo.png';
import { useAlert } from 'react-alert';

import { ButtonToolbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export class PaymentPage extends React.Component {

render() {

const Alert = () => {
	const alert = useAlert();
  return (
   
			<input type="checkbox" id="RepeatSubsciption" onClick={() => {
					alert.show( <p>Are you sure you want to decline a repeat subscription?<br/><br/><button  onClick={() => {
					document.getElementById("RepeatSubsciption").checked = false; 
				  }} >Agree</button></p>)
				  }}/>
		)
}

		

return (
	<div id='PaymentPage'>		
		<div className='image-container'>	
		<img style={{width:70, height: 70}} src={require('./images/logo.png')} alt='Logo'/>
		</div>	
		<br/>
		<br/>
		<h1>Premium Account</h1>
		<hr/>
		<p>As a welcome gift we're giving you one month of <span className="green">FREE</span> premium membership!</p>
		<hr/>
		<p>Service Fee <span className="lineThrough">$3</span></p>
		<p>Premium membership <span className="lineThrough">$50</span></p>
		<hr/>
		<p>Total <span className="green">$0</span></p>

		<form>
			<label>
			<span className="light"><Alert/>I decline a repeat subscription</span>
			</label>
			
		</form>
		<div className='form-control'>
			<br/>
 <button >Continue</button>
			
		</div>
	</div>
    );
  }

}