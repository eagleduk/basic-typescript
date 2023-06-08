import { RequestHandler } from "express";
import { Todo } from "../model/todo.model";

const Todos: Todo[] = [];

export const createTodos: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;

  const todo = new Todo(Math.random().toString(), text);

  Todos.push(todo);

  res.status(201).json({ message: "Create Todo!!", todo });
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.status(201).json({ todos: Todos });
};

export const updateTodos: RequestHandler<{ id: string }> = (req, res, next) => {
  const id = req.params.id;
  const text = (req.body as { text: string }).text;

  const findIndex = Todos.findIndex((todo) => todo.id === id);
  if (findIndex < 0) {
    throw new Error("Not found Todo.");
  }
  Todos[findIndex] = new Todo(id, text);

  res.status(201).json({ message: "Update Todo!!", todo: Todos[findIndex] });
};

export const deleteTodos: RequestHandler<{ id: string }> = (req, res, next) => {
  const id = req.params.id;
  const findIndex = Todos.findIndex((todo) => todo.id === id);
  if (findIndex < 0) {
    throw new Error("Not found Todo.");
  }
  Todos.splice(findIndex, 1);

  res.status(201).json({ message: "Deleted Todo!!" });
};
