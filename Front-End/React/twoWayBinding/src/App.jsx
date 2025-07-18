import React from 'react'
import Create from './components/Create'
import {nanoid} from 'nanoid'
import { useState } from 'react'
import Read from './components/Read'

function App() {
  const [task,setTask] = useState([
    {id:nanoid(),title:"kuch to karo dang ka"}
  ])
  console.log(task)
  return (
    <div style={{display:"flex",gap:"20px"}}>
    <Create  task = {task} setTask = {setTask}/>
    <Read  task = {task} setTask = {setTask} />
    </div >
  )
}

export default App