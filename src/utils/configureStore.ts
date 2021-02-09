import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import { rootReducer } from '../reducers'

export const configureStore = (initialState = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(logger)),
  )

  return {
    store,
  }
}

export default configureStore
