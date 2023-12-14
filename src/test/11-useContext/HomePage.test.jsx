import { HomePage } from '../../11-useContext/HomePage';
import { UserContext } from '../../11-useContext/context/UserContext';

import { render, screen } from '@testing-library/react';

describe('Pruebas en el <HomePage/>', () => {
  const user = {
    id: 1,
    name: 'Carlos Coronado',
  };
  test('debe de mostrar el component sin el usuario', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');

    expect(preTag.innerHTML).toBe('null');
  });

  test('debe de mostrar el componente con el usuario', () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');

    expect(preTag.innerHTML).toEqual(JSON.stringify(user, null, 3));
  });
});
