import { Hono } from "hono";
import * as todoController from "../controllers/todo.controller.ts";
import { todo } from "node:test";

const todoRouter = new Hono();
todoRouter.post("/", todoController.createTodo);
todoRouter.get("/:id", todoController.getTodo);
todoRouter.patch("/:id", todoController.completeTodo);
todoRouter.patch("/:id/title", todoController.updateTitle);

export { todoRouter };