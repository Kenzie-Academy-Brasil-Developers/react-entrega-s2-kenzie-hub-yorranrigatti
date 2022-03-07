import styled from "styled-components";
import { Grey0, Grey1, Grey2, Grey4 } from "../../styles/global";

export const Container = styled.button`
  background: ${Grey4};
  padding: 12px;
  border-radius: 4.06066px;
  border: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transition: 0.5s;
  :hover {
    background: ${Grey2};
  }

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
`;
