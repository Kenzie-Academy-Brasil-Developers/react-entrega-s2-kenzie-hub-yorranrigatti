import { Container } from "./styles";

export const Select = ({ register, name, op1, op2, op3, width = "100%" }) => {
  return (
    <Container width={width}>
      <label>Selecionar módulo</label>
      <select {...register(name)} defaultValue={"Modulo 1"}>
        <option value={op1}>{op1}</option>
        <option value={op2}>{op2}</option>
        <option value={op3}>{op3}</option>
      </select>
    </Container>
  );
};
