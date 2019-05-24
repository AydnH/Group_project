import React from 'react';
import { HashRouter, Route } from "react-router-dom";

import { MainHeader } from './components/navigation/MainHeader';
import { HomePage } from './pages/Home/HomePage';
import { RegisterPage } from './pages/Register/RegisterPage';
import { ProfileSetupPage } from './pages/ProfileSetup/ProfileSetupPage';
import { PaymentPage } from './pages/Payment/PaymentPage';
import { signUpPage } from './pages/SignUp/signUpPage';

import { CompleteProfilePage } from "./pages/Register/CompleteProfile/CompleteProfilePage"
import { PaymentPage } from "./pages/Payment/PaymentPage"

function App() {
  return (
    <HashRouter basename='/'>
      <MainHeader />

      <div className='page-container'>
      
        <Route exact path="/Home" component={HomePage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/ProfileSetup" component={ProfileSetupPage} />
        <Route path="/CompleteProfile" component={CompleteProfilePage} />

        <Route path="/Payment" component={PaymentPage} />

        <Route path="/payment" component={PaymentPage} />
        <Route path="/SignUp" component={signUpPage} />
       

       
      </div>
    </HashRouter>
  );
}

export default App;
