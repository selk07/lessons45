import {listLoading, listError,listAdd} from './listSlice'

const fetchData = () => {
   return (dispatch, getState) => {
       dispatch({ type: listLoading.toString() });
       return fetch('https://jsonplaceholder.typicode.com/todos/?_limit=10') 

           .then(response => response.json()) 
           
           .then(data => {dispatch({ type: listAdd.toString(), payload: data });})
           .catch(error => {
               dispatch({ type: listError.toString(), payload: error });
           });
   };
};

export default fetchData