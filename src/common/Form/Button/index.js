import React, { memo } from 'react';

import { Container } from './styles';

function Button({ type = 'text', text, isSubmitting, onClick, size, disabled }) {
  return (
    <Container size={size} disabled={disabled}>
      <button type={text} disabled={isSubmitting || disabled} onClick={onClick}>
        {text}
      </button>
    </Container>
  );
}

export default memo(Button);
