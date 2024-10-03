import styled from "styled-components";


export const ViewWrapper = styled.div`
  position: relative;
  padding: 8px 0;

  .scroll {
    overflow: hidden;

    .scroll-content {
    display: flex;
    transition: transform 250ms ease;
  }
  }

  .control {
    position: absolute;
    top: 28%;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border: 1px solid #f2f2f2;
    border-radius: 50%;
    text-align: center;
    border-width: 2px;
    background: #fff;
    ${props => props.theme.mixin.shadowBox}

    &.left {
      left: -25px;
      top: 50%;
      transform: translate(50%, -50%);
    }

    &.right {
      right: 0;
      top: 50%;
      transform: translate(50%, -50%);
    }
  }
`