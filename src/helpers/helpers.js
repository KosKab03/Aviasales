import { format } from 'date-fns';

const helpers = {
  ticketDataConversion(array) {
    return array.map((item) => {
      const newItem = { ...item };

      const departure = format(new Date(newItem.date), 'kk:mm');
      const arrival = format(new Date(new Date(item.date).getTime() + newItem.duration * 60 * 1000), 'kk:mm');
      newItem.date = `${departure} - ${arrival}`;

      const hours = Math.floor((newItem.duration / 60) % 24);
      const minutes = Math.floor(newItem.duration % 60);
      newItem.duration = `${hours}ч ${minutes}м`;

      newItem.cityStops = newItem.stops.join(', ');
      newItem.stops = newItem.stops.length;
      return newItem;
    });
  },

  filterTickets(array, filter) {
    const oldArray = [...array];
    let newArray = [];

    filter.forEach((item) => {
      switch (item) {
        case 'Без пересадок':
          newArray.push(...oldArray.filter((el) => el.segments[0].stops.length === 0));
          break;
        case '1 пересадка':
          newArray.push(...oldArray.filter((el) => el.segments[0].stops.length === 1));
          break;
        case '2 пересадки':
          newArray.push(...oldArray.filter((el) => el.segments[0].stops.length === 2));
          break;
        case '3 пересадки':
          newArray.push(...oldArray.filter((el) => el.segments[0].stops.length === 3));
          break;
        default:
          newArray = oldArray;
          break;
      }
    });
    return newArray;
  },

  sortingTickets(array, action) {
    const oldArray = [...array];
    let newArray = [];

    switch (action) {
      case 'cheap':
        newArray = oldArray.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case 'fast':
        newArray = oldArray.sort((a, b) => parseFloat(a.segments[0].duration) - parseFloat(b.segments[0].duration));
        break;
      default:
        newArray = oldArray;
    }
    return newArray;
  },
};

export const { ticketDataConversion } = helpers;
export const { filterTickets } = helpers;
export const { sortingTickets } = helpers;
