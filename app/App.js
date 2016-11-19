import React from 'react';
import ReactDOM from 'react-dom';
import Timeline from './timeline/Timeline.jsx';
import './App.css';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Info from './info/Info.jsx';
import {Provider} from 'react-redux';
import store from './store';


const App = React.createClass({
  getInitialState() {
    return {currentInfo: null};
  },
  render() {
    return (
      <div>
        <Timeline />
        {this.props.children}
      </div>
    )
  }
})

ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path='info' component={Info} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
