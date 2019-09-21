import React from 'react';

import NavLink from 'common/NavLink';

import { Container } from './styles';

function SideMenu() {
  return (
    <Container>
      <nav>
        <NavLink to="node-info" text="Node info" />
        <NavLink to="wallet" text="Wallet" />
        <NavLink to="seed" text="Seed" />
        <NavLink to="address" text="Address" />
      </nav>
    </Container>
  );
}

export default SideMenu;
