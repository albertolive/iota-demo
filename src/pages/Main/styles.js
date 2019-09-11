import styled from '@emotion/styled';

export const Container = styled('div')`
  display: flex;
  overflow-y: auto;
  height: calc(100vh - 50px);

  a {
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`;

export const Content = styled('div')`
  position: sticky;
  width: 100%;
  padding: 20px;
`;
