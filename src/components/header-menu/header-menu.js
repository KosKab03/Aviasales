import * as actionsSorting from '../../store/actions/actions-sorting';

import React from 'react';
import { connect } from 'react-redux';

import { Radio } from 'antd';

function HeaderMenu({ toggle }) {
  return (
    <Radio.Group
      defaultValue="cheap"
      buttonStyle="solid"
      className="header-menu"
      size="large"
      onChange={(e) => {
        toggle(e.target.value);
      }}
    >
      <Radio.Button value="cheap">Самый дешевый</Radio.Button>
      <Radio.Button value="fast">Самый быстрый</Radio.Button>
      <Radio.Button value="optimal">Оптимальный</Radio.Button>
    </Radio.Group>
  );
}

export default connect(null, actionsSorting)(HeaderMenu);
