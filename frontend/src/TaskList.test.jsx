import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import TaskList from './TaskList';

const tasks = [
  { id: 1, title: 'Task 1', description: 'Description 1', completed: false },
  { id: 2, title: 'Task 2', description: 'Description 2', completed: false },
];

describe('TaskList', () => {
  it('renders tasks and handles mark as done', () => {
    const markAsDone = vi.fn();
    render(<TaskList tasks={tasks} markAsDone={markAsDone} loading={false} />);

    // Check that both tasks are rendered
    const taskElements = screen.getAllByText(/Task \d/);
    expect(taskElements).toHaveLength(2);

    // Click the first "Done" button
    fireEvent.click(screen.getAllByText('Done')[0]);

    // Check if markAsDone was called with correct task id
    expect(markAsDone).toHaveBeenCalledWith(1);
  });

  it('does not render tasks when task list is empty', () => {
    const markAsDone = vi.fn();
    render(<TaskList tasks={[]} markAsDone={markAsDone} loading={false} />);

    // Ensure no tasks are rendered when the task list is empty
    expect(screen.queryByText('Task 1')).toBeNull();
    expect(screen.queryByText('Task 2')).toBeNull();
  });

  it('disables buttons when loading', () => {
    const markAsDone = vi.fn();
    render(<TaskList tasks={tasks} markAsDone={markAsDone} loading={true} />);

    // Ensure "Done" buttons are disabled during loading
    const doneButtons = screen.getAllByText('Done');
    doneButtons.forEach((button) => {
      expect(button).toBeDisabled();
    });
  });
});
