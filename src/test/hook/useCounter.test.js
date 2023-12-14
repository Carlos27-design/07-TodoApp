import { renderHook } from '@testing-library/react';
import { useCounter } from '../../../src/hook';
import { act } from 'react-dom/test-utils';

describe('Pruebas sobre useCounter', () => {
  test('debe de retornar los valores por defecto', () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, reset } = result.current;

    expect(counter).toBe(1);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test('debe de retornar el counter con el valor de 100', () => {
    const value = 100;
    const { result } = renderHook(() => useCounter(value));

    const { counter } = result.current;

    expect(counter).toBe(value);
  });

  test('debe incrementar el contador', () => {
    const { result } = renderHook(() => useCounter(100));

    const { increment } = result.current;

    act(() => {
      increment();
      increment(2);
    });

    expect(result.current.counter).toBe(103);
  });

  test('debe disminuir el contador', () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;

    act(() => {
      decrement();
      decrement(2);
    });

    expect(result.current.counter).toBe(97);
  });

  test('debe resetear sus valores el counter', () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment, reset } = result.current;

    act(() => {
      increment(5);
      reset();
    });

    expect(result.current.counter).toBe(100);
  });
});
