import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const logger = createLogger({
    collapsed: true
  });
  const middleware = [thunk, logger];
  const enhancer = compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return createStore(rootReducer, initialState, enhancer);
}
