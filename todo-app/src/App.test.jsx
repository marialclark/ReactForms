import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  // Smoke Test
  it('renders without crashing', () => {
    render(<App />);
  });

  // Snapshot Test
  it('matches snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Critical Business Logic: Content Render Test
  it('renders the Todo App heading', () => {
    render(<App />);
    expect(screen.getByText('Todo App')).toBeInTheDocument();
  });
});
