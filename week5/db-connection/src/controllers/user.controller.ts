import type { Context } from "hono";
import * as userModel from "../models/user.model.ts";

type createUserBody = {
	firstName: string;
	lastName: string;
};
const createUser = async (c: Context) => {
	try {
		const body = await c.req.json<createUserBody>();
		if (!body.firstName || !body.lastName)
			return c.json(
				{
					success: false,
					data: null,
					msg: "Missing required fields",
				},
				400
			);
		if (await userModel.isDuplicate(body.firstName, body.lastName)) {
			return c.json({
				success: false,
				data: null,
				msg: "firstName or lastName is duplicated",
			});
		}
		const newUser = await userModel.createUser(
			body.firstName,
			body.lastName
		);
		return c.json({
			success: true,
			data: newUser,
			msg: "Created new User!",
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
};

const getAllUsers = async (c: Context) => {
    try {
        const users = await userModel.getAllUsers();
        return c.json(users, 200);
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

const getAllTodos = async (c: Context) => {
    try {
        const id = Number (c.req.param("id"));
        const todos = await userModel.getAllTodos(id);
        return c.json(todos, 200);
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

const editName = async (c: Context) => {
    const id = Number (c.req.param("id"));
    const body = await c.req.json<createUserBody>();
    try {
        if (!body.firstName || !body.lastName)
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
    }catch(e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
    const user = await userModel.editName(id, body.firstName, body.lastName);
    return c.json(user, 200);
}
export { createUser , getAllUsers , getAllTodos , editName };