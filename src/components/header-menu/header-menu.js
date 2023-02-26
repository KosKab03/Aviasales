import { sortingTickets } from '../../helpers/helpers';
import { setNumber } from '../../store/actions/actions-number-vis-ticket';
import * as actions from '../../store/actions/actions-filter';

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Radio } from 'antd';

function HeaderMenu({ filterTickets, addFilterTickets, setNum }) {
  return (
    <Radio.Group
      buttonStyle="solid"
      className="header-menu"
      size="large"
      onChange={(e) => {
        setNum();
        const newSortingTickets = sortingTickets(filterTickets, e.target.value);
        addFilterTickets(newSortingTickets);
      }}
    >
      <Radio.Button value="cheap">Самый дешевый</Radio.Button>
      <Radio.Button value="fast">Самый быстрый</Radio.Button>
      <Radio.Button value="optimal">Оптимальный</Radio.Button>
    </Radio.Group>
  );
}

const mapStateToProps = ({ filterTickets }) => ({ filterTickets });

const mapDispatchToProps = (dispatch) => ({
  setNum: () => dispatch(setNumber()),
  ...bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);
