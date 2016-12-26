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


const App = React.createClass({
  render() {
    return (
      <div>
        <Timeline />
        {this.props.children}
      </div>
    )
  }
})

const setInfoOnEnter = (nextState) => {store.dispatch(setCurrentInfo(nextState.params.num))}
const routeEnterHandler = compose(setInfoOnEnter);

ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path='info/:num' component={Info} onEnter={routeEnterHandler}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
