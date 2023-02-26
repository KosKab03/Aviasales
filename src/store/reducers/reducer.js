const defaultState = {
  // filters: ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'],
  tickets: [],
  filterTickets: [],
  numberVisibleTickets: 0,
  found: true,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    // case 'TOGGLE_FILTER':
    //   return { ...state, filters: action.payload };
    // case 'ADD_ALL_FILTER':
    //   return { ...state, filters: ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'] };
    // case 'DELETE_ALL_FILTER':
    //   return { ...state, filters: [] };
    // case 'ADD_FILTER_TICKETS':
    //   return { ...state, filterTickets: action.payload };
    // case 'FOUND':
    //   return { ...state, found: action.payload };
    // case 'SET_TICKETS':
    //   return { ...state, tickets: action.data };
    // case 'SET_NUMBER':
    //   return { ...state, numberVisibleTickets: 0 };
    // case 'INCREASE_NUMBER':
    //   return { ...state, numberVisibleTickets: action.payload };
    // case 'TOGGLE_LOADING':
    //   return { ...state, loading: action.payload };
    // case 'TOGGLE_ERROR':
    //   return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
