import React from 'react';
import { Link } from 'react-router-dom';

export class LocationPage extends React.Component {
  render() {
    return (
		<div id='LocationPage'>
		<div className='image-container'> 
    <img style={{width:80, height: 80}} src={require('./images/logo.png')} alt='Logo'/>
    </div>  
    <br/>
    <br/>
    <br/>
    <br/>
    <hr/>
    <h1>ACCESS</h1>
    <p>Allow Connection to access:</p>
    <ul className = 'accessList'>
	    <li ><input type="checkbox" id="location" checked="checked"/> Location</li>
	    <li ><input type="checkbox" id="location" checked="checked"/> Camera</li> 
	    <li ><input type="checkbox" id="location" checked="checked"/> Microphone</li>  
	    <li ><input type="checkbox" id="location" checked="checked"/> Contacts</li>
	    <li ><input type="checkbox" id="location" checked="checked"/> Camera Roll</li> 
	    <li ><input type="checkbox" id="location" checked="checked"/> Favourites From Spotify </li> 
	    <li ><input type="checkbox" id="location" checked="checked"/> Link To FB / Insta </li>
	</ul>
	<button className= 'submitB' type="submit"><Link to='/FinalPage'><b> >> </b></Link>
          </button>               
    </div>
    );
  }
}
