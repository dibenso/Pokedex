import { createStore } from 'redux';
import rootReducer from '../reducers';
import createEnhancer from './enhancer';

export default function configureStore(initialState) {
  const enhancer = createEnhancer();

  return createStore(rootReducer, initialState, enhancer);
}
