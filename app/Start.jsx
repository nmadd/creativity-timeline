import React from 'react';
import ReactDOM from 'react-dom';
import Timeline from './timeline/Timeline.jsx';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import Routes from './routes/Routes.jsx';

ReactDOM.render(
<Provider store={store}>
  <Routes></Routes>
</Provider>,
document.getElementById('root'));
