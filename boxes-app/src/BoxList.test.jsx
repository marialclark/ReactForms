import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

// Helper function to add a box
function addBox(height = '100', width = '150', color = 'blue') {
  fireEvent.change(screen.getByLabelText('Height:'), { target: { value: height } });
  fireEvent.change(screen.getByLabelText('Width:'), { target: { value: width } });
  fireEvent.change(screen.getByLabelText('Box Color:'), { target: { value: color } });
  fireEvent.click(screen.getByText('Add Box'));
}

// Smoke Test
it('renders without crashing', () => {
  render(<BoxList />);
});

// Snapshot Test
it('matches snapshot', () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

// Critical Business Logic: Adding a Box
it('adds a new box to the list', () => {
  render(<BoxList />);

  expect(screen.queryByText('X')).not.toBeInTheDocument();

  addBox();

  const removeButton = screen.getByText('X');
  expect(removeButton).toBeInTheDocument();
  expect(removeButton.previousSibling).toHaveStyle(`
    width: 150px;
    height: 100px;
    background-color: blue;
  `);
});

// Critical Business Logic: Removing a Box
it('removes a box from the list', () => {
  render(<BoxList />);

  addBox();

  const removeButton = screen.getByText('X');
  fireEvent.click(removeButton);

  expect(removeButton).not.toBeInTheDocument();
});
