import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './reducers';
import listSlice from './listApi/listSlice';


const store = configureStore({
  reducer: {
    listTodos: listSlice,
    todos: todoSlice,
  },  
});

export default store