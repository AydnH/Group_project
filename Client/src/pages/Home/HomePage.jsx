import React from 'react';
import { Link } from 'react-router-dom';

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
<p>Use Connection to:</p>
<ul>
<li>Connect and share with friends and family.</li>
<li>Discover what's happening around the world.</li>
<li>Make lasting relationships with new people</li>
</ul>

<img style={{width:100, height:100}} src={require('./images/placeholder.png')} alt='HomePageImg'/>

      </div>

    );
  }
}