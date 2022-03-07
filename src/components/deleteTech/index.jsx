import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { Container, Div } from "../registerTech/styles";
import { Input } from "../input";
import { Select } from "../Select";
import { Button } from "../button";
import {
  ColorPrimary,
  ColorPrimaryNegative,
  Grey1,
  Grey2,
} from "../../styles/global";
import { ButtonsDiv } from "./styles";

export const DeleteTech = ({ removeTech, display, setDisplay }) => {
  const [token] = useState(localStorage.getItem("@kenzieHub:token"));

  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = async (data) => {
    const response = await api.patch(`/users/techs/${removeTech}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const closePopup = () => {
    setDisplay(false);
  };

  const deleteTech = () => {
    const deleteThisTech = api.post(`/users/techs/${removeTech}`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  return (
    <Container display={display}>
      <Div>
        <nav>
          <h2>Tecnologia Detalhes</h2>
          <button onClick={closePopup}>x</button>
        </nav>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            name="title"
            register={register}
            label="Nome"
            placeholder="Nome da tecnologia"
            error={errors.title?.message}
          />
          <Select
            register={register}
            name="status"
            op1="Iniciante"
            op2="Intermediário"
            op3="Avançado"
          />
          <ButtonsDiv>
            <Button
              backgroundColor={ColorPrimaryNegative}
              onHover={ColorPrimary}
              type="submit"
              width="60%"
              padding="0"
            >
              Salvar alterações
            </Button>
            <Button
              backgroundColor={Grey1}
              onHover={Grey2}
              type="button"
              onClick={() => deleteTech}
              width="37%"
            >
              Excluir
            </Button>
          </ButtonsDiv>
        </form>
      </Div>
    </Container>
  );
};
