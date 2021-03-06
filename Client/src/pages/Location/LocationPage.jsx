import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';

export class LocationPage extends React.Component {
  render() {
    return (

      <div className="LocationPage">
        <div className='image-container'> 
    <img style={{width:80, height: 80}} src={require('./images/logo.png')} alt='Logo'/>
    </div>  
    <br/>
    <br/>
    <br/>
    <br/>
    <hr/>
      <h1>LOCATION</h1>

      <Formik
        intialValues={{Street:'',Number:'',Apartment:'', Country:'', City:'', State:'',PostCode:''}}

        onSubmit={(values, {setSubmitting}) => {
          setTimeout(() => {
            console.log(JSON.stringify(values,null,2));
            setSubmitting(false);
              }, 400);
          axios.post('https://connectproject.herokuapp.com/api/put-Location',{
            Street: values.Street,
            Number: values.Number,
            Apartment: values.Apartment,
            Country: values.Country,
            City: values.City,
            State: values.State,
            PostCode: values.PostCode
          });          
        }}
        >

        {({ isSubmitting  }) => (
          <Form className= "formStyle">
          <Field className="formBox" type="text" name="Street" placeholder="Street" />
          <br/> <br/><br/> 
          <Field className="formBox" type="Number" name="Number" placeholder="Building Number" />
          <br/> <br/><br/> 
          <Field className="formBox" type="Apartment" name="Apartment" placeholder="Apartment number" />
          <br/><br/><br/> 
          <Field className="formBox" type="Country" name="Country" placeholder="Country" />
          <br/><br/><br/> 
          <Field className="formBox" type="City" name="City" placeholder="City" />
          <br/><br/><br/> 
          <Field className="formBox" type="State" name="State" placeholder="State/region" />
          <br/><br/><br/> 
          <Field className="formBox" type="PostCode" name="PostCode" placeholder="Post Code" />
          <br/><br/> 
           <button className= 'submitB' type="submit" disabled={isSubmitting}><Link to='/Payment'><b> >> </b></Link></button>
          </Form>          
        )}

      </Formik>
      </div>
    )};
  }
