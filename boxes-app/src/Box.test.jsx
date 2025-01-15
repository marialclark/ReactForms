import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Box from './Box';

// Smoke Test
it('renders without crashing', () => {
  render(<Box id="test-id" width={100} height={100} backgroundColor="red" removeBox={() => {}} />);
});

// Snapshot Test
it('matches snapshot', () => {
  const { asFragment } = render(
    <Box id="test-id" width={100} height={100} backgroundColor="red" removeBox={() => {}} />
  );
  expect(asFragment()).toMatchSnapshot();
});

// Critical Business Logic: Removing a Box
it('calls removeBox when the "X" button is clicked', () => {
  const mockRemoveBox = jest.fn();
  render(<Box id="test-id" width={100} height={100} backgroundColor="red" removeBox={mockRemoveBox} />);

  const removeButton = screen.getByText('X');
  fireEvent.click(removeButton);

  expect(mockRemoveBox).toHaveBeenCalledTimes(1);
  expect(mockRemoveBox).toHaveBeenCalledWith('test-id');
});
