import React, { useReducer } from "react";

const initialState = {
  step: 1,
  formData: {
    userName: "",
    city: "",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_INPUT":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.name]: action.payload.value,
        },
      };
    case "GO_NEXT":
      return { ...state, step: state.step + 1 };
    case "GO_BACK":
      return { ...state, step: state.step - 1 };
    default:
      return state;
  }
}

function App() {
  // Initialize useReducer here
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Step {state.step} of 2</h2>

      {state.step === 1 && (
        <div>
          <label>User Name: </label>
          <input
            type="text"
            name="userName" // Added name attribute
            value={state.formData.userName}
            onChange={handleChange}
          />
          <button onClick={() => dispatch({ type: "GO_NEXT" })}>Next</button>
        </div>
      )}

      {state.step === 2 && (
        <div>
          <label>City: </label>
          <input
            type="text"
            name="city"
            value={state.formData.city}
            onChange={handleChange}
          />
          <button onClick={() => dispatch({ type: "GO_BACK" })}>Back</button>
          <button onClick={() => console.log("Final Data: ", state.formData)}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default App;