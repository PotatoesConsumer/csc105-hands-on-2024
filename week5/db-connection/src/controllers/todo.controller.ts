import type { Context } from "hono";
import * as todoModel from "../models/todo.model.ts";

type createTodoBody = {
    title: string;
    userId: number;
};

const createTodo = async (c: Context) => {
    try {
        const body = await c.req.json<createTodoBody>();
        if (!body.title || !body.userId)
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        const newTodo = await todoModel.createTodo(body.title, body.userId);
        return c.json({
            success: true,
            data: newTodo,
            msg: "Created new Todo!",
        });
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}
const getTodo = async (c: Context) => {
    try {
        const id = Number (c.req.param("id"));
        const todo = await todoModel.getTodo(id);
        return c.json(todo, 200);
    }
    catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}
const completeTodo = async (c: Context) => {
    
    try {
        const id = Number (c.req.param("id"));
        const todo = await todoModel.completeTodo(id);
        return c.json(todo, 200);
    }
    catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}
const updateTitle = async (c: Context) => {
    try {
        const id = Number (c.req.param("id"));
        const body = await c.req.json<createTodoBody>();
        if (!body.title)
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        const todo = await todoModel.updateTitle(id, body.title);
        return c.json(todo, 200);
    }
    catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}
export { createTodo , getTodo , completeTodo , updateTitle };