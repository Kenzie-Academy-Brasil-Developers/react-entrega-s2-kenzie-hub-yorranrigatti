import { Container, InputContainer } from "./styles";

export const Input = ({ borderColor, register, name, label, error, ...rest }) => (
  <Container borderColor={borderColor}>
    <label>{label}</label>
    <InputContainer isErrored={!!error}>
      <input {...register(name)}{...rest} />
    </InputContainer>
    {!!error && <span>{error}</span>}
  </Container>
);
