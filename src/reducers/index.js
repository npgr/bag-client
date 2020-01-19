import { combineReducers } from 'redux'

import appState from './appState'
import uiState from './uiState'

export default combineReducers({
  appState,
  uiState
})
