import { useState } from "react";
import { useImmerReducer } from "use-immer";
import { todoReducer, initialState } from "./reducers/todoReducer";

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
    <div>
      <h1>Todo Application</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addTask}>
        Add Task
      </button>

      <h2>Task List</h2>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.status ? (
              <s>{todo.title}</s>
            ) : (
              todo.title
            )}{" "}

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
            />{" "}

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
    </div>
  );
}

export default App;
