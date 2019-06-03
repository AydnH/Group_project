import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { CompleteProfilePage } from "./CompleteProfile/CompleteProfilePage"

const url = "'http://localhost:3001/api/putData'";

export class RegisterPage extends React.Component{

render(){
  return(
  <div>
    <h1>Register</h1>
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
        <Form>
          <Field type="email" name="email" placeholder="Email"/>
          <ErrorMessage name="email" component="div"/>
          <Field type="password" name="password" placeholder="password"/>
          <ErrorMessage name="password" component="div" />
          <Field type="name" name="name"placeholder="Please Enter Full Name" />
          <ErrorMessage name="name" component="div" />
          <Field type="checkbox" name="hasAgreed" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
)};
}
