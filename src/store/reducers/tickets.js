const tickets = (state = [], action) => {
  switch (action.type) {
    case 'SET_TICKETS':
      return action.data;
    default:
      return state;
  }
};

export default tickets;
