import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import pollutionReducer from '../redux/pollution/pollution';

const RootReducer = combineReducers({
  pollution: pollutionReducer,
});

const store = createStore(
  RootReducer,
  applyMiddleware(thunk),
);

export default store;
