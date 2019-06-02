import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { CompleteProfilePage } from "./CompleteProfile/CompleteProfilePage"

export class RegisterPage extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      email:'',
      password:'',
      name:'',
      hasAgreed: false      
    }
    this.handelChange = this.handelChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handelChange(event) {
    this.setState({
      email: event.target.value,
      name: event.target.value,
      password: event.taget.value,
      hasAgreed: event.target.value
    })
  }  

  handleSubmit(e) {    
   e.preventDefault();
   const{
    email,
    name,
    password,
    hasAgreed
   } = this.state
   
   console.log('Submitted with data:');
   console.log(this.state);

   axios.post('http://localhost:3001/api/putData', {  
  });
  }

render() {
        return (
        <div className="SignUpField">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">                
                <input type="text" defaultValue={this.state.name} onChange={this.handleChange}
                  placeholder="Enter your full name" 
                    />
              </div>

              <div className="FormField">                
                <input type="password"  defaultValue={this.state.password} onChange={this.handleChange}
                  placeholder="Enter your password" 
                    />
              </div>

              <div className="FormField">                
                <input type="email"  defaultValue={this.state.email} onChange={this.handleChange}
                   placeholder="Enter your email" 
                   />
              </div>

              <div className="FormField">
                
                <input className="FormField__Checkbox" defaultValue={this.state.hasAgreed} onChange={this.handleChange}
                    type="checkbox" 
                    /> I agree all statements in 
                      <a href="" className="FormField__TermsLink">terms of service</a>              
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20" onClick={this.handleChange}>Sign Up</button>
              </div>
            </form>
          </div>
        );
    }
}