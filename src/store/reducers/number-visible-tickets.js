const numberVisibleTickets = (state = 0, action) => {
  switch (action.type) {
    case 'SET_NUMBER':
      return 0;
    case 'INCREASE_NUMBER':
      return action.payload;
    default:
      return state;
  }
};

export default numberVisibleTickets;
