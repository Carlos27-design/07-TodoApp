import { useEffect, useState } from 'react';
import { Message } from './message';

export const SimpleForm = () => {
  const [user, setUser] = useState({
    username: 'Carlos Coronado',
    email: 'carlos@gmail.com',
  });

  const { username, email } = user;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log('useEffect Called');
  }, []);

  useEffect(() => {
    // console.log('user change !');
  }, [user]);

  useEffect(() => {
    // console.log('email change');
  }, [email]);

  useEffect(() => {
    // console.log('username change');
  }, [username]);
  return (
    <>
      <h1>Formulario Simple</h1>

      <hr />

      <input
        type='text'
        className='form-control'
        placeholder='User Name'
        name='username'
        value={username}
        onChange={onInputChange}
      />

      <input
        type='email'
        className='form-control mt-2'
        placeholder='desector12345678@gmail.com'
        name='email'
        value={email}
        onChange={onInputChange}
      />

      {username === 'Carlos Coronado' && <Message className='mt-2' />}
    </>
  );
};
