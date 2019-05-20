import React from 'react';
import { HashRouter, Route } from "react-router-dom";

import { MainHeader } from './components/navigation/MainHeader';
import { HomePage } from './pages/Home/HomePage';
import { RegisterPage } from './pages/Register/RegisterPage';
import { MyProfilePage } from './pages/MyProfile/MyProfilePage';

function App() {
  return (
    <HashRouter basename='/'>
      <MainHeader />

      <div className='page-container'>
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/my-profile" component={MyProfilePage} />
      </div>
    </HashRouter>
  );
}

export default App;
