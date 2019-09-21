import React, { memo, useEffect, useState } from 'react';

import iota from 'api';

import CreateAddress from 'pages/CreateAddress';

function AccountInfo({ seed = '' }) {
  const [accountInfo, setAccountInfo] = useState(null);

  useEffect(() => {
    const getAccountData = async () => {
      try {
        const response = await iota.getAccountData(seed);

        setAccountInfo(response);
      } catch (err) {
        console.log(err);
      }
    };

    getAccountData();

    return () => {
      setAccountInfo(null);
    };
  }, [seed]);

  if (accountInfo === null) return 'loading...';

  const { addresses = [] } = accountInfo;

  return <CreateAddress seed={seed} addresses={addresses} />;
}

export default memo(AccountInfo);
