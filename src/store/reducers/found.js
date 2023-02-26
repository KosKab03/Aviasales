const found = (state = true, action) => {
  switch (action.type) {
    case 'FOUND':
      return action.payload;
    default:
      return state;
  }
};

export default found;
