import React, { memo, useState, useCallback, useMemo } from 'react';

import { setItem, getItem } from 'utils/localStorage';

import CreateSeed from 'pages/CreateSeed';
import AccountInfo from 'components/AccountInfo';

import Dropdown from 'common/Form/Dropdown';

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
    <>
      {renderCreateSeed}
      <h1>Seeds</h1>
      {renderDropdownSeeds}
      {renderAccountInfo}
    </>
  );
}

export default memo(Wallet);
