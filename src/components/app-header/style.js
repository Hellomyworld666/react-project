import styled from "styled-components"


export const HeaderWrapper = styled.div`
  border-bottom: 1px solid #eee;
  
  &.fixed {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
  }

  .content {
    position: relative;
    z-index: 99;
    background-color: ${props => props.theme.isAlpha ? "rgba(255, 255, 255, 0)": "rgba(255, 255, 255, 1)"};
    border-bottom: 1px solid #eee;
    border-bottom-color: ${props => props.theme.isAlpha ? "rgba(255, 255, 255, 0)": "rgba(255, 255, 255, 1)"};

    .top {
      display: flex;
      align-items: center;
      height: 80px;
    }
  }

  .cover {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .3);
  }

`

export const SearchAreaWrapaper = styled.div`
  transition: height 250ms ease;
  height: ${props => props.isSearch ? "100px": "0"};
`