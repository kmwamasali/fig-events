import { render, screen } from '../src/utils/test-utils';
import App from './App';

test('renders FigEvents home link', () => {
  render(
    <App />
  );
  
  expect(screen.getByText(/FigEvents/i)).toBeInTheDocument();
});
