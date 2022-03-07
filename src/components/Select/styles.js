import styled from "styled-components";
import { Grey0, Grey1, Grey2 } from "../../styles/global";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.width};

  label {
    font-size: 9.772px;
    color: ${Grey0};
    margin: 14px 0px;
  }
  select {
    color: ${Grey0};
    font-size: 16.2426px;
    width: 100%;
    height: 46px;
    padding: 0px 12.9865px;
    background: ${Grey2};
    border: 0.973988px solid ${Grey2};
    box-sizing: border-box;
    border-radius: 3.19812px;
    color: ${Grey1};
    margin-bottom: 20px;
    cursor: pointer;
  }
  select:after {
    color: ${Grey1};
  }
`;
