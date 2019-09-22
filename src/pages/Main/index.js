import React, { Suspense, lazy, memo } from 'react';

import { Router } from '@reach/router';

import Loading from 'common/Loading';

import { Container, Content } from './styles';

const Header = lazy(() => import('components/Header'));
const SideMenu = lazy(() => import('components/SideMenu'));
const NodeInfo = lazy(() => import('pages/NodeInfo'));
const Wallet = lazy(() => import('pages/Wallet'));

function Main() {
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <Container>
        <SideMenu />
        <Content>
          <Suspense fallback={<Loading />}>
            <Router>
              <NodeInfo path="/node-info" />
              <Wallet path="/wallet" />
            </Router>
          </Suspense>
        </Content>
      </Container>
    </Suspense>
  );
}

export default memo(Main);
