import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useAlert } from 'react-alert';

export class SignUpPage extends React.Component {
  render() {

  const LoginAlert = () => {
	const alert = useAlert();
	  	return (
	   		<button className= 'buttonStyle2' onClick={() => {alert.show(<p><br/>Please sign up</p>)}}>LOGIN</button>
		)
	}

	const FBAlert = () => {
	const alert = useAlert();
	  	return (
	   		<button className= 'buttonStyle3' onClick={() => { alert.error(<p>Couldn't sign up using Facebook! Please sign up regularly.</p>)}}><img style={{width:75, height:17}} src={require('./images/facebook.png')} alt='Logo'/></button>
	   		)
	}


  const GoogleAlert = () => {
	const alert = useAlert();
	  	return (
	  	 <button className= 'buttonStyle4' onClick={() => {alert.error(<p><br/>Couldn't sign up using Google! Please sign up regularly.</p>)}}><img style={{width:20, height:20}} src={require('./images/google.png')} alt='Logo'/></button>
		)
	}

    return (
		<div id='SignUpPage'>
		<div className='image-container'>	
		<img style={{width:100, height: 100}} src={require('./images/logo.png')} alt='Logo'/>
		</div>	
		
			<br/>
			<br/>
			<br/>
    		<br/>
    		<br/>
			<br/>
    
			<button className= 'buttonStyle'><Link to='/Register'>SIGN UP</Link></button>


			<br/>
			<br/>
			<br/>
			 
			<LoginAlert/>

			<br/>
			<br/>
			<br/>

			<FBAlert/>

			<br/>
			<br/>
			<br/>

			<GoogleAlert/>

		</div>
    );
  }
}