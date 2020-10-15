import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/todos";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const logTodo = (todo: Todo) => {
  const { id, title, completed } = todo;

  console.log(id, title, completed);
};

// main
axios.get(`${url}/1`)
  .then(resp => {
    const todo = resp.data as Todo;
    logTodo(todo);
  })
  .catch(e => {
    console.error(e);
  });

