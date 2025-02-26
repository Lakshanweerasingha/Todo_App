import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddTask from './AddTask';

test('submits new task', () => {
  const addTask = jest.fn();
  render(<AddTask addTask={addTask} loading={false} />);

  fireEvent.change(screen.getByPlaceholderText(/Title/), { target: { value: 'New Task' } });
  fireEvent.change(screen.getByPlaceholderText(/Description/), { target: { value: 'Task Description' } });

  fireEvent.submit(screen.getByText('Add'));
  expect(addTask).toHaveBeenCalledWith({ title: 'New Task', description: 'Task Description' });
});
