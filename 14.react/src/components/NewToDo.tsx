import React, { useRef } from "react";

import "./NewTodo.css";

type NewToDoProps = {
  addItem: (text: string) => void;
};

function NewToDo(props: NewToDoProps) {
  const textReference = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const textValue = textReference.current?.value;
    if (textValue) props.addItem(textValue);
  };
  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="newTodo">Todo Text</label>
        <input id="newTodo" type="text" ref={textReference} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default NewToDo;
