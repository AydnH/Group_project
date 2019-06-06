import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { CompleteProfilePage } from "./CompleteProfile/CompleteProfilePage";
import { TCPage } from "./TC/TCPage";
const url = "'http://localhost:3001/api/putData'";



export class RegisterPage extends React.Component{

render(){
  return(
  <div>

  <div className='image-container'> 
    <img style={{width:80, height: 80}} src={require('./images/logo.png')} alt='Logo'/>
    </div>  
    <br/>
    <br/>
    <br/>
    <br/>
    <hr/>
    <h1>REGISTER</h1>
    <Formik
      initialValues={{ email: '', password: '', name:'', hasAgreed:false }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values,null, 2));
          setSubmitting(false);
                  }, 400);
        axios.post('http://localhost:3001/api/putData', {
          email: values.email,
          password: values.password,
          name: values.name,
          hasAgreed: values.hasAgreed
        });
      }}
    >
      {({ isSubmitting }) => (
        <Form className = 'formStyle'>
          <Field className= 'formBox' type="email" name="email" placeholder="Email"/>
          <br/><br/>
          <ErrorMessage name="email" component="div"/>
          <br/><br/>
          <Field className= 'formBox2'type="password" name="password" placeholder="password"/>
          <br/><br/>
          <ErrorMessage name="password" component="div" />
          <br/><br/>
          <Field className= 'formBox3' type="name" name="name"placeholder="Please Enter Full Name" />
          <ErrorMessage name="name" component="div" />
          <br/>
          <br/>
          <Field type="checkbox" name="hasAgreed" /><span className="TC"> I agree to the<Link to='/TC'>Terms and Conditions</Link></span>
          <br/><br/>
          <button className ='buttonSubmit' type="submit" disabled={isSubmitting}><Link to='/profileSetup'><b> >> </b></Link>
            
          </button>
        </Form>
      )}
    </Formik>
  
	
  </div>
)};
}
