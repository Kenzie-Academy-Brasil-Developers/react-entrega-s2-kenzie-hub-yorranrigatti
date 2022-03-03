import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { Logo } from "../../components/logo";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import {
  Grey3,
  ColorPrimaryNegative,
  Grey2,
  ColorPrimary,
} from "../../styles/global";
import { Container } from "./styles";
import { Select } from "../../components/Select";
import axios from "axios";

export const Signup = () => {
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[aA-zZ\s]+$/, "Caracteres inválidos")
      .min(8, "Caracteres insuficientes")
      .required("Nome obrigatório"),
    email: yup.string().email("Email inválido").required("Email obrigatório"),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Senha fraca"
      )
      .required("Senha obrigatória"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Senha obrigatória"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.number("Telefone inválido").required("Telefone obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    delete data.confirm_password;
    axios
      .post("https://kenziehub.herokuapp.com/users", data)
      .then(history.push("/"));
  };
  const history = useHistory();
  return (
    <Container>
      <nav>
        <Logo />
        <Button
          fontSize="12px"
          height="30px"
          padding="0 17px"
          width="auto"
          onHover={Grey2}
          backgroundColor={Grey3}
          onClick={() => history.push("/")}
        >
          Voltar
        </Button>
      </nav>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>Crie sua conta</h2>
        <h3>Rapido e grátis, vamos nessa</h3>
        <Input
          name="name"
          register={register}
          label="Nome"
          placeholder="Digite aqui seu nome"
          error={errors.name?.message}
        />
        <Input
          name="email"
          register={register}
          label="Email"
          placeholder="Digite aqui seu email"
          error={errors.email?.message}
        />
        <Input
          name="password"
          register={register}
          label="Senha"
          placeholder="Digite aqui sua senha"
          error={errors.password?.message}
          type="password"
        />
        <Input
          name="confirm_password"
          register={register}
          label="Confirmar Senha"
          placeholder="Digite aqui sua senha"
          error={errors.confirm_password?.message}
          type="password"
        />
        <Input
          name="bio"
          register={register}
          label="Bio"
          placeholder="Digite aqui sua bio"
          error={errors.bio?.message}
        />
        <Input
          name="contact"
          register={register}
          label="Telefone"
          placeholder="Digite aqui seu número"
          error={errors.contact?.message}
        />
        <Select register={register} name="course_module" />
        <Button
          onHover={ColorPrimary}
          backgroundColor={ColorPrimaryNegative}
          type="submit"
        >
          Cadastrar
        </Button>
      </form>
    </Container>
  );
};
