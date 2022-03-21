import React from 'react';
import { screen, render } from '@testing-library/react';
import Layout from './index';

test('Layout component shows children', async () => {
  render(<Layout>
    Child text
  </Layout>);
  expect(screen.getByText(/Child text/i)).toBeInTheDocument();
})