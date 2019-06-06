import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonToolbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export class HomePage extends React.Component {
  render() {
    return (
      <div id='HomePage'>
      <br/>
      <div className='header'>
 </div>
		<div className='image-homepage'>	
		<img style={{width:100, height:100}} src={require('./images/logoHomePage.png')} alt='Logo'/>
		</div>	
      <div className='header'>
 <h1>CONNECTION</h1>
 </div>

 <button className= 'buttonStyle'><Link to='/SignUp'>START</Link></button>

		
<br/>
<br/>
<p>Connection is a brand new social media app</p>
Use Connection to:
<ul>
<li>Connect and share with friends and family.</li>
<li>Discover what's happening around the world.</li>
<li>Make lasting relationships with new people</li>
</ul>

<img style={{width:100, height:100}} src={require('./images/placeholder.png')} alt='HomePageImg'/>

    <div className = 'buttonStyleHome'>
 <button className = 'test'> <img style={{width:5, height:5}} src={require('./images/next.png')} alt='Logo'/></button>
</div>

  
 <button className = 'buttonStyleHome2'>
    >
    </button> 
      </div>

    );
  }
}