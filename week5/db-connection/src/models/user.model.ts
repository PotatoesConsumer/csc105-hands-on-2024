import { db } from "../index.ts";

const isDuplicate = async( firstName: string, lastName: string ) => {
    const user = await db.user.findFirst({
        where: {
            firstName: firstName,
            lastName: lastName,
        },
    });
    return user;
}

const createUser = async( firstName: string, lastName: string ) => {
    const user = await db.user.create({
        data: {
            firstName: firstName,
            lastName: lastName,
        },
    });
    return user;
}

const getAllUsers = async () => {
    
    const users = await db.user.findMany();
    return users;
}

const getAllTodos = async (id: number) => {
    const todos = await db.todo.findMany({
        where:{
            userId: id,
        },
    })
    return todos;
}

const editName = async (id: number, firstName: string, lastName: string) => {
    const user = await db.user.update({
        where:{
            id: id,
        },
        data:{
            firstName: firstName,
            lastName: lastName,
        },
    })
    return user;
}
export { isDuplicate, createUser, getAllUsers , getAllTodos , editName };