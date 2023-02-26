import * as actionsFilter from '../../store/actions/actions-filter';
import { filterTickets } from '../../helpers/helpers';
import { setNumber } from '../../store/actions/actions-number-vis-ticket';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Checkbox } from 'antd';
import { bindActionCreators } from 'redux';

import './sidebar-menu.scss';

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];

function SidebarMenu({ filter, tickets, toggle, addAll, delAll, addFilterTickets, found, setNum }) {
  const [checkedList, setCheckedList] = useState(plainOptions);
  const [stateCheckAll, setStateCheckAll] = useState(true);

  useEffect(() => {
    setNum();
    found(true);
    if (!checkedList.length) found(false);

    const arr = filterTickets(tickets, checkedList);
    addFilterTickets(arr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedList]);

  function onCheckAll(e) {
    if (checkedList.length >= 0 && e.target.checked) {
      setCheckedList(plainOptions);
      addAll();
      setStateCheckAll(true);
    } else {
      setCheckedList([]);
      found(false);
      delAll();
      setStateCheckAll(false);
    }
  }

  function onCheckedList(e) {
    setCheckedList(e);
    toggle(e);
    setStateCheckAll(false);
    if (e.length === 4) setStateCheckAll(true);
  }

  return (
    <div className="sidebar-menu">
      <h2>Количество пересадок</h2>
      <Checkbox
        checked={stateCheckAll}
        onChange={(e) => {
          onCheckAll(e);
        }}
      >
        Все
      </Checkbox>
      <CheckboxGroup
        className="sidebar_checbox-group"
        options={plainOptions}
        value={filter}
        onChange={(e) => {
          onCheckedList(e);
        }}
      />
    </div>
  );
}

const mapStateToProps = ({ filter, tickets }) => ({
  filter,
  tickets,
});

const mapDispatchToProps = (dispatch) => ({
  setNum: () => dispatch(setNumber()),
  ...bindActionCreators(actionsFilter, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarMenu);
