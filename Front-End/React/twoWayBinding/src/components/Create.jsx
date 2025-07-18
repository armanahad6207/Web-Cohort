import React, { useState } from "react";
import { nanoid } from "nanoid";



function Create(props) {
    const task = props.task;
    const setTask = props.setTask;
const [title,setTitle] = useState("");


const changeHandler = (e)=>{
    e.preventDefault()
    setTask([...task,{id:nanoid(),title}])
    setTitle("")
}

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "60vh",
        background: "#f5f6fa",
      }}
    >
      <form
        onSubmit={changeHandler}
       
        style={{
          background: "#fff",
          padding: "2rem 2.5rem",
          borderRadius: "12px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem",
          minWidth: "320px",
        }}
      >
        <h2
          style={{
            margin: 0,
            color: "#222",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          Create Task
        </h2>
        <input
          onChange={e => setTitle(e.target.value)}
          type="text"
          value={title}
          placeholder="Enter Your Task...."
          style={{
            padding: "0.8rem 1rem",
            border: "1px solid #dcdde1",
            borderRadius: "6px",
            fontSize: "1rem",
            outline: "none",
            transition: "border 0.2s",
          }}
        />
        <button
        type="submit"
          style={{
            padding: "0.8rem",
            background: "#4f8cff",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontWeight: 600,
            fontSize: "1rem",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
        >
          Create Task
        </button>
      </form>
    </div>
  );
}

export default Create;
