import React, { useState } from 'react';
import List from './List';

function App() {
  const [newset, setNewSet] = useState([]);
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleList = (e) => {
    e.preventDefault();
    let errors=validate()
    if(errors){
      alert(errors)
      return;
    }
    
    if (input) {
      setNewSet([...newset, { text: input, checked: false }]);
      setInput('');
    }
  };

  const handleDelete = (index) => {
    setNewSet((prev) => {
      const updated = [...prev];
      updated.splice(index, 1);
      return updated;
    });
  };

  const handleCheck = (index) => {
    setNewSet((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  };
  const validate=()=>{
    if(input==''){
      return 'Enter to do event';
    }
    return ''
  }
  return (
    <div>
      <List todo={newset} handleDelete={handleDelete} handleCheck={handleCheck} />
      <form onSubmit={handleList}>
        <input
          type="text"
          placeholder="Add a new to do"
          value={input}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
