import { render, screen, fireEvent } from '@testing-library/react';
import Todo from './Todo';
import { vi } from 'vitest'; // For mocking

describe('Todo Component', () => {
  // Smoke Test
  it('renders without crashing', () => {
    render(<Todo id="test-id" task="Test Task" removeTodo={() => {}} />);
  });

  // Snapshot Test
  it('matches snapshot', () => {
    const { asFragment } = render(
      <Todo id="test-id" task="Test Task" removeTodo={() => {}} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  // Critical Business Logi: Remove Todo
  it('calls removeTodo with the correct id when the button is clicked', () => {
    const mockRemoveTodo = vi.fn(); // Mock the removeTodo function
    render(<Todo id="test-id" task="Test Task" removeTodo={mockRemoveTodo} />);

    const button = screen.getByText('X');
    fireEvent.click(button);

    expect(mockRemoveTodo).toHaveBeenCalledTimes(1);
    expect(mockRemoveTodo).toHaveBeenCalledWith('test-id');
  });
});
