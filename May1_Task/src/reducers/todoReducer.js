export const initialState = [
    {
      id: 1,
      title: "Learn React",
      status: false,
    },
  ];
  
  export function todoReducer(state, action) {
    switch (action.type) {
      case "ADD_TODO": {
        const { id, title } = action.payload;
  
        state.push({
          id,
          title,
          status: false,
        });
  
        break;
      }
  
      case "DELETE_TODO": {
        const { id } = action.payload;
  
        return state.filter(
          (item) => item.id !== id
        );
      }
  
      case "TOGGLE_TODO": {
        const { id } = action.payload;
  
        const todo = state.find(
          (item) => item.id === id
        );
  
        if (todo) {
          todo.status = !todo.status;
        }
  
        break;
      }
  
      default:
        throw new Error(
          "Invalid action type"
        );
    }
  }
  