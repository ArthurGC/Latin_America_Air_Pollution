import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import pollutionReducer from './pollution/pollution';

const reducer = combineReducers({
  pollution: pollutionReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, thunk)),
);

export default store;
