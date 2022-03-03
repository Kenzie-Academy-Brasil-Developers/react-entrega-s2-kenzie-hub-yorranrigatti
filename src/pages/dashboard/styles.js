import styled from "styled-components";
import { Grey0, Grey1, Grey3, Grey4 } from "../../styles/global";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  nav {
    width: 91%;
    max-width: 770px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0 12px;
  }
  header {
    border-top: 1px solid ${Grey3};
    border-bottom: 1px solid ${Grey3};
    width: 91%;
    max-width: 770px;
    padding: 25px 12px;

    h2 {
      color: ${Grey0};
      font-size: 18px;
      line-height: 28px;
      margin: 10px 0px;
    }
    h3 {
      font-weight: normal;
      font-size: 12px;
      line-height: 22px;
      color: ${Grey1};
      margin-bottom: 10px;
    }
  }
  main {
    display: flex;
    flex-direction: column;
    width: 91%;
    max-width: 770px;
    padding: 15px 12px;
    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      h2 {
        font-weight: 600;
        font-size: 16px;
        line-height: 18px;
        color: ${Grey0};
      }
    }
    section {
      background: ${Grey3};
      padding: 22px 9px;
      width: 100%;
      border-radius: 4px;
      div {
        background: ${Grey4};
        padding: 12px;
        border-radius: 4.06066px;

        p {
          color: ${Grey0};
          font-weight: bold;
          font-size: 14.2123px;
          line-height: 24px;
        }
        span {
          font-weight: normal;
          font-size: 12.182px;
          line-height: 22px;
          color: ${Grey1};
        }
      }
      div + div {
        margin-top: 16px;
      }
    }
  }
`;
