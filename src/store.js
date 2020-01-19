import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { createStore } from 'redux'
import reducers from './reducers'

const middlewares = [promise(), thunk]

export default createStore(reducers, middlewares)
