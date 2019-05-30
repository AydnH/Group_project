import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

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

	 
			
    <br/>

		<div className= 'buttonStyle'>
 <button>SIGN UP</button>
</div> 

<br/>
<br/>
<br/>
  <div className= 'buttonStyle2'>
 <button>LOGIN</button>
</div> 

<br/>
<br/>
<br/>


  <div className= 'buttonStyle3'>
 <button>FB</button>
</div> 

<br/>
<br/>
<br/>

  <div className= 'buttonStyle4'>
 <button>GOOGLE</button>
</div> 



  


	
		</div>
    );
  }
}