import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskList from './TaskList';

// Add the necessary test cases
const tasks = [
  { id: 1, title: 'Task 1', description: 'Description 1', completed: false },
  { id: 2, title: 'Task 2', description: 'Description 2', completed: false },
];

test('renders tasks and handles mark as done', () => {
  const markAsDone = jest.fn();
  render(<TaskList tasks={tasks} markAsDone={markAsDone} loading={false} />);

  const taskElements = screen.getAllByText(/Task \d/);
  expect(taskElements).toHaveLength(2);

  fireEvent.click(screen.getByText('Done'));
  expect(markAsDone).toHaveBeenCalledWith(1);
});
