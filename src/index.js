import React from "react";
import ReactDOM from "react-dom";
import  { Router, browserHistory} from 'react-router'
import { Provider } from 'react-redux'
import { routes } from './routes'
import configureStore from './store/configureStore'
import { ReduxAsyncConnect} from 'redux-async-connect'

const root = document.getElementById('root');
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router render={(props) => <ReduxAsyncConnect {...props}/>}
            history={browserHistory} routes={routes} />
  </Provider>, root);

