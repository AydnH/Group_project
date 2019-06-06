import React from 'react';


import './theme/main.scss';
import App from './App';

import { render } from 'react-dom';
import { Provider as AlertProvider } from 'react-alert';


 
const AlertTemplate = ({ style, options, message, close }) => (
  <div style={{padding:10, background: '#E9E585', }}>

    {options.type === 'error' && 'ERROR'}

<button className= 'buttonStyleAlert' onClick={close}>x</button>
    {message}			
  </div>
)
 
const Root = () => (
  <AlertProvider template={AlertTemplate}>
    <App />
  </AlertProvider>
)

render(<Root />, document.getElementById('root'));

/* ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));*/

