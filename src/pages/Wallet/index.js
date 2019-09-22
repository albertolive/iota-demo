import React, { memo, lazy, Suspense, useState, useCallback, useMemo } from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid';

import { setItem, getItem } from 'utils/localStorage';

import Dropdown from 'common/Form/Dropdown';
import Loading from 'common/Loading';

const CreateSeed = lazy(() => import('pages/CreateSeed'));
const AccountInfo = lazy(() => import('components/AccountInfo'));

function Wallet() {
  const [seed, setSeed] = useState('');
  const [seeds, setSeeds] = useState(getItem('seeds') || []);

  const renderDropdownSeeds = useMemo(() => {
    const items = seeds.map(({ name }, i) => ({ value: `${name}-${i}`, label: name })) || [];
    const findSeedFromValue = value => seeds.find(({ name }, i) => `${name}-${i}` === value);
    const handleSetSeed = ({ value }) => {
      const { seed } = findSeedFromValue(value);

      setSeed(seed);
    };

    return <Dropdown onChange={handleSetSeed} items={items} placeholder="Select a seed" />;
  }, [seeds]);

  const onCreateSeed = useCallback(
    ({ name, seed }) => {
      const newSeeds = [...seeds, { name, seed }];

      setItem('seeds', newSeeds);
      setSeeds(newSeeds);
    },
    [seeds]
  );

  const renderCreateSeed = useMemo(() => <CreateSeed onCreateSeed={onCreateSeed} />, [onCreateSeed]);

  const renderAccountInfo = useMemo(() => (seed.length ? <AccountInfo seed={seed} /> : null), [seed]);

  return (
    <Grid fluid>
      <Row center="xs">{renderCreateSeed}</Row>
      <Row>
        <h1>Seed</h1>
      </Row>
      <Row>
        <Col xs>{renderDropdownSeeds}</Col>
      </Row>
      <Suspense fallback={<Loading />}>
        <Row>
          <Col xs>{renderAccountInfo}</Col>
        </Row>
      </Suspense>
    </Grid>
  );
}

export default memo(Wallet);
