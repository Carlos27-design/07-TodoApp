import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHook } from '../../03-example/MultipleCustomHook';
import { useFetch } from '../../hook/useFetch';
import { useCounter } from '../../hook/useCounter';

jest.mock('../../hook/useFetch');
jest.mock('../../hook/useCounter');

describe('Pruebas en <MultipleCustomHook />', () => {
  const mockIncremet = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncremet,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('debe de mostrar el componente por defecto', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHook />);

    expect(screen.getByText('Cargando........'));
    expect(screen.getByText('Rick and Morty'));

    const next_Id = screen.getByRole('button', { name: 'Siguiente Personaje' });

    expect(next_Id.disabled).toBeTruthy();
  });

  test('debe de mostrar un Quote', () => {
    useFetch.mockReturnValue({
      data: {
        name: 'Carlos',
        status: 'Alive',
        gender: 'Male',
        image: 'https://akjsdhfkajsdf.com',
      },
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHook />);

    expect(screen.getByText('Carlos')).toBeTruthy();
    expect(screen.getByText('Esta Vivo')).toBeTruthy();
    expect(screen.getByText('Hombre')).toBeTruthy();

    const next_Id = screen.getByRole('button', { name: 'Siguiente Personaje' });

    expect(next_Id.disabled).toBeFalsy();
  });

  test('debe de llamar la funcion de incrementar', () => {
    useFetch.mockReturnValue({
      data: {
        name: 'Carlos',
        status: 'Alive',
        gender: 'Male',
        image: 'https://akjsdhfkajsdf.com',
      },
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHook />);

    const next_Id = screen.getByRole('button', { name: 'Siguiente Personaje' });

    fireEvent.click(next_Id);

    expect(mockIncremet).toHaveBeenCalled();
  });
});
