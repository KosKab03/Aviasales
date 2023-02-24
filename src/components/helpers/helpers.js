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
  def() {},
};

export const { ticketDataConversion } = helpers;
export const { def } = helpers;
