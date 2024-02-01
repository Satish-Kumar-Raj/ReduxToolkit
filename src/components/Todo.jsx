import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
function Todo() {
    const todos=useSelector((state)=>state.todos)
    // console.log("todos",todos)
    const dispatch=useDispatch()

  return (
    <>
    <div className=' mt-10 text-3xl font-bold flex justify-center'>  Todos</div>
    {
        todos.map((todo)=>(
            <li key={todo.id} className='flex justify-between items-center md:w-[65vw] w-[80vw]   px-3 rounded-md bg-green-300 mt-5'>
                <span className='text-2xl text-black font-bold'>{todo.text}</span>
                <button onClick={()=>dispatch(removeTodo(todo.id))} className='bg-green-300 outline-none border-none text-2xl text-red-500 font-bold'>X</button>
            </li>
        ))
    }
    </>
  )
}

export default Todo