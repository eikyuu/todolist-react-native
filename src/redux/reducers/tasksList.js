import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from "../actionsType";

const defaultState = [
  { id: 1, title: "nouvelle tache redecuder", completed: false },
];

export const tasksList = (state = defaultState, action) => {
  // action = {type: NOM_ACTION, payload}
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case TOGGLE_TASK:
      return state.map((task) => {
        if (task.id === action.payload.id) {
          task.completed = !task.completed;
        }
        return task;
      });
    case DELETE_TASK: {
      let newState = [];
      const myIndex = state.findIndex((task) => task.id === action.payload.id);
      newState = state.filter((task, index) => index !== myIndex);
      return newState;
    }
    default:
      return state;
  }
};
