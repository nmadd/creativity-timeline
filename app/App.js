import React from 'react';
import ReactDOM from 'react-dom';
import Timeline from './timeline/Timeline.jsx';
import './App.css';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Info from './info/Info.jsx';
import {Provider} from 'react-redux';
import store from './store';
import {setCurrentInfo} from './actions';
import {compose} from 'redux';
import Particles from 'react-particles-js';
import TopButtonsContainer from './top-buttons/TopButtonsContainer.jsx';
import LandingPage from './landing-page/LandingPage.jsx';
import About from './about/About.jsx';
import FullText from './full-text/FullText.jsx';
import buttons from './top-buttons/buttons-config';

const styles = {
  particles : {
    position: 'relative'
  },
  // content: {
  //   position: 'absolute',
  //   top: 0,
  //   backgroundColor: 'rgba(0,0,0,0)'
  // }
}

const particleParams = {
        particles: {
          number: {
            value: 10
          },
          color: {
            value: '#87CEFA'
          },
          shape: {
            type: 'circle'
          },
          size: {
            value: 3
          },
          line_linked: {
            enable_auto: true,
            distance: 150,
            color: '#000000'
          },
          move: {
            direction: 'right',
            out_mode: 'out',
            speed: 1
          }
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: 'push'
            },
            onhover: {
              enable: true,
              mode: 'bubble'
            }
          },
          modes: {
            bubble: {
              size: 5,
              duration: 5,
              distance: 150,
              opacity: .5
            }
          },
          detect_on: 'window'
        }
}

const App = React.createClass({
  render() {
    return (
      <div id='main-container'>
        <Particles style={styles.particles} params={particleParams} />
        <div id='content-container'>
          <TopButtonsContainer buttons={buttons}/>
          <Timeline widthPercent={.9}/>
          {this.props.children}
        </div>
      </div>
    )
  }
})

const setInfoOnEnter = (nextState) => {
  store.dispatch(setCurrentInfo(nextState.params.num))
}
const routeEnterHandler = compose(setInfoOnEnter);

ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={LandingPage} />
      <Route path='info/:num' component={Info} onEnter={routeEnterHandler}/>
      <Route path='about' component={About} />
      <Route path='full-text' component={FullText} />
    </Route>
  </Router>
</Provider>, document.getElementById('root'))
