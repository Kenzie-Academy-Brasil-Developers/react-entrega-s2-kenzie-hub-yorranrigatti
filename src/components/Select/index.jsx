import { Container } from "./styles"


export const Select = ({ register, name}) => {
    return (
      <Container>
        <label>Selecionar módulo</label>
        <select {...register(name)} defaultValue={"Modulo 1"}>
          <option value="Modulo 1">Modulo 1</option>
          <option value="Modulo 2">Modulo 2</option>
          <option value="Modulo 3">Modulo 3</option>
        </select>
      </Container>
    );
}