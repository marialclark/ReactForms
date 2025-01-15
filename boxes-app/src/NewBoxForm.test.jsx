import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

// Smoke Test
it('renders without crashing', () => {
  render(<NewBoxForm addBox={() => {}} />);
});

// Snapshot Test
it('matches snapshot', () => {
  const { asFragment } = render(<NewBoxForm addBox={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});

// Critical Business Logic: Form Submission Test
it('calls addBox with the correct data on form submission', () => {
  const mockAddBox = jest.fn();
  render(<NewBoxForm addBox={mockAddBox} />);

  fireEvent.change(screen.getByLabelText('Width:'), { target: { value: '100' } });
  fireEvent.change(screen.getByLabelText('Height:'), { target: { value: '150' } });
  fireEvent.change(screen.getByLabelText('Box Color:'), { target: { value: 'blue' } });

  fireEvent.click(screen.getByText('Add Box'));

  expect(mockAddBox).toHaveBeenCalledTimes(1);
  expect(mockAddBox).toHaveBeenCalledWith({
    width: '100',
    height: '150',
    backgroundColor: 'blue',
    id: expect.any(String), // UUID generated
  });
});


