import classes from './ticket-list.module.scss';
import Ticket from '../ticket/ticket';
import * as actions from '../../store/actions/actions-number-vis-ticket';
import ShowMoreBtn from '../show-more-btn';
import { NotFoundAlerts } from '../alerts/alerts';

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

function TicketList({ filterTickets, numberVisibleTickets, found, setNumber }) {
  const [ticketList, setTicketList] = useState([]);

  useEffect(() => {
    setNumber();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const number = numberVisibleTickets + 5;

    if (filterTickets.length) {
      setTicketList(filterTickets);
      const newArr = [];
      for (let i = 0; i < number; i++) {
        newArr.push(<Ticket key={uuidv4()} item={filterTickets[i]} />);
        setTicketList(newArr);
      }
    } else {
      setTicketList([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterTickets, numberVisibleTickets]);

  return (
    <>
      <ul className={classes.list}>{ticketList}</ul>
      {found ? (
        <div>
          <ShowMoreBtn />
        </div>
      ) : (
        <NotFoundAlerts />
      )}
    </>
  );
}

const mapStateToProps = ({ filterTickets, numberVisibleTickets, found }) => ({
  filterTickets,
  numberVisibleTickets,
  found,
});

export default connect(mapStateToProps, actions)(TicketList);
