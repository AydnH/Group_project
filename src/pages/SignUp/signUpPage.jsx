import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class signUpPage extends React.Component {
  render() {
    return (
		<div id='signUpPage'>
		<div className='image-container'>	
		<img style={{width:100, height: 100}} src={require('./images/logo.png')} alt='Logo'/>
		</div>	
		<br/>

		<br/>
		<br/>
    <br/>
    	<br/>
		<br/>
    

	
 <button className= 'buttonStyle'><Link to='/RegisterPage'>SIGN UP</Link></button>


<br/>
<br/>
<br/>
 
 <button className= 'buttonStyle2'><Link to='/RegisterPage'>LOGIN</Link></button>

<br/>
<br/>
<br/>



 <button className= 'buttonStyle3'><Link to='/RegisterPage'><img style={{width:75, height:17}} src={require('./images/facebook.png')} alt='Logo'/></Link></button>


<br/>
<br/>
<br/>

 <button className= 'buttonStyle4'><Link to='/RegisterPage'><img style={{width:20, height:20}} src={require('./images/google.png')} alt='Logo'/></Link></button>




  


	
		</div>
    );
  }
}