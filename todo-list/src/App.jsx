import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
function App() {
  const [task, setTask] = useState('');
  const [todo, setTodo] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState('');
  const handleEdit = (id) => {
    const itemToEdit = todo.find(item => item.id === id);
    setTask(itemToEdit.task);
    setEditId(id);
    setEditMode(true);

  }

  const removeTask = (id) => {
    setTodo(todo.filter(item => item.id !== id));
  };
  const changeState = (id) => {
    setTodo(todo.map((item) => item.id === id ? { ...item, completed: !item.completed } : item));
  }
  const addTask = (e) => {
    e.preventDefault();
    const trimmer = task.trim();

    if (trimmer !== '') {
      if (editMode) {
        setTodo(todo.map(item =>
          item.id === editId ? { ...item, task: trimmer } : item
        ));
        setTask('');
        setEditMode(false);
        setEditId('');
        toast.success("Task updated!");
      } else {
        setTodo([...todo, { id: Date.now(), task: trimmer, completed: false }]);
        setTask('');
        toast.success("Added an event!");
      }
    } else {
      toast.error("Enter valid task");
    }
  };

  return (
    <div>
      <ToastContainer />
      <form action="" onSubmit={addTask}>
        <input type="text" placeholder='Add new event' onChange={(e) => setTask(e.target.value)} value={task} />
        <button type="submit" style={{backgroundColor:!editMode?"green":"blue"}}>{!editMode ? "Add" : "Update"}</button>

      </form>
      {
        (todo.filter(item => !item.completed).length>0)?<>
        <hr />
        <h3>Pending Task</h3>
      <ol>
        {
          todo.map((item) => (!item.completed ? <li key={item.id}>{item.task}
            <button onClick={() => removeTask(item.id)}>X</button>
            <button onClick={() => changeState(item.id)}>Mark as completed</button>
            <button onClick={() => handleEdit(item.id)} >Edit</button></li> : null))
        }
      </ol>
        </>:null
      }
      
      
      {
      (todo.filter(item => item.completed).length>0) ?<>
      <hr />
      <h3>Completed Task</h3>
      <ol>
        {
          todo.map((item) => (item.completed ? <li key={item.id}>{item.task}
            <button onClick={() => removeTask(item.id)}>X</button>
            <button onClick={() => changeState(item.id)}>Mark as pending</button>
            <button onClick={() => handleEdit(item.id)} >Edit</button></li> : null))
        }

      </ol></>:null}
    </div>
  )
}

export default App
