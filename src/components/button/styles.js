import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => props.backgroundColor};
  color: #ffffff;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border: none;
  border-radius: 4px;
  padding: ${(props) => props.padding};
  transition: 0.3s;
  margin: 0 0 15px 0px;
  font-weight: 500;
  font-size: ${props => props.fontSize};

  :hover {
    background: ${(props) => props.onHover};
  }
`;
