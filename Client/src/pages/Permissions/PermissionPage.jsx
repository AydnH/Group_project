import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

export class PermissionPage extends React.Component {
  render() {
    return (
    <div id='PermissionPage'>
      <div className='image-container'> 
        <img style={{width:80, height: 80}} src={require('./images/logo.png')} alt='Logo'/>
      </div>  
          <br/>
          <br/>
          <br/>
          <br/>
          <hr/>
    <h1>ACCESS</h1>
    <p>Allow Connection to access Device:</p>

      <Formik
        intialValues={{Location:false,Camera:false,Microphone:false, Contacts:false, CameraRoll:false, History:false,ThirdParty:false}}
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
             <span>Location<Field className= 'age3' type="checkbox" name="Location" /> </span>
                <br/><br/>
              <span>Camera<Field className= 'age3' type="checkbox" name="Camera" /> </span>
                <br/><br/>
              <span>CameraRoll<Field className= 'age3' type="checkbox" name="CameraRoll" /> </span>
                <br/><br/>
              <span>Microphone<Field className= 'age3' type="checkbox" name="Microphone" /> </span>
                <br/><br/>
              <span>Contacts<Field className= 'age3' type="checkbox" name="Contacts" /> </span>
                <br/><br/>
              <span>Internet History<Field className= 'age3' type="checkbox" name="History" />  </span>
                <br/><br/>
              <span>Third Party app history<Field className= 'age3' type="checkbox" name="ThirdParty" /> </span>
                <br/><br/>              
          <button className ="buttonSubmit" type="submit" disabled={isSubmitting}><b> >> </b> </button>
          </Form>          
        )}

      </Formik>
      </div>
    )};
  } 

   