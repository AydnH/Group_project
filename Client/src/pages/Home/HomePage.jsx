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
		<img style={{width:80, height:80}} src={require('./images/logoHomePage.png')} alt='Logo'/>
		</div>	
    <br/>
      <div className='header'>
<hr/>
 <h1>CONNECTION</h1>
 </div>
 <br/>


<img style={{width:300, height:200}} src={require('./images/finalimg.png')} alt='HomePageImg'/>
<br/>

<div className= 'homePlacement'>

<p>- Connect and share with family and friends</p>

<p>- Discover whats happening near you</p>

<p>- Make lasting relationships with new people</p>
<br/>
</div>

<p><center><b> SIGN UP TODAY!</b></center></p>


 <button className= 'submitB' type="submit"><Link to='/SignUp'><b> >> </b></Link>
          </button>

      </div>

    );
  }
}