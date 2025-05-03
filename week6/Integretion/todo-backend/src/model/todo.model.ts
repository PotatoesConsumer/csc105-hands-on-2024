import { db } from "../index.ts";

const GetTodo = () => {
  //TODO
  const todos = db.todo.findMany();
  return todos;
};

const AddTodo = (data : {name: string}) => {
  //TODO
  const todos = db.todo.create({
    data: {
      name: data.name,
      success: false,
    }
  })
  return todos
};

const EditTodo = (todoId: number, editTodoName: string) => {
  //TODO
  const todo = db.todo.update({
    where: {
      id: todoId,
    },
    data: {
      name: editTodoName,
    },
  });
  return todo;
};

const SuccessTodo = (todoId: number) => {
  //TODO
  const todo = db.todo.update({
    where: {
      id: todoId,
    },
    data: {
      success: true,
    },
  });
  return todo;
};

const DeleteTodo = (todoId: number) => {
  //TODO
  const todo = db.todo.delete({
    where: {
      id: todoId,
    },
  });
  return todo;
};

export { GetTodo, AddTodo, EditTodo, SuccessTodo, DeleteTodo };
