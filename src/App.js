import React from 'react';
import { HashRouter, Route } from "react-router-dom";

import { MainHeader } from './components/navigation/MainHeader';
import { HomePage } from './pages/Home/HomePage';
import { RegisterPage } from './pages/Register/RegisterPage';
import { MyProfilePage } from './pages/MyProfile/MyProfilePage';

import { CompleteProfilePage } from "./pages/Register/CompleteProfile/CompleteProfilePage"

function App() {
  return (
    <HashRouter basename='/'>
      <MainHeader />

      <div className='page-container'>
      
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/my-profile" component={MyProfilePage} />
        <Route path="/CompleteProfile" component={CompleteProfilePage} />
       
      </div>
    </HashRouter>
  );
}

export default App;
