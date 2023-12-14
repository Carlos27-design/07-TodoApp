import { useForm } from '../hook';

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: '',
  });

  const onSubmitForm = (event) => {
    event.preventDefault();

    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description,
    };

    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onSubmitForm}>
      <input
        type='text'
        placeholder='¿Que hay que hacer?'
        className='form-control'
        name='description'
        value={description}
        onChange={onInputChange}
      />

      <button type='submit' className='btn btn-primary mt-1'>
        Agregar
      </button>
    </form>
  );
};
