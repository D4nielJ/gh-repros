// test-utils.jsx
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';

// Import your own reducer
import userReducer from '../features/user/userSlice'

jest.mock('../features/user/userSlice');

const reducer = combineReducers({
  user: userReducer,
});

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer, preloadedState }),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { render }
