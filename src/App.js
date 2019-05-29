import React from 'react';
import { HashRouter, Route } from "react-router-dom";

import { MainHeader } from './components/navigation/MainHeader';
import { HomePage } from './pages/Home/HomePage';
import { RegisterPage } from './pages/Register/RegisterPage';
import { ProfileSetupPage } from './pages/ProfileSetup/ProfileSetupPage';
import { PaymentPage } from './pages/Payment/PaymentPage';
import { signUpPage } from './pages/SignUp/signUpPage';
import { ProfileImagePage } from './pages/ProfileImage/ProfileImagePage';
import { LocationPage } from './pages/Location/LocationPage';
import { FinalPage } from './pages/Final/FinalPage';

import { CompleteProfilePage } from "./pages/Register/CompleteProfile/CompleteProfilePage"


function App() {
  return (
    <HashRouter basename='/'>
      <MainHeader />

      <div className='page-container'>
      
        <Route exact path="/Home" component={HomePage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/ProfileSetup" component={ProfileSetupPage} />
        <Route path="/CompleteProfile" component={CompleteProfilePage} />

        <Route path="/ProfileSetupPage" component={ProfileSetupPage} />
        <Route path="/signUpPage" component={signUpPage} />
        <Route path="/LocationPage" component={LocationPage} />
        <Route path="/FinalPage" component={FinalPage} />

        <Route path="/Payment" component={PaymentPage} />

        <Route path="/payment" component={PaymentPage} />
        <Route path="/SignUp" component={signUpPage} />
		
		<Route path="/Location" component={LocationPage} />
		<Route path="/ProfileImage" component={ProfileImagePage} />
        <Route path="/Final" component={FinalPage} />
       

       
      </div>
    </HashRouter>
  );
}

export default App;
