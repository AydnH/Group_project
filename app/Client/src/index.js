import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import './theme/main.scss';
import App from './App';

import { render } from 'react-dom';
import { Provider as AlertProvider } from 'react-alert';


 
const AlertTemplate = ({ style, options, message, close }) => (
  <div style={{padding:10, background: '#E9E585', }}>


    {message}
		
					<button  className= 'buttonStyle2' onClick={() => {
					document.getElementById("RepeatSubsciption").checked = false
				  }} onClick={close}>Agree</button>
				
  </div>
)
 
const Root = () => (
  <AlertProvider template={AlertTemplate}>
    <App />
  </AlertProvider>
)

render(<Root />, document.getElementById('root'));

/* ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));*/

