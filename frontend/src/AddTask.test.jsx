import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AddTask from './AddTask';

describe('AddTask', () => {
  it('submits new task', () => {
    const addTask = vi.fn();
    render(<AddTask addTask={addTask} loading={false} />);

    // Simulate user entering a title and description
    fireEvent.change(screen.getByPlaceholderText(/Title/), { target: { value: 'New Task' } });
    fireEvent.change(screen.getByPlaceholderText(/Description/), { target: { value: 'Task Description' } });

    // Simulate form submission
    fireEvent.submit(screen.getByText('Add'));

    // Check if addTask is called with correct arguments
    expect(addTask).toHaveBeenCalledWith({ title: 'New Task', description: 'Task Description' });
  });

  it('disables inputs and button when loading', () => {
    const addTask = vi.fn();
    render(<AddTask addTask={addTask} loading={true} />);

    // Ensure form fields and button are disabled when loading
    expect(screen.getByPlaceholderText(/Title/)).toBeDisabled();
    expect(screen.getByPlaceholderText(/Description/)).toBeDisabled();
    expect(screen.getByText('Adding...')).toBeDisabled();
  });
});
