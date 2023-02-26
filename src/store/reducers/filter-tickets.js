const filterTickets = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FILTER_TICKETS':
      return action.payload;
    default:
      return state;
  }
};

export default filterTickets;
