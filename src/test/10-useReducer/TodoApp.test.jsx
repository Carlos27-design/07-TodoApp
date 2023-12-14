import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../10-useReducer/TodoApp';
import { useTodo } from '../../hook/useTodo';

jest.mock('../../hook/useTodo');

describe('Pruebas en <TodoApp /> ', () => {
  useTodo.mockReturnValue({
    todos: [
      { id: 1, description: 'Todo #1', done: false },
      { id: 2, description: 'Todo #2', done: true },
    ],
    todosCounter: 2,
    todosPending: 1,
    handleNewTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
  });
  test('debe de mostrar el component correctamente', () => {
    render(<TodoApp />);

    expect(screen.getByText('Todo #1')).toBeTruthy();
    expect(screen.getByText('Todo #2')).toBeTruthy();
    expect(screen.getByRole('textbox')).toBeTruthy();
  });
});
