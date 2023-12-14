import { useEffect } from 'react';
import { useForm } from '../hook/useForm';

export const FormWithCustomHook = () => {
  const { user, onInputChange, username, email, password, onResetForm } =
    useForm({
      username: '',
      email: '',
      password: '',
    });

  // const { username, email, password } = user;

  //

  // useEffect(() => {
  //   // console.log('useEffect Called');
  // }, []);

  // useEffect(() => {
  //   // console.log('user change !');
  // }, [user]);

  // useEffect(() => {
  //   // console.log('email change');
  // }, [email]);

  // useEffect(() => {
  //   // console.log('username change');
  // }, [username]);

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

      <input
        type='password'
        className='form-control mt-2'
        placeholder='Contraseña'
        name='password'
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className='btn btn-danger mt-2'>
        Borrar
      </button>
    </>
  );
};
