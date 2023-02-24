import * as actionsFilter from '../../store/actions/actions-filter';

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Checkbox } from 'antd';

import './sidebar-menu.scss';

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];

function SidebarMenu({ filters, toggle, addAll, delAll }) {
  const [checkedList, setCheckedList] = useState([]);
  const [stateCheckAll, setStateCheckAll] = useState(false);

  function onCheckAll(e) {
    if (checkedList.length >= 0 && e.target.checked) {
      setCheckedList(['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']);
      addAll();
      setStateCheckAll(true);
    } else {
      setCheckedList([]);
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
        value={filters}
        onChange={(e) => {
          onCheckedList(e);
        }}
      />
    </div>
  );
}

const mapStateToProps = ({ filters }) => ({
  filters,
});

export default connect(mapStateToProps, actionsFilter)(SidebarMenu);
