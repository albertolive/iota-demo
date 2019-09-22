import styled from '@emotion/styled';

export const Container = styled('div')`
  .Dropdown-root {
    position: relative;
  }

  .Dropdown-control {
    position: relative;
    overflow: hidden;
    background-color: #fff;
    box-sizing: border-box;
    cursor: pointer;
    outline: none;
    padding: 8px 52px 8px 10px;
    margin: 0;
    outline: 0;
    text-align: left;
    border: 1px solid rgba(34, 36, 38, 0.15);
    color: rgba(0, 0, 0, 0.87);
    border-radius: 0.28571429rem;
    transition: border-color 0.1s ease, -webkit-box-shadow 0.1s ease;
    transition: box-shadow 0.1s ease, border-color 0.1s ease;
    transition: box-shadow 0.1s ease, border-color 0.1s ease, -webkit-box-shadow 0.1s ease;
    box-shadow: none;
  }

  .Dropdown-placeholder {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .Dropdown-menu {
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
    box-sizing: border-box;
    margin-top: -1px;
    max-height: 200px;
    overflow-y: auto;
    position: absolute;
    top: 100%;
    width: 100%;
    z-index: 1000;
    -webkit-overflow-scrolling: touch;
  }

  .Dropdown-option {
    text-align: left;
    box-sizing: border-box;
    color: rgba(51, 51, 51, 0.8);
    cursor: pointer;
    display: block;
    padding: 8px 10px;
  }

  .Dropdown-option:hover {
    background-color: rgb(6, 232, 157, 0.6);
    color: #333;
  }

  .Dropdown-option.is-selected {
    background-color: rgb(6, 232, 157, 0.6);
    color: #333;
  }

  .Dropdown-arrow {
    border-color: #999 transparent transparent;
    border-style: solid;
    border-width: 5px 5px 0;
    content: ' ';
    display: block;
    height: 0;
    margin-top: -ceil(2.5);
    position: absolute;
    right: 10px;
    top: 14px;
    width: 0;
  }

  .is-open .Dropdown-arrow {
    border-color: transparent transparent #999;
    border-width: 0 5px 5px;
  }
`;
