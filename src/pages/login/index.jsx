import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Logo } from "../../components/logo";
import { Button } from "../../components/button";
import {
  ColorPrimary,
  ColorPrimaryFocus,
  Grey1,
  Grey2,
} from "../../styles/global";
import { Container } from "./styles";
import { Input } from "../../components/input";
import api from "../../services/api";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";

export const Login = ({ name, setName, auth, setAuth }) => {
  const history = useHistory();

  
  const formSchema = yup.object().shape({
    email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
    password: yup.string().required("Senha inválida"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = async (data) => {
    const response = await api.post("/sessions", data).catch((err) => {
      toast.error("Erro na autenticação, cheque suas credenciais");
    });

    const { token, user } = response.data;

    localStorage.setItem("@kenzieHub:token", token);
    localStorage.setItem("@kenzieHub:user", JSON.stringify(user));

    setName(response.data.user.name);

    toast.success("Login feito com sucesso!");

    setAuth(true);
    history.push(`/dashboard/${response.data.user.name}`);
  };

  if (auth) {
    return <Redirect to={`/dashboard/${name}`} />;
  }

  return (
    <Container>
      <header>
        <Logo />
      </header>
      <main>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            name="email"
            register={register}
            label="Email"
            placeholder="email@exemplo.com"
            error={errors.email?.message}
          />

          <Input
            borderColor={Grey2}
            name="password"
            register={register}
            label="Senha"
            placeholder="Digite sua senha"
            type="password"
            error={errors.password?.message}
          />
          <Button
            backgroundColor={ColorPrimary}
            onHover={ColorPrimaryFocus}
            type="submit"
          >
            Entrar
          </Button>
          <p>Ainda não possui uma conta?</p>
          <Button
            type="button"
            backgroundColor={Grey1}
            onHover={Grey2}
            onClick={() => history.push("/signup")}
          >
            Cadastre-se
          </Button>
        </form>
      </main>
    </Container>
  );
};
