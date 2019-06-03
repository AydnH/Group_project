import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Logo from './images/logo.png';



export class ProfileSetupPage extends React.Component {
  render() {
    return (
<div>
  	<div id='ProfileSetupPage'>
	<div className='image-container'>	
		<img style={{width:70, height: 70}} src={require('./images/logo.png')} alt='Logo'/>
	</div>
	</div>
	<br/> <br/>

    <h1>Finish Profile</h1>
    <Formik

      initialValues={{ Age: '', Sex: '', Phone_number:'', Adress:'', Relationship_status:'', Ethnicity:''}}

      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values,null, 2));
          setSubmitting(false);
                  }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="Age" name="Age" placeholder="Age"/>
          <ErrorMessage name="Age" component="div"/>
          <br/><br/>
          <select type="sex" name="Sex" placeholder="Sex?">
          	<option type= 'Sex' label='Sex' />
          	<option type= 'male' label='male' />
          	<option type= 'female' label='female'/>
          	<option type= 'other' label='other'/>
          </select>
          <ErrorMessage name="Sex" component="div" />
          <br/><br/>
          <Field type="Phone_number" name="Phone_number"placeholder="Please Enter Phone number" />
          <ErrorMessage name="Phone_number" component="div" />
          <br/><br/>
          <Field type="Adress" name="Adress"placeholder="Please Enter Your address" />
          <ErrorMessage name="Adress" component="div" />
          <br/><br/>
          <Field type="Relationship_status" name="Relationship_status"placeholder="Relationship status" />
          <ErrorMessage name="Relationship_status" component="div" />
          <br/><br/>
          <Field type="Ethnicity" name="Ethnicity"placeholder="Ethnicity" />
          <ErrorMessage name="Ethnicity" component="div" />
          <br/><br/>
          
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
</div>  
  )};
  }

