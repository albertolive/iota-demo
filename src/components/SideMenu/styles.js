import styled from '@emotion/styled';

export const Container = styled('div')`
  display: flex;
  padding: 16px;
  background-color: rgb(59, 59, 60);
  font-weight: bold;
  position: sticky;
  left: 0;

  nav {
    display: flex;
    flex-direction: column;
    width: 80px;
  }

  a {
    color: #fff;
    margin-bottom: 16px;
  }
`;
