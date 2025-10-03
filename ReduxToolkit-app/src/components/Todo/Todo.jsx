import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { addtodo } from '../../Slices/TodoSlice'

export default function Todo() {
  const dispatch = useDispatch();
  const {Todo,message}=useSelector((state)=>state.todo);
  return (
    <div>
      <div>
        {
          Todo.map((todo,index)=><p key={index}>{todo}</p>)
        }
      </div>
      {message}
      <button onClick={()=>{
        dispatch(addtodo("task-1"));
      }}>add</button>
    </div>
  )
}
