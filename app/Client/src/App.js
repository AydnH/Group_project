import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { MainHeader } from './components/navigation/MainHeader';
import { HomePage } from './pages/Home/HomePage';
import { RegisterPage } from './pages/Register/RegisterPage';
import { ProfileSetupPage } from './pages/ProfileSetup/ProfileSetupPage';
import { PaymentPage } from './pages/Payment/PaymentPage';
import { SignUpPage } from './pages/SignUp/signUpPage';
import { LocationPage } from './pages/Location/LocationPage';
import { FinalPage } from './pages/Final/FinalPage';
import { TCPage } from './pages/Register/TC/TCPage';

import { CompleteProfilePage } from "./pages/Register/CompleteProfile/CompleteProfilePage";


function App() {
  return (
   
    <HashRouter basename='/'>
    

      <div className='page-container'>

        <Route path="/SignUp"exact component={SignUpPage}/>
        <Route path="/register" component={RegisterPage} />
        <Route path="/ProfileSetup" component={ProfileSetupPage} />
        <Route path="/CompleteProfile" component={CompleteProfilePage} />
        <Route path="/ProfileSetupPage" component={ProfileSetupPage} />
       
        <Route path="/LocationPage" component={LocationPage} />
        <Route path="/FinalPage" component={FinalPage} />
        <Route path="/Payment" component={PaymentPage} />     
		
		    <Route path="/Location" component={LocationPage} />
        <Route path="/Final" component={FinalPage} />
       <Route path="/TC" component={TCPage} />

       
      </div>
      

       <MainHeader />
    </HashRouter>
  );
}

export default App;
