import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export class LocationPage extends React.Component {
  render() {
    return (

      <div className="LocationPage">
      <h1>more forms</h1>

      <Formik
        intialValues={{Address1:'',Address2:'',Address3:'', Country:'', City:'', State:'',PostCode:''}}
        validate={values =>{
          let errors = {};
        }}
        onSubmit={(values, {setSubmitting}) => {
          setTimeout(() => {
            console.log(JSON.stringify(values,null,2));
            setSubmitting(false);
              }, 400);
          axios.post('http://localhost:3001/api/putData',{
            Address: values.Address,
            Address2: values.Address2,
            Address3: values.Address3,
            Country: values.Country,
            City: values.City,
            State: values.State,
            PostCode: values.PostCode
          });          
        }}
        >

        {({ isSubmitting  }) => (
          <Form className= "formStyle">
          <Field className="formBox" type="Address" name="Address" placeholder="Street" />
          <br/> <br/>
          <Field className="formBox" type="Address2" name="Address2" placeholder="Building Number" />
          <br/> <br/>
          <Field className="formBox" type="Address3" name="Address3" placeholder="Apartment number" />
          <br/><br/>
          <Field className="formBox" type="Country" name="Country" placeholder="Country" />
          <br/><br/>
          <Field className="formBox" type="City" name="City" placeholder="City" />
          <br/><br/>
          <Field className="formBox" type="State" name="State" placeholder="State/region" />
          <br/><br/>
          <Field className="formBox" type="PostCode" name="PostCode" placeholder="Post Code" />
          <br/>
          <button className ="buttonSubmit" type="submit" disabled={isSubmitting}><b> >> </b> </button>
          </Form>          
        )}

      </Formik>
      </div>
    )};
  }
