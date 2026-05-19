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
  
        return;
      }
  
      case "DELETE_TODO": {
        const { id } = action.payload;
  
        const index = state.findIndex(
          (item) => item.id === id
        );
  
        if (index !== -1) {
          state.splice(index, 1);
        }
  
        return;
      }
  
      case "TOGGLE_TODO": {
        const { id } = action.payload;
  
        const todo = state.find(
          (item) => item.id === id
        );
  
        if (todo) {
          todo.status = !todo.status;
        }
  
        return;
      }
  
      default:
        throw new Error("Invalid action type");
    }
  }


  