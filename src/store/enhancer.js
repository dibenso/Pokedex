import { applyMiddleware, compose } from 'redux';
import createMiddleware from './middleware';

export default function createEnhancer() {
  const middleware = createMiddleware();

  return compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}