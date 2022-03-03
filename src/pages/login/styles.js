import styled from "styled-components";
import { ColorPrimary, Grey0, Grey1, Grey3 } from "../../styles/global";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 33.6911px 17.6477px;
    width: 296px;
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3.20867px;
    background: ${Grey3};
  }

  h2 {
    color: ${Grey0};
    font-size: 14.439px;
    line-height: 22px;
  }
  p {
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: ${Grey1};
    text-align: center;
    margin-bottom: 10px;
  }
  span {
    position: relative;
    top: -10px;
    font-size: 10px;
    color: ${ColorPrimary}
  }
`;

