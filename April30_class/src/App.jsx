
import { useState } from "react";
import { useImmerReducer } from "use-immer";
import {
  todoReducer,
  initialState,
} from "./reducers/todoReducer";

function App() {
  const [todos, dispatch] = useImmerReducer(
    todoReducer,
    initialState
  );

  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;

    dispatch({
      type: "ADD_TODO",
      payload: {
        id: Date.now(),
        title: input,
      },
    });

    setInput("");
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        fontFamily: "Arial",
      }}
    >
      <h1>Todo Application</h1>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Enter a task"
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          style={{
            flex: 1,
            padding: "10px",
          }}
        />

        <button onClick={addTask}>
          Add Task
        </button>
      </div>

      <h2>Task List</h2>

      {todos.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <ul
          style={{
            listStyle: "none",
            padding: 0,
          }}
        >
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "10px",
              }}
            >
              <input
                type="checkbox"
                checked={todo.status}
                onChange={() =>
                  dispatch({
                    type: "TOGGLE_TODO",
                    payload: {
                      id: todo.id,
                    },
                  })
                }
              />

              <span
                style={{
                  textDecoration: todo.status
                    ? "line-through"
                    : "none",
                  flex: 1,
                }}
              >
                {todo.title}
              </span>

              <button
                onClick={() =>
                  dispatch({
                    type: "DELETE_TODO",
                    payload: {
                      id: todo.id,
                    },
                  })
                }
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;



