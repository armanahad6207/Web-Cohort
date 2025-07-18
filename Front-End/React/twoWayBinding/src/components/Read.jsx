import React from 'react'

function Read(props) {
   const showTask = props.task;
   const setTask = props.setTask;
   const deleteHandlere = (id) => {
     const showData1 = showTask.filter((data)=>data.id !=id)
    setTask(showData1)
   };

return (
    <div style={{ maxWidth: "400px", margin: "2rem auto", background: "#fff", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", padding: "2rem" }}>
        <h2 style={{ textAlign: "center", color: "#333", marginBottom: "1.5rem" }}>Task List</h2>
        <ol style={{ paddingLeft: "1.5rem" }}>
            {showTask.length === 0 ? (
                <li style={{ color: "#aaa", fontStyle: "italic" }}>No tasks found.</li>
            ) : (
                showTask.map((data) => (
                    <div key={data.id} style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
                        <li
                            style={{
                                background: "#f5f5f5",
                                margin: "0",
                                padding: "0.75rem 1rem",
                                borderRadius: "5px",
                                color: "#222",
                                fontSize: "1.05rem",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                                flex: 1,
                                listStyle: "decimal inside"
                            }}
                        >
                            {data.title}
                        </li>
                        <button
                            style={{
                                marginLeft: "1rem",
                                background: "#ff4d4f",
                                color: "#fff",
                                border: "none",
                                borderRadius: "4px",
                                padding: "0.5rem 0.75rem",
                                cursor: "pointer"
                            }}
                           onClick={()=>{deleteHandlere(data.id)}}
                        >
                            Delete
                        </button>
                    </div>
                ))
            )}
        </ol>
    </div>
)
}

export default Read