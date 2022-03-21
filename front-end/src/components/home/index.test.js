import React from 'react';
import { screen, render } from '../../utils/test-utils';
import Home from './index';

test('Home component mounts successfully', async () => {
  render(<Home />);
  expect(screen.getByText(/Browse our latest events/i)).toBeInTheDocument();
})