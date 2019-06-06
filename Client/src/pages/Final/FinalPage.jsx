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

      });
       console.log(this.state.user);
    });
    axios.get('http://localhost:3001/api/get-Data')
    .then((res) => {
      if (!res.data.success) {
        return this.setState({
          error: true,
          errorMessage: res.data.error.message,
          loaded: true
        });
      }
      this.setState({
        error: false,
        loaded: true,
        data: res.data.data
      });
      console.log(this.state.data);
    });
}


  render() {
const {user} = this.state;
const {data} = this.state;


       return (


<div id='FinalPage'>

	
  <div className='image-container'> 
    <img style={{width:80, height: 80}} src={require('./images/logo.png')} alt='Logo'/>
  </div>

		<h1>Sign Up Complete!</h1>
		<hr/>
		<p>Thank you for signing up for____</p>
		
		<p>During the process of signing up we were able to ____</p>
<div className='UserData'><pre>{JSON.stringify(user, null, 2) }</pre></div>
<div className='UserData'><pre>{JSON.stringify(data, null, 2) }</pre></div>


</div>
    

    );
  }
}
