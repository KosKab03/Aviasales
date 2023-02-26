import error from './error';
import filter from './filter';
import loading from './loading';
import tickets from './tickets';
import numberVisibleTickets from './number-visible-tickets';
import filterTickets from './filter-tickets';
import found from './found';

import { combineReducers } from 'redux';

export default combineReducers({
  error,
  filter,
  loading,
  tickets,
  numberVisibleTickets,
  filterTickets,
  found,
});

// import reducer from './reducer';

// export default reducer;
