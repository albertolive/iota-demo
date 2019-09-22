import React from 'react';

import NavLink from 'common/NavLink';

import { Container } from './styles';

function SideMenu() {
  return (
    <Container>
      <nav>
        <NavLink to="node-info" text="Node info" />
        <NavLink to="wallet" text="Wallet" />
      </nav>
    </Container>
  );
}

export default SideMenu;
