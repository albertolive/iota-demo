import styled from '@emotion/styled';

export const Container = styled('div')`
  position: relative;

  opacity: ${props => (props.disabled ? '0.8' : 1)};

  input {
    margin: 0;
    width: 98%;
    max-width: 100%;
    padding: 8px;
    outline: 0;
    text-align: left;
    background: #fff;
    border: 1px solid rgba(34, 36, 38, 0.15);
    color: rgba(0, 0, 0, 0.87);
    border-radius: 0.28571429rem;
    transition: border-color 0.1s ease, -webkit-box-shadow 0.1s ease;
    transition: box-shadow 0.1s ease, border-color 0.1s ease;
    transition: box-shadow 0.1s ease, border-color 0.1s ease, -webkit-box-shadow 0.1s ease;
    box-shadow: none;
  }

  span {
    position: absolute;
    right: 0;
    color: red;
    font-size: 12px;
    width: 100%;

    :first-letter {
      text-transform: capitalize;
    }
  }
`;

export const Label = styled('div')`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`;
