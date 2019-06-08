import React from 'react';
import { HashRouter, Route } from "react-router-dom";


import { HomePage } from './pages/Home/HomePage';
import { RegisterPage } from './pages/Register/RegisterPage';
import { ProfileSetupPage } from './pages/ProfileSetup/ProfileSetupPage';
import { PaymentPage } from './pages/Payment/PaymentPage';
import { SignUpPage } from './pages/SignUp/signUpPage';
import { PermissionPage } from './pages/Permissions/PermissionPage';
import { FinalPage } from './pages/Final/FinalPage';
import { TCPage } from './pages/Register/TC/TCPage';
import { LocationPage } from './pages/Location/LocationPage';



function App() {
  return (
   
    <HashRouter basename='/'>
    

      <div className='page-container'>

        <Route path="/SignUp"exact component={SignUpPage}/>
        <Route path="/register" component={RegisterPage} />
        <Route path="/ProfileSetup" component={ProfileSetupPage} />
        <Route path="/ProfileSetupPage" component={ProfileSetupPage} />
        <Route path="/Home" component={HomePage} />
        <Route path="/PermissionPage" component={PermissionPage} />
        <Route path="/FinalPage" component={FinalPage} />
        <Route path="/Payment" component={PaymentPage} /> 
        <Route path="/Final" component={FinalPage} />
        <Route path="/TC" component={TCPage} />
        <Route path="/Location" component={LocationPage} />

       
      </div>
      

      
    </HashRouter>
  );
}

export default App;
