import React from 'react';
import Button from '../top-buttons/Button.jsx';
const button = {buttonText: 'Start', clickHandler: null, linkDestination: '/info/post1', buttonClass: 'start-button top-button'};

const LandingPage = (props) => (
 <div className="landing-page">
   <h1>Creativity Timeline</h1>
   <p>by Nate Maddrey</p>
   <Button button={button} />
 </div>
);

export default LandingPage;
