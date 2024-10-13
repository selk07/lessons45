import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './redux/reducers';
import NewForm from './components/NewForm';
import AddList from './components/AddList';
import fetchData from './redux/listApi/thunk';

import { useSelector } from 'react-redux';

function App() {
  const [title, setText] = useState('');
  const dispatch = useDispatch();
  const handleAction = () => {
    if(title.trim().length) {
      dispatch(addTodo({title}));
      setText('');
    }
  }
  useEffect(()=>{
    dispatch(fetchData())
  },[])

  return (
    <div className="App">
      <div className='wraper'>
        <div className='wraper-form'>
          <h2>Input your tasks</h2>
          <NewForm onClick={() => (fetchData())} value={title} updateText={setText} handleAction={handleAction} />
        </div>
        <div className='wraper-list'>
          <AddList />
        </div>
      </div>
    </div>
  );
}

export default App;
