import { todoReducer } from '../../10-useReducer/todoReducer';

describe('Pruebas en todoReducer', () => {
  const initialState = [
    {
      id: 1,
      description: 'Demo Todo',
      done: false,
    },
  ];
  test('debe de regresar el estado inicial', () => {
    const newState = todoReducer(initialState, {});

    expect(newState).toBe(initialState);
  });
  test('debe de agregar un todo', () => {
    const action = {
      type: 'Add Todo',
      payload: {
        id: 2,
        description: 'Encontrar la escoba',
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test('debe de eliminar un TODO', () => {
    const id = 1;

    const action = {
      type: 'Delete Todo',
      payload: id,
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(0);
  });

  test('debe de realizar el toggle de un TODO', () => {
    const id = 1;

    const action = {
      type: 'Toggle Todo',
      payload: id,
    };

    const newState = todoReducer(initialState, action);

    expect(newState[0].done).toBe(true);

    const newState2 = todoReducer(newState, action);

    expect(newState2[0].done).toBe(false);
  });
});
