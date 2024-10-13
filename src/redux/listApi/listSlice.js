import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   value: [],
   loading: false,
   error: null
}

const ListSlice = createSlice({
    name: 'listTodos',
    initialState,
    reducers: {
      listLoading:(state, action) => { state.loading = action.payload },
      listError: (state, action) => { state.error = action.payload },
      listAdd: (state, action) => {state.value = action.payload},
    }
});

export const {listLoading, listError, listAdd} = ListSlice.actions;

export default ListSlice.reducer;