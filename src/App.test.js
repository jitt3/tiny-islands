import React from 'react';
import {render} from 'utils/test-utils';
import App from './App';

test('renders learn react link', () => {
  const app = render(<App />, {});
  expect(app.getByTestId('app')).toBeInTheDocument();
});
