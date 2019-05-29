import React from 'react';

export class HomePage extends React.Component {
  render() {
    return (
      <div id='HomePage'>
      <br/>
      <div className='header'>
 <h1>CONNECTION</h1>
 </div>
		<div className='image-homepage'>	

		<img style={{width:100, height:100}} src={require('./images/logoHomePage.png')} alt='Logo'/>
    
		</div>	
  
		
      </div>
      //<h1>CONNECT </h1>
    );
  }
}