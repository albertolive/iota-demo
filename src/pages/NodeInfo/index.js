import React, { useEffect, useState } from 'react';

import iota from 'api';

import { Container } from './styles';

function NodeInfo() {
  const [nodeInfo, setNodeInfo] = useState({});

  const getNodeInfo = async () => {
    try {
      const response = await iota.getNodeInfo();

      setNodeInfo(response);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getNodeInfo();
  }, []);

  const renderElements = () =>
    Object.entries(nodeInfo).map(([key, value]) => (
      <tr key={key}>
        <td>
          <strong>{key}</strong>
        </td>
        <td>{value}</td>
      </tr>
    ));

  return (
    <Container>
      <table width="100%">
        <tbody>{renderElements()}</tbody>
      </table>
    </Container>
  );
}

export default NodeInfo;
