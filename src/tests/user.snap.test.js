import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

// Import your own reducer
import userReducer from '../features/user/userSlice'
import User from '../features/user/user';

jest.mock('../features/user/userSlice');

let preloadedState = {};

let reducer = combineReducers({
  user: userReducer,
});

const store = configureStore({ reducer, preloadedState });

it('renders correctly the user', () => {
  const userTree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <User id={'d4nielj'} />
        </Router>
      </Provider>,
    )
    .toJSON();

  expect(userTree).toMatchSnapshot();
});
