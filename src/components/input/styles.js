import styled, { css } from "styled-components";
import { ColorPrimary, Grey0, Grey1, Grey2 } from "../../styles/global";

export const Container = styled.div`
  label {
    font-size: 9.772px;
    color: ${Grey0};
    margin: 22.3336px 0px;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  padding: 0px 13.0293px;
  background: ${Grey2};
  border: 0.9772px solid ${Grey2};
  box-sizing: border-box;
  border-radius: 3.20867px;
  margin: 15px 0px;
  height: 48px;
  transition: 0.5s;

  :hover {
    border-color: ${Grey1}
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${ColorPrimary};
    `}

  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: none;
    color: ${Grey0};
    font-size: 16.2426px;
    line-height: 26px;

    :-webkit-autofill {
      transition: all 0s 50000s;
    }
    &::placeholder {
      color: ${Grey0};
    }
  }
`;
