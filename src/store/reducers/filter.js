const arrFilter = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];

const filter = (state = arrFilter, action) => {
  switch (action.type) {
    case 'TOGGLE_FILTER':
      return action.payload;
    case 'ADD_ALL_FILTER':
      return ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];
    case 'DELETE_ALL_FILTER':
      return [];
    default:
      return state;
  }
};

export default filter;
