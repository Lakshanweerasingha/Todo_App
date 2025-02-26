import React from 'react'; // Add this line
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

    const taskElements = screen.getAllByText(/Task \d/);
    expect(taskElements).toHaveLength(2);

    fireEvent.click(screen.getAllByText('Done')[0]); // Click the first "Done" button
    expect(markAsDone).toHaveBeenCalledWith(1);
  });
});
