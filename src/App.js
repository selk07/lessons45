import './App.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './redux/reducers';
import NewForm from './components/NewForm';
import AddList from './components/AddList';

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAction = () => {
    if(text.trim().length) {
      dispatch(addTodo({text}));
      setText('');
    }
  }
  return (
    <div className="App">
      <div className='wraper'>
        <div className='wraper-form'>
          <h2>Input your tasks</h2>
          <NewForm value={text} updateText={setText} handleAction={handleAction} />
        </div>
        <div className='wraper-list'>
          <AddList />
        </div>
      </div>
    </div>
  );
}

export default App;
