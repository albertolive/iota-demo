import React, { memo } from 'react';

import { Link } from '@reach/router';

function NavLink({ to, text }) {
  const getProps = ({ isCurrent }) => {
    return {
      style: {
        color: isCurrent && '#06e89d'
      }
    };
  };

  return (
    <Link to={to} getProps={getProps}>
      {text}
    </Link>
  );
}

export default memo(NavLink);
