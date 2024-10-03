import styled from "styled-components";


export const FilterWrapper = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  z-index: 9;
  display: flex;
  align-items: center;
  margin: 8px;
  padding-bottom: 8px;
  height: 48px;
  border-bottom: 1px solid #f3f3f3;
  background-color: #fff;

  .filter {
    display: flex;

    .item {
    display: flex;
    flex-shrink: 0;
    margin: 0 8px;
    padding: 12px;
    border: 1px solid #f2f2f2;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      color: #fff;
      background-color: ${props => props.theme.color.secondaryColor};
      ${props => props.theme.mixin.boxShadow}
    }

    &.active {
      background-color: ${props => props.theme.color.secondaryColor};
      color: #fff;
    }
    }
  }
`