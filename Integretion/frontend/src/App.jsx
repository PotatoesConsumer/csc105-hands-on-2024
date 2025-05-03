import { use, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Axios } from './axiosInstance'
import * as api from './api/todo'

function App() {

  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");

 // Function backend
 // Test connection frontend and backend
  const testConnection = async () => {
      try {
          const data = await Axios.get('/');
          console.log(data.data);
      } catch (e) {
          console.log(`Error fetching backend server: ${e}`);
      }
  };

  useEffect(() => {
    testConnection();
  }, []);

  // getTodo
	const fetchTodoData = async () => {
		const data = await api.getTodo();
		if (data.success) {
			setTodos(data.data);
		}
	};

	useEffect(() => {
		fetchTodoData();
	}, []);

  // addTodo
  const AddTodo = async (name) => {
    await api.addTodo(name)
    fetchTodoData();
  }

  // deleteTodo
  const DeleteTodo = async (id) => {
    await api.deleteTodo(id)
  }

  // completeTodo
  const CompleteTodo = async (id) => {
    await api.completeTodo(id);
  }

  // completeTodo
  const EditTodo = async (id, name) => {
    await api.editTodo(id, name);
  }

  // Function frontend
  function editTodo(name, id) {
    setName(name);
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, edit: true} : todo
      )
    );
  }
  function confirmTodo(id) {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, name: name, edit: false } : todo
      )
    );
    EditTodo(id, name);
    setName("");
  }
  function removeTodo(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    DeleteTodo(id);
  }
  function createTodo() {
    let newTodo = {
      id: new Date(),
      name: name,
      success: false,
      edit: false,
    }
    setTodos((prev) => [...prev, newTodo]);
    AddTodo(newTodo.name);
  }

  function showTodo(id) {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, success: true } : todo
      )
    );
    CompleteTodo(id);
  }

  return (
    <div className='flex flex-col items-center h-screen bg-blue-100'>
      <div className='bg-white my-20 w-250 p-5 rounded-xl drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)]' value={name} onChange={(e) => setName(e.target.value)}>
        <div className='flex justify-center mt-5 mb-10'>
          <input id='input' type="text" className='border-1 w-75 mr-5 p-1' placeholder='Input'/>
          <button className='bg-black text-white py-2 px-5 rounded-xl cursor-pointer' onClick={createTodo}>Add</button>
        </div>
        <div className=''>
          {todos.map((todo) => {
            return (
              <div className='flex flex-row justify-evenly items-center mb-5'>
                <div className='flex flex-col items-center'>
                  {todo.edit && <input id='input' value={name} onChange={(e) => setName(e.target.value)} type="text" className='border-1 w-75 mr-5 p-1' placeholder='Input'/>}
                  {!todo.edit && <h1>{todo.name}</h1>}
                  <h1 className={todo.success == true ? "text-green-800" : "text-red-800"}>{todo.success == true ? "DONE" : "Not DONE"}</h1>
                </div>
                <div className=''>
                  {!todo.edit && <button onClick={() => editTodo(todo.name, todo.id)} className='bg-black text-white mr-5 py-1 px-3 rounded-lg cursor-pointer'>Edit</button>}
                  {todo.edit && <button onClick={() => confirmTodo(todo.id)} className='bg-black text-white mr-5 py-1 px-3 rounded-lg cursor-pointer'>Confirm</button>}
                  <button onClick={() => showTodo(todo.id)} className={`${todo.success ? `bg-green-700` : `bg-yellow-400`} text-white mr-5 py-1 px-3 rounded-lg cursor-pointer`}>{todo.success ? "Complete" : "Uncomplete"}</button>
                  <button onClick={() => removeTodo(todo.id)} className='bg-red-700 text-white mr-5 py-1 px-3 rounded-lg cursor-pointer'>Delete</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
