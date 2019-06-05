import React from 'react';

import axios from 'axios';


export class FinalPage extends React.Component {
    


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
        user: res.data.user
      });
    });
}

  render() {
    return (


<div id='FinalPage'>
		<picture>
	
		<img src={ '../../images/logo.png' } />
		</picture>
		<h1>Sign Up Complete!</h1>
		<hr/>
		<p>Thank you for signing up for____</p>
		
		<p>During the process of signing up we were able to ____</p>
		
		<div className='form-control'>
			<br/>
			<button>Delete Account</button>
			</div>
		</div>
    );
  }
}
