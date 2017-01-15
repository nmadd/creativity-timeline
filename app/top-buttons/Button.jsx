import React from 'react';
import {Link} from 'react-router';

const Button = (props) => (
   <Link to={props.button.linkDestination}><button onClick={props.button.clickHandler} className={props.button.buttonClass}>{props.button.buttonText}</button></Link>
);

export default Button;
