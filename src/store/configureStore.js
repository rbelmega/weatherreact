import { createStore, applyMiddleware} from 'redux'
import reducers from '../reducers'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

const middleware = applyMiddleware (thunk, createLogger());

export default function configureStore () {
  const store = createStore(reducers, middleware );
  return store;
}