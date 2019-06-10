import React from 'react';
import { Link } from 'react-router-dom';

export class HomePage extends React.Component {
  render() {
    return (
      <div id='HomePage'>
      <br/>
        <div className='image-container'> 
    <img style={{width:80, height: 80}} src={require('./images/logo.png')} alt='Logo'/>
    </div>  
    <br/>
    <br/>
    <br/>
    <br/>
    <hr/>
    <h1>CONNECTION</h1>
    <hr/>

 <br/>

<div className= 'imageH'>
<img style={{width:350, height:500}} src={require('./images/picls.png')} alt='HomePageImg'/>
<br/>
</div>


<p><center><b> SIGN UP TODAY!</b></center></p>


 <button className= 'submitB' type="submit"><Link to='/SignUp'><b> >> </b></Link>
          </button>

      </div>

    );
  }
}