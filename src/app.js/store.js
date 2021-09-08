import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import listReducer from '../features/list/listSlice';

const middlewares = [thunk, logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  list: listReducer,
});

const store = createStore(reducer, composeEnhancers(applyMiddleware(...middlewares)));

export default store;
