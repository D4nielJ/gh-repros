import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '../app/App';

it('renders correctly the app', () => {
  const tree = renderer
    .create(
      <Router>
        <App />
      </Router>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
