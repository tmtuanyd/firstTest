export const initialState = {
  state1: false,
};

export const Reducer1 = (state = initialState, action) => {
  switch (action.type) {
    case "SUCCESS":
      return { ...state, state1: true };
    case "FAILURE":
      return {
        ...state,
        state1: false,
      };
    default:
      return state;
  }
};
