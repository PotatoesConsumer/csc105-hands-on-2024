import { Axios } from "../axiosInstance.ts";

const getTodo = async () => {
    try {
      const response = await Axios.get("/todo"); // Your todo api path of getting todo
      return {
        success: true,
        data: response.data
      }
    } catch (e) {
      console.log(e);
      return {
        success: false,
        data: null
      }
    }
  }

  const addTodo = async (name: string) => {
    try {
      await Axios.post("/todo", {name: name}); // Your todo api path of getting todo
    } catch (e) {
      console.log(e);
      return {
        success: false,
        data: null
      }
    }
  }

  const editTodo = async (id: number, name: string) => {
    try {
      await Axios.patch("/todo", {id: id, name: name}); // Your todo api path of getting todo
    } catch (e) {
      console.log(e);
      return {
        success: false,
        data: null
      }
    }
  }

  const completeTodo = async (id: number) => {
    try {
      await Axios.patch("/todo/complete", {id: id}); // Your todo api path of getting todo
    } catch (e) {
      console.log(e);
      return {
        success: false,
        data: null
      }
    }
  }

  const deleteTodo = async (id : number) => {
    try {
      await Axios.delete(`/todo/${id}`); // Your todo api path of getting todo
    } catch (e) {
      console.log(e);
      return {
        success: false,
        data: null
      }
    }
  }

  export { getTodo, addTodo, deleteTodo, completeTodo, editTodo }
  