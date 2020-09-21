import { ADD_TODO, CHANGE_TODO, COMPLETE_TODO, DELETE_TODO } from './action';

function reducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    case DELETE_TODO:
      return state.filter((_, i2) => i2 !== action.index);
    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: action.completed,
        }),
        ...state.slice(action.index + 1),
      ];
    case CHANGE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          text: action.text,
        }),
        ...state.slice(action.index + 1),
      ];
    default:
      return state;
  }
}

export default reducer;
