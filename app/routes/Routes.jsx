import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import LandingPage from '../landing-page/LandingPage.jsx';
import Info from '../info/Info.jsx';
import About from '../about/About.jsx';
import FullText from '../full-text/FullText.jsx';
import {compose} from 'redux';
import store from '../store';
import {setCurrentInfo} from '../actions';
import App from '../app-container/App.jsx';


const setInfoOnEnter = (nextState) => {
  store.dispatch(setCurrentInfo(nextState.params.num))
}
const routeEnterHandler = compose(setInfoOnEnter);

const Routes = (props) => (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={LandingPage} />
      <Route path='info/:num' component={Info} onEnter={routeEnterHandler}/>
      <Route path='about' component={About} />
      <Route path='full-text' component={FullText} />
    </Route>
  </Router>
);

export default Routes;
