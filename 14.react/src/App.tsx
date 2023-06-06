import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewToDo from "./components/NewToDo";

export type Todo = {
  id: string;
  text: string;
};

function App() {
  // const todos = [{ id: "i1", text: "todo1" }];
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoItemHandler = (text: string) => {
    setTodos((current) => {
      return [
        ...current,
        {
          id: `i${current.length}`,
          text,
        },
      ];
    });
  };

  const removeTodoItemHandler = (id: string) => {
    setTodos((current) => {
      return current.filter((item) => item.id !== id);
    });
  };

  return (
    <div className="App">
      <NewToDo addItem={addTodoItemHandler} />
      <TodoList items={todos} removeItem={removeTodoItemHandler} />
    </div>
  );
}

export default App;
