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
      <div className='header'>
 <h1>CONNECTION</h1>
 </div>

 <div className='image-homepage'> 
    <img style={{width:100, height:100}} src={require('./images/logoHomePage.png')} alt='Logo'/>
    </div>  
		
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/><br/>


    <div className = 'buttonStyleHome'>
 <button className = 'test'> <img style={{width:5, height:5}} src={require('./images/next.png')} alt='Logo'/></button>
</div>  

  
 <button className = 'buttonStyleHome2'>
    <img style={{width:5, height:5}} src={require('./images/next.png')} alt='Logo'/>
    </button> 
      </div>

    );
  }
}