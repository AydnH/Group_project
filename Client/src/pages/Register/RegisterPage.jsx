import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';






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
      initialValues={{ email: '',username:'', password: '', name:'', hasAgreed:false }}
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
        axios.post('https://connectproject.herokuapp.com/api/putData', {
          email: values.email,
          username: values.username,
          password: values.password,
          name: values.name,
          hasAgreed: values.hasAgreed
        });
      }}
    >
      {({ isSubmitting }) => (
        <Form className = 'formStyle'>
          <Field className= 'formBox' type="username" name="username" placeholder="Username"/>
          <br/><br/>
          <ErrorMessage name="username" component="div"/>
          <br/>
          <Field className= 'formBox' type="email" name="email" placeholder="Email"/>
          <br/>
          <ErrorMessage name="email" component="div"/>
          <br/>
          <Field className= 'formBox2'type="password" name="password" placeholder="Password"/>
          <br/>
          <ErrorMessage name="password" component="div" />
          <br/>
          <Field className= 'formBox3' type="name" name="name"placeholder="Full Name" />
          <ErrorMessage name="name" component="div" />
          <br/>
          <br/>
          <Field className= 'age3' type="checkbox" name="hasAgreed" /><span className="TC">I agree to the <Link to='/TC'>Terms and Conditions</Link></span>
          <br/><br/>
          <button className ='buttonSubmit' type="submit" disabled={isSubmitting}><Link to='/profileSetup'><b> >> </b></Link>
            
          </button>
        </Form>
      )}
    </Formik>
  
	
  </div>
)};
}
