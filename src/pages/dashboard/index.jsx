import { useHistory } from "react-router-dom";
import { Button } from "../../components/button";
import { Logo } from "../../components/logo";
import { Grey2, Grey3 } from "../../styles/global";
import { Container } from "./styles";

export const Dashboard = ({ user }) => {
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
          backgroundColor={Grey3}
          onHover={Grey2}
          onClick={() => history.push("/")}
        >
          Sair
        </Button>
      </nav>
      <header>
        <h2>Olá, {user.name}</h2>
        <h3>{user.course_module}</h3>
      </header>
      <main>
        <div>
          <h2>Tecnologias</h2>
          <Button
            padding="0 14px"
            height="32px"
            width="auto"
            backgroundColor={Grey3}
            onHover={Grey2}
          >
            +
          </Button>
        </div>
        <section>
          <div>
            <p>React JS</p>
            <span>Intermediário</span>
          </div>
          <div>
            <p>React JS</p>
            <span>Intermediário</span>
          </div>
        </section>
      </main>
    </Container>
  );
};
