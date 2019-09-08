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
  display: flex;
  position: sticky;
  padding: 20px;
  flex: 1;

  div[role='group'][tabindex] {
    display: flex;
    flex-grow: 1;
  }
`;
