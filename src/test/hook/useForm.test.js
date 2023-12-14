import { renderHook } from '@testing-library/react';
import { useForm } from '../../hook';
import { act } from 'react-dom/test-utils';

describe('Pruebas sobre useForm', () => {
  const initialForm = {
    name: 'Carlos',
    email: 'carlos@gmail.com',
  };
  test('debe de regresar los valores por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      user: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test('debe de cambiar el nombre del formulario', () => {
    const newValue = 'Juan';
    // Montar el Hook
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    // onInputChange () // act, event...
    act(() => {
      onInputChange({ target: { name: 'name', value: newValue } });
    });
    // expect, result.current.name === Juan
    expect(result.current.name).toBe(newValue);
    // expect, result.current.formState.name = Juan
    expect(result.current.user.name).toBe(newValue);
  });

  test('debe de volver al estado inicial', () => {
    const newValue = 'Juan';
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;

    act(() => {
      onInputChange({ target: { name: 'name', value: newValue } });
      onResetForm();
    });

    expect(result.current.name).toBe(initialForm.name);

    expect(result.current.user.name).toBe(initialForm.name);
  });
});
