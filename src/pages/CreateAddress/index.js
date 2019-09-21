import React, { memo, useState, useMemo } from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid';

import iota from 'api';

import Button from 'common/Form/Button';
import Dropdown from 'common/Form/Dropdown';

function CreateAddress({ seed, addresses }) {
  const [isLoading, setLoading] = useState(false);
  const [address, setAddress] = useState('');

  const getNewAddress = async () => {
    try {
      const address = await iota.getNewAddress(seed, { index: 0, total: 1 });

      setAddress(address);
      console.log('Your address is: ' + address);
      console.log('Paste this address into https://faucet.devnet.iota.org');
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    await getNewAddress();
    setLoading(false);
  };

  const renderDropdownAddresses = useMemo(() => {
    const handleSetSeed = address => {
      setAddress(address);
    };

    return <Dropdown onChange={handleSetSeed} items={addresses} placeholder="Select a seed" />;
  }, [addresses]);

  return (
    <>
      {renderDropdownAddresses}
      <Button text="Create new address" onClick={handleSubmit} disabled={isLoading} />
    </>
  );
}

export default memo(CreateAddress);
