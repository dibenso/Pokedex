import { combineReducers } from 'redux';
import pokemon from './pokemon';
import ui from './ui';

export default combineReducers({
  pokemon,
  ui
});
