import React from 'react';

import { Link } from '@reach/router';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <Link to="/">IOTA DEMO</Link>
    </Container>
  );
}

export default Header;
