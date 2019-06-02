import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import './theme/main.scss';
import App from './App';

import { render } from 'react-dom'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

 
// Alert config
const options = {
  position: positions.MIDDLE,
  timeout: 9000,
  offset: '30px',
  transition: transitions.SCALE
}
 
const Root = () => (
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
)
 
render(<Root />, document.getElementById('root'));

/* ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));*/

