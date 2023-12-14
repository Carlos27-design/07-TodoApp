import { fireEvent, render, screen } from '@testing-library/react';

import { LoginPage } from '../../11-useContext/LoginPage';
import { UserContext } from '../../11-useContext/context/UserContext';

describe('Prueba en <LoginPage />', () => {
  const user = {
    id: 1,
    name: 'Carlos Coronado',
    email: 'carlos@gmail.com',
  };
  test('debe de mostrar el componente sin el usuario', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');

    expect(preTag.innerHTML).toBe('null');
  });

  test('debe de llamar el setUser cuando se hace click en el boton', () => {
    const setUserMock = jest.fn();

    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const buttonTag = screen.getByLabelText('button');

    fireEvent.click(buttonTag);

    expect(setUserMock).toHaveBeenCalledWith({
      email: 'carlos@gmail.com',
      id: 1,
      name: 'Carlos Coronado',
    });
  });
});
