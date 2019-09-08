import React from 'react';

import { Container } from './styles';

function Button({ type = 'text', text, isSubmitting, onClick, size }) {
  return (
    <Container size={size}>
      <button type={text} disabled={isSubmitting} onClick={onClick}>
        {text}
      </button>
    </Container>
  );
}

export default Button;
