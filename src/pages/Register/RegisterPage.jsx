import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CompleteProfilePage } from "./CompleteProfile/CompleteProfilePage"

export class RegisterPage extends React.Component {

  constructor(){
    super();
    this.handelSubmit = this.handelSubmit.bind(this);
      }
      handelSubmit(event){
        event.preventDefault();
        const data = new FormData(event.target);
        axios.post('http://localhost:3001/api/putData',{
          method: 'POST',
          body: data,
        });
      }
  render() {
    return (
      <div id='RegistrationPage'>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">Enter your email</label>
        <input id="email" name="email" type="email" />

        <label htmlFor="firstname">First Name</label>
        <input id="firstname" name="firstname" type="text" />



        <label htmlFor="lastname">Last Name</label>
        <input id="lastname" name="lastname" type="text" />

        <button>Send data!</button>
      </form>
      </div>
    );
  }
}