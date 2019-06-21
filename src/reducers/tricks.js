// Tricks Reducer

const tricksReducerDefaultState = [];

export default (state = tricksReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_TRICK':
      return [
        ...state,
        action.trick
      ];
    case 'REMOVE_TRICK':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_TRICK':
      return state.map((trick) => {
        if (trick.id === action.id) {
          return {
            ...trick,
            ...action.updates
          };
        } else {
          return trick;
        };
      });
    case 'SET_TRICKS':
      return action.tricks;
    default:
      return state;
  }
};
