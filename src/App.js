import React from 'react';
import { HashRouter, Route } from "react-router-dom";

import { MainHeader } from './components/navigation/MainHeader';
import { HomePage } from './pages/Home/HomePage';
import { RegisterPage } from './pages/Register/RegisterPage';
import { MyProfilePage } from './pages/MyProfile/MyProfilePage';
import { PaymentPage } from './pages/Payment/PaymentPage';

function App() {
  return (
    <HashRouter basename='/'>
      <MainHeader />

      <div className='page-container'>
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/my-profile" component={MyProfilePage} />
		<Route path="/payment" component={PaymentPage} />
      </div>
    </HashRouter>
  );
}

export default App;
