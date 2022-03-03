import styled from "styled-components";
import { ColorPrimary, Grey0, Grey1, Grey3 } from "../../styles/global";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  nav {
    width: 300px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 33.5803px 17.5897px;
    width: 295.83px;
    background: ${Grey3};
    box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
    border-radius: 3.19812px;
    span {
      position: relative;
      top: -10px;
      font-size: 10px;
      color: ${ColorPrimary};
    }
    h2 {
      color: ${Grey0};
      font-size: 14.3916px;
      line-height: 22px;
      margin: 17.5897px 0px;
    }
    h3 {
      color: ${Grey1};
      font-weight: 400;
      font-size: 9.59437px;
      line-height: 18px;
      margin: 0 0 17.5897px 0;
    }
  }
`;
