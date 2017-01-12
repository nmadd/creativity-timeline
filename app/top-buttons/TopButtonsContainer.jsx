import React from 'react';
import Button from './Button.jsx';

const TopButtonsContainer = (props) => (
 <div className='top-buttons-container'>
   {props.buttons.map((button, indx) => <Button button={button} key={indx}/>)}
 </div>
);

export default TopButtonsContainer;
