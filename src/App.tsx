import React, { useState } from 'react';
import { TodoList } from "./TodoList";
import { AddTodoForm } from './AddTodoForm';

const App: React.FC = () => {
  
const getExistingTodos = (): Todo[] => {
    const todoJson = localStorage.getItem("todos");
    if(!todoJson) return [];
    const todoArray = JSON.parse(todoJson);
    return todoArray;
  };
  /* LocalStorage getItem */


  const [todos, setTodos] = useState(getExistingTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  /* Toggle Todo's */

  const addTodo: AddTodo = newTodo  => {
    newTodo.trim() !== "" &&
    setTodos([...todos, { text: newTodo, complete: false}]);
    const stringTodos = JSON.stringify([...todos, { text: newTodo, complete: false}]);
    localStorage.setItem("todos", stringTodos);
  };
/* LocalStorage setItem */

  return (
  <React.Fragment>
    <TodoList todos={todos} toggleTodo={toggleTodo} />
    <AddTodoForm addTodo={addTodo} />
  </React.Fragment>
  );
};
export default App;
