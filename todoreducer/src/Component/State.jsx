import React,{ useState } from 'react'

function State() {
    const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEditing, setEditing] = useState(false);
  const [editIndex,setIndex]=useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updated=[...todos]
      updated[editIndex]=todo
      setTodos(updated)
      setEditing(false)
      setIndex(null)
      setTodo("")

    } else {
      if (todo.trim() === "") return;
      setTodos((prev) => [...prev, todo]);
      setTodo("");
    }
  };

  const handleDelete = (todo) => {
    setTodos((prev) => prev.filter((item) => item !== todo));
  };

  return (
    <div>
      <form className="single-input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="todo"
          name="todo"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          placeholder="Type Something"
        />
        <button type="submit">{isEditing?"Update":"Submit"}</button>
      </form>
      <ul className="task-list">
        {todos.map((todo, index) => (
          <li key={index} className="task-item">
            <span className="task-text">{todo}</span>
            <div className="task-buttons">
              <button className="edit-btn" onClick={()=>{setEditing(true);setTodo(todo);setIndex(index)}}>Edit</button>
              <button
                className="delete-btn"
                onClick={() => {
                  handleDelete(todo);
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
  
}

export default State
