import { useSelector } from 'react-redux';
import DeleteItem from './DeleteItem';
import '../App.css'

function AddList() {
    const todos = useSelector(state => state.todos.todos);
    const listTodo = useSelector(state=>state.listTodos.value);

  return (
    <div>
      <ol> 
        <h2>List of tasks:</h2>
        {listTodo.map((todo) => (
          <DeleteItem key={todo.id} {...todo} />
        ))}
        {todos.map((todo) => (
          <DeleteItem key={todo.id} {...todo} />
        ))}
        <p></p>
      </ol>
    </div>
  );
};

export default AddList;