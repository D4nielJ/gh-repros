import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import userReducer from '../features/user/userSlice';
import repoReducer from '../features/repo/repoSlice';

const middlewares = [thunk, logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  user: userReducer,
  repo: repoReducer,
});

const store = createStore(reducer, composeEnhancers(applyMiddleware(...middlewares)));

export default store;
