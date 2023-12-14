import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>LoginPage</h1>

      <hr />

      <pre aria-label='pre'>{JSON.stringify(user, null, 3)}</pre>

      <button
        aria-label='button'
        className='btn btn-primary'
        onClick={() =>
          setUser({
            id: 1,
            name: 'Carlos Coronado',
            email: 'carlos@gmail.com',
          })
        }
      >
        Establecer Usuario
      </button>
    </>
  );
};
