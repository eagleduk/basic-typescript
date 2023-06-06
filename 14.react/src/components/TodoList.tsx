import React from "react";
import { Todo } from "../App";

import "./TodoList.css";

type TodoListProps = {
  items: Todo[];
  removeItem: (id: string) => void;
};

function TodoList(props: TodoListProps) {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>
          <span>{item.text}</span>
          <button onClick={() => props.removeItem(item.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
