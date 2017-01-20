import React from 'react';
import particleParams from '../particles-config';
import buttons from '../top-buttons/buttons-config';
import TopButtonsContainer from '../top-buttons/TopButtonsContainer.jsx';
import Particles from 'react-particles-js';
import Timeline from '../timeline/Timeline.jsx';

const App = React.createClass({
  render() {
    return (
      <div id='main-container'>
        <Particles className='particles-container' params={particleParams} />
        <div id='content-container'>
          <TopButtonsContainer buttons={buttons}/>
          <Timeline widthPercent={.9}/>
          {this.props.children}
        </div>
      </div>
    )
  }
});

export default App;
