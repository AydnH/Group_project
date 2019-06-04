import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class SignUpPage extends React.Component {
  render() {
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
 
 <button className= 'buttonStyle2'><Link to='/Register'>LOGIN</Link></button>

<br/>
<br/>
<br/>



 <button className= 'buttonStyle3'><Link to='/Register'><img style={{width:75, height:17}} src={require('./images/facebook.png')} alt='Logo'/></Link></button>


<br/>
<br/>
<br/>

 <button className= 'buttonStyle4'><Link to='/Register'><img style={{width:20, height:20}} src={require('./images/google.png')} alt='Logo'/></Link></button>




  


	
		</div>
    );
  }
}