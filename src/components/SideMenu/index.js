import React from 'react';

import NavLink from 'common/NavLink';

import { Container } from './styles';

function SideMenu() {
  return (
    <Container>
      <nav>
        <NavLink to="node-info" text="Node info" />
        <NavLink to="create-address" text="Create address" />
      </nav>
    </Container>
  );
}

export default SideMenu;
