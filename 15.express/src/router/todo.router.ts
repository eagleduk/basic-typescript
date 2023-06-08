import Express from "express";

import {
  createTodos,
  deleteTodos,
  getTodos,
  updateTodos,
} from "../controller/todo.controller";

const router = Express.Router();

router.get("/", getTodos);

router.post("/", createTodos);

router.patch("/:id", updateTodos);

router.delete("/:id", deleteTodos);

export default router;
