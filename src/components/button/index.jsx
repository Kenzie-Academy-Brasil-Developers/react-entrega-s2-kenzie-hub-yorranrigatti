import { Container } from "./styles";

export const Button = ({
  fontSize = "16px",
  height = "48px",
  padding = "0px 22.3336px;",
  width = "100%",
  children,
  backgroundColor,
  onHover,
  ...rest
}) => (
  <Container
    {...rest}
    fontSize={fontSize}
    height={height}
    padding={padding}
    width={width}
    backgroundColor={backgroundColor}
    onHover={onHover}
  >
    {children}
  </Container>
);
