import React, { useState } from 'react'
import { nanoid } from 'nanoid'

function App() {
  const  [task,setTask] =useState([{
    id:nanoid(),title:"wake up morning 5am", iscompleted:false 
  }]) 

 const  [title,setTitle] = useState(" ")
 const [completed,setCompleted]= useState(false)
 


const changeHandler = (e) => {
  e.preventDefault();
  setTask([...task, { id: nanoid(), title: title, iscompleted: completed }]);
  setTitle(""); // Clear text input
  setCompleted(false); // Uncheck checkbox
};

const showData = task.map((data) => (
  <li key={data.id}>
    title: {data.title} <br /> iscompleted: {data.iscompleted ? "✅" : "❌"}
  </li>
))

  return (
   <>
   <h1>Two Way Binding</h1> <br />
   <form onSubmit={changeHandler} >
    <input type="text" placeholder='tittel' onChange={(e)=>{setTimeout(()=>{setTitle(e.target.value)},2000)}} />
    <br />
     <br/>
    <input type="checkbox"  onChange={(e)=>{setCompleted(e.target.checked)}}  /> isCompleted <br /> <br />
    <button type='submit'>submit</button>
   </form>
   <br />
   <div>
    <ol>
      {showData}
    </ol>
    </div>
   </>
  )
}

export default App