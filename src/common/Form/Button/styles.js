import styled from '@emotion/styled';

export const Container = styled('div')`
  button {
    cursor: pointer;
    display: inline-block;
    min-height: 1em;
    outline: 0;
    border: none;
    vertical-align: baseline;
    padding: 12px;
    text-transform: none;
    text-shadow: none;
    font-weight: 700;
    font-style: normal;
    text-align: center;
    text-decoration: none;
    border-radius: 0.28571429rem;
    box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34, 36, 38, 0.15) inset;
    user-select: none;
    transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, background 0.1s ease,
      -webkit-box-shadow 0.1s ease;
    transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, box-shadow 0.1s ease,
      background 0.1s ease;
    transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, box-shadow 0.1s ease,
      background 0.1s ease, -webkit-box-shadow 0.1s ease;
    will-change: '';
    background-color: #06e89d;
    background-image: linear-gradient(45deg, #06e89d 0%, #10c0b2 100%);
    background-image: -webkit-linear-gradient(45deg, #06e89d 0%, #10c0b2 100%);
    color: #fff;
    font-size: ${props => (props.size === 'big' ? '1.28571429rem' : '1rem')};

    &:hover {
      opacity: 0.8;
    }
  }
`;
