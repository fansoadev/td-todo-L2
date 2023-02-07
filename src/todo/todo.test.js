import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Todo from './Todo';

describe('Todo component', () => {
  it('renders todo and done lists', () => {
    render(<Todo />);
    const todoList = screen.getByText('Todo List');
    const doneList = screen.getByText('Done List');
    expect(todoList).toBeDefined();
    expect(doneList).toBeDefined();
  });

  it('moves items from todo list to done list', () => {
    render(<Todo />);
    const mathCheckbox = screen.getByLabelText('math');
    fireEvent.click(mathCheckbox);
    expect(mathCheckbox).not.toBeInTheDocument();
    const doneList = screen.getByText('Done List');
    expect(screen.getByLabelText('math', doneList)).toBeInTheDocument();
  });
});
