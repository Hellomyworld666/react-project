import styled from "styled-components";

export const TabsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${props => props.theme.isAlpha ? "#fff": "#222"};

  .item {
    position: relative;
    width: 100px;
    height: 30px;
    margin: 10px 16px;
    font-size: 16px;
    cursor: pointer;

    &.active .bottom {
      position: absolute;
      top: 23px;
      left: 0;
      width: 64px;
      height: 2px;
      background-color: ${props => props.theme.isAlpha ? "#fff": "#333"};
    }
  }
`