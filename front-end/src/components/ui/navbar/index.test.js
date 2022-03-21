import React from 'react';
import { screen, render } from '@testing-library/react';
import Navbar from './index';

test('Navbar component mounts with menu', async () => {
  render(<Navbar />);
  expect(screen.getByText(/About/i)).toBeInTheDocument();
})