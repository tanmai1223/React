import React from 'react';

function List({ todo, handleDelete, handleCheck }) {
  return (
    
    <table>
      <h4 style={{paddingLeft:"18rem"}}>My To-Do List</h4>
      <tbody>
        {todo.map((item, index) => (
          <tr key={index}>
            <td>
              <h2 className="content" >
                {item.text}
              </h2>
            </td>
            <td>
              <button
                onClick={() => handleDelete(index)}
                style={{fontSize:"1.3rem",border:"None",backgroundColor:"None"}}
              >
                ❌ 
              </button>
            </td>
            <td>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(index)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default List;
