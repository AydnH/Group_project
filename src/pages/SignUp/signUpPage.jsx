import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export class signUpPage extends React.Component {
  render() {
    return (
		<div id='signUpPage'>
		<div className='image-container'>	
		<img style={{width:70, height: 70}} src={require('./images/logo.png')} alt='Logo'/>
		</div>	
		<br/>
		<br/>
		<br/>

		<h1>SIGN UP </h1>
		<hr/>	

		<div>
  <ButtonToolbar>
    <Button variant="primary" size="lg">
      Large button
    </Button>
    <Button variant="secondary" size="lg">
      Large button
    </Button>
  </ButtonToolbar>

  <ButtonToolbar>
    <Button variant="primary" size="sm">
      Small button
    </Button>
    <Button variant="secondary" size="sm">
      Small button
    </Button>
  </ButtonToolbar>
</div> 



  


	
		</div>
    );
  }
}