const error = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_ERROR':
      return action.payload;
    default:
      return state;
  }
};

export default error;
