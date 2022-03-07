import styled, { css } from "styled-components";
import { ColorPrimary, Grey0, Grey1, Grey2, Grey3, Grey4 } from "../../styles/global";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  width: 300px;

  span {
    position: relative;
    top: -10px;
    font-size: 10px;
    color: ${ColorPrimary};
  }
  nav {
    padding: 12px 20px;
    background: ${Grey2};
    display: flex;
    justify-content: space-between;
    h2 {
      font-weight: bold;
      font-size: 14px;
      line-height: 24px;
      color: ${Grey0};
    }
    button {
      background: transparent;
      border: none;
      color: ${Grey0};
      position: relative;
      top: -5px;
    }
  }
`;

export const Container = styled.aside`
  display: none;
  width: 78%;
  height: 100%;
  justify-content: center;
  position: absolute;
  background: ${Grey4};

  ${(props) =>
    props.display === true &&
    css`
      display: flex;
    `}
`;
