import React from 'react';
import Logo from './images/logo.png';

export class ProfileSetupPage extends React.Component {
  render() {
    return (
      <div id='ProfileSetupPage'>
	  <div className='image-container'>	
		<img style={{width:70, height: 70}} src={require('./images/logo.png')} alt='Logo'/>
		</div>	
		<br/><br/>
       <p> Please answer some quick questions about yourself.</p>
		
		<div className='form-control'>
        <label>Age </label>
       <input Style="width:50px;"type="number" />
		
<label> Sex </label>
           <select name="Sex">
  <option value="male">Male</option>
  <option value="female">Female</option>
</select> 
          
		<br/>  <br/> 
		  
        <label>Phone number</label>
        <input type="number" />
          
		<br/> <br/>  
		        
            <label>Adress</label>
            <input type="text" />
        <br/> <br/> 
		  
		  		           
            <label>Relationship status</label>
            <input type="text" />
          
<br/> <br/> 
          
            <label>Ethnicity</label>
            <input type="text" />
          
<br/> <br/> 
<label>Security Question </label>
           <select name="Security Question">
  <option value="maidenName">What is your mother’s maiden name?</option>
  <option value="firstPet">What was the name of your first pet?</option>
  <option value="creditCard">What is your credit card number?</option>
  <option value="firstCompany">What was the first company that you worked for?</option>
</select> 

            <input type="text" />
          
<br/> <br/> 
		  
                 <br/> <br/> 
          <button>Continue</button>
          </div>
      </div>
    );
  }
}