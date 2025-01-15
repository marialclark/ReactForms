import { render, screen, fireEvent } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';
import { vi } from 'vitest';

describe('NewTodoForm Component', () => {
  // Smoke Test
  it('renders without crashing', () => {
    render(<NewTodoForm addTodo={() => {}} />);
  });

  // Snapshot Test
  it('matches snapshot', () => {
    const { asFragment } = render(<NewTodoForm addTodo={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Critical Business Logic: Form Submission
  it('calls addTodo with the correct task when submitted', () => {
    const mockAddTodo = vi.fn(); // Mocks addTodo function
    render(<NewTodoForm addTodo={mockAddTodo} />);

    const input = screen.getByLabelText('Task:');
    fireEvent.change(input, { target: { value: 'Write tests' } });

    const button = screen.getByText('Add Todo');
    fireEvent.click(button);

    expect(mockAddTodo).toHaveBeenCalledTimes(1);
    expect(mockAddTodo).toHaveBeenCalledWith({
      id: expect.any(String), // ID should be a number (uuid)
      task: 'Write tests',
    });

    // Check that the input is cleared after submission
    expect(input.value).toBe('');
  });
});
