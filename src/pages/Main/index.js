import React, { Suspense, lazy } from 'react';

import { Router } from '@reach/router';

import { Container, Content } from './styles';

const Header = lazy(() => import('components/Header'));
const SideMenu = lazy(() => import('components/SideMenu'));
const NodeInfo = lazy(() => import('pages/NodeInfo'));
const Wallet = lazy(() => import('pages/Wallet'));
const CreateSeed = lazy(() => import('pages/CreateSeed'));
const CreateAddress = lazy(() => import('pages/CreateAddress'));

function Main() {
  return (
    <Suspense fallback={<div />}>
      <Header />
      <Container>
        <SideMenu />
        <Content>
          <Suspense fallback={<div />}>
            <Router>
              <NodeInfo path="/node-info" />
              <Wallet path="/wallet" />
              <CreateSeed path="/seed" />
              <CreateAddress path="/address" />
            </Router>
          </Suspense>
        </Content>
      </Container>
    </Suspense>
  );
}

export default Main;
