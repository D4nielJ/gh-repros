import React from 'react';
import { render, fireEvent, screen } from './test-utils';
import App from '../app/App';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

// Reset any runtime request handlers we may add during the tests.

test('renders correctly the app', () => {
  render(
    <Router>
      <App />
    </Router>,
  );
  
  expect(screen.getByText('repros')).toBeInTheDocument();

  
});

test('can navigate to a certain user', () => {
  render(
    <Router>
      <App />
    </Router>,
  );

  fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'd4nielj' } });
  expect(screen.getByDisplayValue('d4nielj')).toBeInTheDocument();

  fireEvent.click(screen.getByText('Go!'));
  expect(screen.getByText('@D4nielJ')).toBeInTheDocument();

  fireEvent.click(screen.getByText('Stars'));
  fireEvent.click(screen.getByText('Size'));

  expect(screen.getByText('capstone-the-portal')).toBeInTheDocument();
})
