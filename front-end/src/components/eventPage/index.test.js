import React from 'react';
import { screen, render } from '../../utils/test-utils';
import EventPage from './index';

test('Events component mounts with no user', async () => {
  render(<EventPage />);
  expect(screen.getByText(/Loading/i)).toBeInTheDocument();
})