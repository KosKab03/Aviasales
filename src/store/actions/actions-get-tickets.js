import toggleLoading from './actions-loader';

const getTickets = async (dispatch) => {
  const array = [];
  try {
    dispatch(toggleLoading(true));
    const getSearchId = await fetch('https://aviasales-test-api.kata.academy/search');
    const searchIdObj = await getSearchId.json();
    const { searchId } = searchIdObj;

    const timer = setInterval(async () => {
      const resolve = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
      const result = await resolve.json();
      if (!result.tickets.length) {
        clearInterval(timer);
        dispatch(toggleLoading(false));
        dispatch({ type: 'GET_TICKETS', data: array });
      } else {
        array.push(...result.tickets);
      }
    }, 250);
  } catch (error) {
    console.log(error);
  }
};

export default getTickets;
