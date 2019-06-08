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
    .get('http://localhost:3001/api/getData')
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

            axios.get('http://localhost:3001/api/get-Location')
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

                  axios.get('http://localhost:3001/api/get-Permissions')
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
}


render() {
  const {user} = this.state;
  const {data} = this.state;
  const {loco} = this.state;
  const {perms} = this.state;
return (


  <div id='FinalPage'>

  	
    <div className='image-container'> 
      <img style={{width:80, height: 80}} src={require('./images/logo.png')} alt='Logo'/>
      </div>  
        <br/> <br/><br/> <br/>
  <hr/>
      <h1>SIGN UP COMPLETE</h1>
  		<hr/>
  		<p>Thank you for signing up for____</p>
  		
  		<p>You are the product of this app. Luckily will not be retaining or selling your information to advertisement companies. However other apps would not hesitate to do so. Everything in this app was legal, you consented to have your information collect and sold. Thank you for your co-operation.</p>
  <div className='UserData'><pre>{JSON.stringify(user, null, 2) }</pre></div>
  <div className='UserData'><pre>{JSON.stringify(data, null, 2) }</pre></div>
  <div className='UserData'><pre>{JSON.stringify(loco, null, 2) }</pre></div>
  <div className='UserData'><pre>{JSON.stringify(perms, null, 2) }</pre></div>


  </div>
    

    );
  }
}
