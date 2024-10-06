import { useDispatch } from 'react-redux';
import {removeTodo} from '../redux/reducers';
import '../App.css'

function DeleteItem ({id, text}) {
  const dispatch = useDispatch();

  return (
    <li> {text}
      <span className='delete' onClick={() => dispatch(removeTodo({id}))}>&times;</span>
    </li>
  );
};

export default DeleteItem;