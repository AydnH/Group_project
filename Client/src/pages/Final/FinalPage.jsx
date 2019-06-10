import React from 'react';
import axios from 'axios';


export class FinalPage extends React.Component {
constructor(props){
  super(props)
  this.state = {

    email: '',
    password:'',
    name:'',
    username:'',
    hasAgreed:false
  }
};
    
componentWillMount(){
  console.log("called");
}

componentDidMount() {
  axios
    .get('https://connectproject.herokuapp.com/api/getData')
    .then((res) => {
      //** Handle the failed response */
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
        user: res.data.user,

      });
       console.log(this.state.user);
    });

        axios.get('https://connectproject.herokuapp.com/api/get-Data')
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

            axios.get('https://connectproject.herokuapp.com/api/get-Location')
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
                loco: res.data.loco
              });
              console.log(this.state.loco);
            });

                  axios.get('https://connectproject.herokuapp.com/api/get-Permissions')
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
                      perms: res.data.perms
                    });
                    console.log(this.state.data);
                  });
                     axios.get('https://connectproject.herokuapp.com/api/get-payment')
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
                      pay: res.data.pay
                    });
                    console.log(this.state.pay);
                  });
}


render() {
  const {user} = this.state;
  const {data} = this.state;
  const {loco} = this.state;
  const {perms} = this.state;
  const {pay} = this.state;
return (


  <div id='FinalPage'>

  	
    <div className='image-container'> 
      <img style={{width:80, height: 80}} src={require('./images/logo.png')} alt='Logo'/>
      </div>  
        <br/> <br/><br/> <br/>
  <hr/>
      <h1>SIGN UP COMPLETE</h1>
  		<hr/>
  		<p>Thank you for signing up to Connection!</p>
  		
  		<p>You are the product of this app. Everything in this app was legal, you consented to have your information collect and sold. Luckily will not be retaining or selling your information to advertisement companies. However, other apps would not hesitate to do so.</p>
      <p>Below is all the information we collected through this quick sign up process.</p>
  <div className='UserData'><pre>{JSON.stringify(user, null, 2) }</pre></div>
  <div className='UserData'><pre>{JSON.stringify(data, null, 2) }</pre></div>
  <div className='UserData'><pre>{JSON.stringify(loco, null, 2) }</pre></div>
  <div className='UserData'><pre>{JSON.stringify(perms, null, 2) }</pre></div>
  <div className='UserData'><pre>{JSON.stringify(pay, null, 2) }</pre></div>


  </div>
    

    );
  }
}
