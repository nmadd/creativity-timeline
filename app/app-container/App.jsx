import React from 'react';
import particleParams from '../particles-config';
import buttons from '../top-buttons/buttons-config';
import TopButtonsContainer from '../top-buttons/TopButtonsContainer.jsx';
import Particles from 'react-particles-js';
import Timeline from '../timeline/Timeline.jsx';

const App = React.createClass({
  componentDidMount() {
    // Safari 3.0+ "[object HTMLElementConstructor]"
    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 || (function(p) {
      return p.toString() === "[object SafariRemoteNotification]";
    })(!window['safari'] || safari.pushNotification);

    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;

    if(!isChrome) {
      if(!isSafari) {
        alert('This site is best viewed on Chrome or Safari. Some parts may not be viewable on other browsers.')
      }
    }
  },
  render() {
    return (
      <div id='main-container'>
        <Particles className='particles-container' params={particleParams}/>
        <div id='content-container'>
          <TopButtonsContainer buttons={buttons}/>
          <Timeline widthPercent={.9}/> {this.props.children}
        </div>
      </div>
    )
  }
});

export default App;
