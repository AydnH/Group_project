import React from 'react';

import axios from 'axios';


export class FinalPage extends React.Component {
constructor(props){
  super(props)
  this.state = {
    _id:'',
    email: '',
    password:'',
    name:'',
    hasAgreed:false
  }
};
    
componentWillMount(){
  console.log("called");
}

componentDidMount() {
  axios
    .get('http://localhost:3001/api/getData')
    .then((res) => {
      //** Handle the failed response */
      if (!res.data.success) {
        return this.setState({
          error: true,
          errorMessage: res.data.error.message,
          loaded: true /** Use this to show the user that the page is loading somewhere */
        });
      }

      this.setState({
        error: false,
        loaded: true,
        user: res.data.user,
        _id:this.state._id,
        email:this.state.email,
        name:this.state.name,
        password:this.state.password,
        hasAgreed:this.state.hasAgreed
      });
       console.log(this.state.user);
    });
}

  render() {
    const {user} = this.state;
       return (


<div id='FinalPage'>
		<picture>
	
		<img src={ '../../images/logo.png' } />
		</picture>
		<h1>Sign Up Complete!</h1>
		<hr/>
		<p>Thank you for signing up for____</p>
		
		<p>During the process of signing up we were able to ____</p>
<div className='data'>
<p>id:<p>{this.state._id}</p><br/><br/>
email:<p>{this.state.email}</p><br/><br/> 
name:<p>{this.state.name}</p><br/><br/>
password:<p>{this.state.password}</p><br/><br/>
hasAgreed<p>{this.state.hasAgreed }</p><br/><br/></p>
</div>
    
		
		<div className='form-control'>
			<br/>
			<button>Delete Account</button>
			</div>
		</div>
    );
  }
}
