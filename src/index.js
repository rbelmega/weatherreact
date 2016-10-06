import React from "react";
import ReactDOM from "react-dom";
import  { Router, browserHistory} from 'react-router'
import { Provider } from 'react-redux'
import { routes } from './routes'
import configureStore from './store/configureStore'

const root = document.getElementById('root');
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} ></Router>
  </Provider>,root)

