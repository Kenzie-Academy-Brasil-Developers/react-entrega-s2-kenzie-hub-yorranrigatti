import { Container } from "./styles";

export const TecnologyCard = ({ tech, ...rest }) => {
  return (
    <Container {...rest}>
      <p>{tech.title}</p>
      <span>{tech.status}</span>
    </Container>
  );
};
