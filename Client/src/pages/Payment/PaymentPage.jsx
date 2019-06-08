import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';


export class PaymentPage extends React.Component {

render() {
return (
	<div id='PaymentPage'>		
		<div className='image-container'>	
		<img style={{width:80, height: 80}} src={require('./images/logo.png')} alt='Logo'/>
		</div>	
			<br/> <br/><br/> <br/>
<hr/>
		<h1>PREMIUM ACCOUNT</h1>
		<hr/>
		<p>As a welcome gift we're giving you one month of <span className="green">FREE</span> premium membership!</p>
		<hr/>
		<p>Service Fee <span className="lineThrough">$3</span></p>
		<p>Premium membership <span className="lineThrough">$50</span></p>
		<hr/>
		<p>Total <span className="green">$0</span></p>
<Formik initialValues={{decline:false}}

	onSubmit={(values, {setSubmitting}) =>{
		setTimeout(() => {
			console.log(JSON.stringify(values.null,2));
			setSubmitting(false);
		}, 400);
	axios.post('http//localhost:3001/api/putData',{
		decline:values.decline
	});
		}
}
>	
	{({isSubmitting}) => (		
		<Form className = 'formStyle'>
			<Field className="age3" type="checkbox" name="decline"/><span className="light">I decline a repeat subscription</span>
				<button className= 'submitB' type="submit"><Link to='/Final'><b> >> </b></Link></button>

		</Form>	
    )}
    </Formik>
    </div>  
)};
}