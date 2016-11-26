import {createStore} from 'redux';
import rootReducer from '../reducers/index';

export default function configStore(initialState) {
  const store = createStore(rootReducer, initialState)
    if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}