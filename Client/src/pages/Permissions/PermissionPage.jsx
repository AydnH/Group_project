import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
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
    <p><center><b>Allow Connection to access Device:</b></center></p>

      <Formik
        intialValues={{Location:false,Camera:false,Microphone:false, Contacts:false, CameraRoll:false, History:false,ThirdParty:false}}

        onSubmit={(values, {setSubmitting}) => {
          setTimeout(() => {
            console.log(JSON.stringify(values,null,2));
            setSubmitting(false);
              }, 400);
          axios.post('http://localhost:3001/api/put-Permissions',{
            Location: values.Location,
            Camera: values.Camera,
            Microphone: values.Microphone,
            Contacts: values.Contacts,
            CameraRoll: values.CameraRoll,
            History: values.History,
            ThirdParty: values.ThirdParty

          });          
        }}
        >

        {({ isSubmitting  }) => (
          <Form className= "formStyle">
             <span>Location<Field className= 'age3' type="checkbox" name="Location" defaultChecked/> </span>
                <br/><br/>
              <span>Camera<Field className= 'age3' type="checkbox" name="Camera" defaultChecked/> </span>
                <br/><br/>
              <span>CameraRoll<Field className= 'age3' type="checkbox" name="CameraRoll" defaultChecked/> </span>
                <br/><br/>
              <span>Microphone<Field className= 'age3' type="checkbox" name="Microphone" defaultChecked/> </span>
                <br/><br/>
              <span>Contacts<Field className= 'age3' type="checkbox" name="Contacts" defaultChecked/> </span>
                <br/><br/>
              <span>Internet History<Field className= 'age3' type="checkbox" name="History" defaultChecked/>  </span>
                <br/><br/>
              <span>Third Party app history<Field className= 'age3' type="checkbox" name="ThirdParty" defaultChecked/> </span>
                <br/><br/> 
                             
          <button className= 'submitB' type="submit" disabled={isSubmitting}><Link to='/Location'><b> >> </b></Link></button>
          </Form>          
        )}

      </Formik>
      </div>
    )};
  } 

   