import React from 'react';

const aboutText1 = `
I made this project to try to visualize some of my creative journey. 
Each node on the timeline has a few paragraphs about my creativity during different times in my life.
And whenever you click on the page, new connections are formed between the bubbles in the background.
`

const About = (props) => (
  <div className="about-page">
    <div className="flex-one"></div>
    <div className="flex-three">
      <p>{aboutText1}</p>
      <p>The timeline is original code that I've open sourced and made available on GitHub. The background was made using a cool library called <a href='http://vincentgarreau.com/particles.js'>particles.js</a>, which is also open sourced. This project was built using ReactJS.</p>
    </div>
    <div className="flex-one"></div>
  </div>
);

export default About;
