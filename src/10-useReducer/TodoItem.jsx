export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li
      className={`list-group-item d-flex justify-content-between ${
        todo.done ? 'text-decoration-line-through' : ''
      }`}
    >
      <span className='align-self-center' onClick={() => onToggleTodo(todo.id)}>
        {todo.description}
      </span>
      <button onClick={() => onDeleteTodo(todo.id)} className='btn btn-danger'>
        Borrar
      </button>
    </li>
  );
};
