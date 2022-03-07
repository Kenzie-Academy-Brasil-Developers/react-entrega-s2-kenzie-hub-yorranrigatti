import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../button";
import { Input } from "../input";
import { Select } from "../Select";
import { Container, Div } from "./styles";
import api from "../../services/api";
import { ColorPrimary, ColorPrimaryFocus } from "../../styles/global";
import { useState } from "react";

export const RegisterTech = ({ display, setDisplay }) => {
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
    const response = await api.post("/users/techs", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setDisplay(false);
  };

  const closePopup = () => {
    setDisplay(false);
  };
  return (
    <Container display={display}>
      <Div>
        <nav>
          <h2>Cadastrar Tecnologia</h2>
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
          <Button
            backgroundColor={ColorPrimary}
            onHover={ColorPrimaryFocus}
            type="submit"
          >
            Cadastrar Tecnologia
          </Button>
        </form>
      </Div>
    </Container>
  );
};
