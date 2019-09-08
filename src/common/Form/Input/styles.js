import styled from '@emotion/styled';

export const Container = styled('div')`
  position: relative;

  input {
    margin: 0;
    width: 98%;
    max-width: 100%;
    padding: 1%;
    flex: 1 0 auto;
    outline: 0;
    text-align: left;
    line-height: 1.21428571em;
    background: #fff;
    border: 1px solid rgba(34, 36, 38, 0.15);
    color: rgba(0, 0, 0, 0.87);
    border-radius: 0.28571429rem;
    transition: border-color 0.1s ease, -webkit-box-shadow 0.1s ease;
    transition: box-shadow 0.1s ease, border-color 0.1s ease;
    transition: box-shadow 0.1s ease, border-color 0.1s ease, -webkit-box-shadow 0.1s ease;
    box-shadow: none;
    margin-bottom: 16px;
  }

  span {
    position: absolute;
    bottom: 0;
    right: 0;
    color: red;
    font-size: 12px;
  }
`;
