import classes from './ticket-list.module.scss';
import Ticket from '../ticket/ticket';
import * as actions from '../../store/actions/actions-number-vis-ticket';
import { v4 as uuidv4 } from 'uuid';

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

function TicketList({ tickets, numberVisibleTickets, setNumber }) {
  const [ticketList, setTicketList] = useState([]);

  useEffect(() => {
    setNumber();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const number = numberVisibleTickets + 5;
    if (tickets && numberVisibleTickets === ticketList.length) {
      const newArr = [...ticketList];
      for (let i = numberVisibleTickets; i < number; i++) {
        newArr.push(<Ticket key={uuidv4()} item={tickets[i]} />);
        setTicketList(newArr);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tickets, numberVisibleTickets]);

  return <ul className={classes.list}>{ticketList}</ul>;
}

const mapStateToProps = ({ tickets, numberVisibleTickets }) => ({
  tickets,
  numberVisibleTickets,
});

export default connect(mapStateToProps, actions)(TicketList);
