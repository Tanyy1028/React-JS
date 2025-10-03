import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { addtodo } from '../../Slices/TodoSlice'

export default function Todo() {
  const dispatch = useDispatch();
  const {todos,message}=useSelector((state)=>state.todos);
  return (
    <div>
      <div>
        {
          todos.map((todo,index)=><p key={index}>{todo}</p>)
        }
      </div>
      {message}
      <button onClick={() => dispatch(addtodo("task-1"))}>add</button>
    </div>
  )
}
