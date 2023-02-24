import classes from './show-more-btn.module.scss';
import * as actions from '../../store/actions/actions-number-vis-ticket';
import React from 'react';
import { connect } from 'react-redux';

function onShowMore(oldValue, increaseNumber) {
  increaseNumber(oldValue + 5);
}

function ShowMoreBtn({ numberVisibleTickets, increaseNumber }) {
  return (
    <button
      type="button"
      className={classes['show-more-btn']}
      onClick={() => onShowMore(numberVisibleTickets, increaseNumber)}
    >
      Показать еще 5 билетов!
    </button>
  );
}

const mapStateToProps = ({ numberVisibleTickets }) => ({
  numberVisibleTickets,
});

export default connect(mapStateToProps, actions)(ShowMoreBtn);
