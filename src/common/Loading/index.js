import React, { memo } from 'react';

import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { Row } from 'react-flexbox-grid';

const effects = keyframes`
    0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
`;

const Container = styled('div')`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;

  div {
    position: absolute;
    border: 4px solid #06e89d;
    opacity: 1;
    border-radius: 50%;
    animation: ${effects} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  div:nth-child(2) {
    animation-delay: -0.5s;
  }
`;

function Loading() {
  return (
    <Row center="xs">
      <Container>
        <div />
        <div />
      </Container>
    </Row>
  );
}

export default memo(Loading);
