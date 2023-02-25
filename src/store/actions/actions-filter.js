export const toggle = (array) => ({ type: 'TOGGLE_FILTER', payload: array });
export const addAll = () => ({ type: 'ADD_ALL_FILTER' });
export const delAll = () => ({ type: 'DELETE_ALL_FILTER' });

export const addFilterTickets = (array) => ({ type: 'ADD_FILTER_TICKETS', payload: array });
export const found = (status) => ({ type: 'FOUND', payload: status });
