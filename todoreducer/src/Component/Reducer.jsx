import React, { useReducer } from "react";

function Reducer() {
  const initialState = {
    todo: "",
    todos: [],
    isEditing: false,
    editIndex: null,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "ADD":
        return { ...state, todo: action.payload };

      case "LIST":
        if (action.payload.trim() !== "") {
          return {
            ...state,
            todos: [...state.todos, action.payload],
            todo: "",
          };
        }
        return state;

      case "DELETE":
        return {
          ...state,
          todos: state.todos.filter((item) => item !== action.payload),
        };

      case "EDIT":
        return {
          ...state,
          todo: state.todos[action.payload],
          isEditing: true,
          editIndex: action.payload,
        };

      case "UPDATE":
        if (state.todo.trim() === "") return state;
        const updated = [...state.todos];
        updated[state.editIndex] = state.todo;
        return {
          ...state,
          todos: updated,
          todo: "",
          isEditing: false,
          editIndex: null,
        };

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <form
        className="single-input-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (state.isEditing) {
            dispatch({ type: "UPDATE" });
          } else {
            dispatch({ type: "LIST", payload: state.todo });
          }
        }}
      >
        <input
          type="text"
          id="todo"
          name="todo"
          value={state.todo}
          onChange={(e) => {
            dispatch({ type: "ADD", payload: e.target.value });
          }}
          placeholder="Type Something"
        />
        <button type="submit">{state.isEditing?"Update":"Submit"}</button>
      </form>
      <ul className="task-list">
        {state.todos.map((todo, index) => (
          <li key={index} className="task-item">
            <span className="task-text">{todo}</span>
            <div className="task-buttons">
              <button
                className="edit-btn"
                onClick={() => {
                  dispatch({ type: "EDIT", payload: index });
                }}
              >
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => {
                  dispatch({ type: "DELETE", payload: todo });
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

export default Reducer;
