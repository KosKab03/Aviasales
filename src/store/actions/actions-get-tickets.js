import toggleLoading from './actions-loader';
import toggleError from './actions-errors';
import { addFilterTickets } from './actions-filter';

const getId = async (dispatch) => {
  let id;
  try {
    const getSearchId = await fetch('https://aviasales-test-api.kata.academy/search');
    const searchIdObj = await getSearchId.json();
    id = searchIdObj.searchId;
  } catch (error) {
    dispatch(toggleError(true, error.message));
  }
  return id;
};

const getTickets = async (dispatch) => {
  const array = [];

  dispatch(toggleError(false));
  dispatch(toggleLoading(true));
  const searchId = await getId(dispatch);

  const timer = setInterval(async () => {
    try {
      const resolve = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);

      const result = await resolve.json();
      if (!result.tickets.length) {
        clearInterval(timer);
      } else {
        array.push(...result.tickets);
        dispatch(toggleLoading(false));
        if (array.length <= 1000) {
          dispatch(addFilterTickets(array));
        }
        dispatch({ type: 'SET_TICKETS', data: array });
      }
    } catch (error) {
      if (error.message !== 'Unexpected end of JSON input') {
        clearInterval(timer);
        dispatch(toggleError(true));
      }
    }
  }, 250);
};

export default getTickets;
