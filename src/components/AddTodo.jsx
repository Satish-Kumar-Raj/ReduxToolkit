import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { addTodo } from '../features/todo/todoSlice'
function AddTodo() {
    const [input,setInput]=useState('')
    const data=useSelector(state=>state.todos)
    // console.log(data)
    const dispatch=useDispatch()
    const addTodoHandler=(e)=>{
      e.preventDefault()

      if(input.length>0){
       
        dispatch(addTodo(input))

      }else{
        alert('Kuch add karo')
        return
      }
      
    
      setInput('')
    }
  return (
    <div className=''>
        <form className='mt-12  flex items-center justify-center flex-col w-[90%] md:flex-row  gap-5' onSubmit={addTodoHandler}>
            <input type='text'
            className='px-5 py-3 text-2xl outline-none md:w-[50vw] w-[80vw] rounded-md'
            value={input} onChange={(e)=>setInput(e.target.value)} 
            placeholder='Enter todos'
            />
            <button className='px-5 py-3 border-none transition-all w-[20vw] md:[50%] duration-150 hover:bg-orange-400 text-xl hover:text-white rounded-md'>Add Todo</button>
        </form>
    </div>
  )
}

export default AddTodo