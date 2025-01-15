import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList Component', () => {
  // Smoke Test
  it('renders without crashing', () => {
    render(<TodoList />);
  });

  // Snapshot Test
  it('matches snapshot', () => {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Critical Business Logic: Adding a Todo
  it('can add a new todo', () => {
    render(<TodoList />);

    const input = screen.getByLabelText('Task:');
    const button = screen.getByText('Add Todo');
    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.click(button);

    expect(screen.getByText('Test Todo')).toBeInTheDocument();
  });

  // Critical Business Logic: Removing a Todo
  it('can remove a todo', () => {
    render(<TodoList />);

    const input = screen.getByLabelText('Task:');
    const button = screen.getByText('Add Todo');
    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.click(button);

    const removeButton = screen.getByText('X');
    fireEvent.click(removeButton);

    expect(screen.queryByText('Test Todo')).not.toBeInTheDocument();
  });
});
