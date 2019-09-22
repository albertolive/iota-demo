import React, { memo, lazy, Suspense, useEffect, useState } from 'react';

import iota from 'api';

import Loading from 'common/Loading';

const CreateAddress = lazy(() => import('pages/CreateAddress'));

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

  if (accountInfo === null) return <Loading />;

  const { addresses = [] } = accountInfo;
  console.log(accountInfo);
  return (
    <Suspense fallback={<Loading />}>
      <CreateAddress seed={seed} addresses={addresses} />
    </Suspense>
  );
}

export default memo(AccountInfo);
