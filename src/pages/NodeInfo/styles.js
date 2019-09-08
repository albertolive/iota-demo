import styled from '@emotion/styled';

export const Container = styled('div')`
  display: flex;

  table {
    table-layout: fixed;
  }

  td {
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
  }
`;
