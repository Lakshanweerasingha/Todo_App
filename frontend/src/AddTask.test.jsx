import React from 'react'; // Add this line
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AddTask from './AddTask';

describe('AddTask', () => {
  it('submits new task', () => {
    const addTask = vi.fn();
    render(<AddTask addTask={addTask} loading={false} />);

    fireEvent.change(screen.getByPlaceholderText(/Title/), { target: { value: 'New Task' } });
    fireEvent.change(screen.getByPlaceholderText(/Description/), { target: { value: 'Task Description' } });

    fireEvent.submit(screen.getByText('Add'));
    expect(addTask).toHaveBeenCalledWith({ title: 'New Task', description: 'Task Description' });
  });
});
