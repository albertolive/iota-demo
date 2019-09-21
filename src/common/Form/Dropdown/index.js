import React, { memo } from 'react';

import Dropdown from 'react-dropdown';

import { Container } from './styles';

function DropdownComponent({ placeholder = 'Select an option', items, onChange }) {
  return (
    <Container>
      <Dropdown options={items} onChange={onChange} placeholder={placeholder} />
    </Container>
  );
}

export default memo(DropdownComponent);
