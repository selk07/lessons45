import { useSelector } from 'react-redux';
import DeleteItem from './DeleteItem';
import '../App.css'

function AddList() {
    const todos = useSelector(state => state.todos.todos);

  return (
    <div>
      <ol> 
        <h2>List of tasks:</h2>
        {todos.map((todo) => (
          <DeleteItem key={todo.id} {...todo} />
        ))}
      </ol>
    </div>
  );
};

export default AddList;