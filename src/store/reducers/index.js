let initialState = {
  allTodos: [],
  activeTab: "all",
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      let newTodo = { text: action.todoText, isDone: false };
      return { ...state, allTodos: [...state.allTodos, newTodo] };
    default:
      return state;
  }
}
