import { combineReducers, createStore } from 'redux';
import reducers from './reducers';

export const store = createStore(combineReducers(reducers));
