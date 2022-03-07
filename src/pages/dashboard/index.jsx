import { useEffect, useState } from "react";
import { get } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { Button } from "../../components/button";
import { DeleteTech } from "../../components/deleteTech";
import { Logo } from "../../components/logo";
import { RegisterTech } from "../../components/registerTech";
import { TecnologyCard } from "../../components/tecnologyCard";
import { Grey2, Grey3 } from "../../styles/global";
import { AddTechs, Container, Nav } from "./styles";

export const Dashboard = ({ setName, auth, setAuth }) => {
  const [user] = useState(JSON.parse(localStorage.getItem("@kenzieHub:user")));

  const [displayRegister, setDisplayRegister] = useState(false);
  const [displayDelete, setDisplayDelete] = useState(false);
  const [removeTech, setRemoveTech] = useState("");

  console.log(removeTech);

  const techs = user.techs;

  useEffect(() => {
    setName(user.name);
  }, []);

  if (!auth) {
    return <Redirect to="/" />;
  }

  const logout = () => {
    localStorage.clear();
    setAuth(false);
  };

  const handleClick = (techID) => {
    setDisplayDelete(true);
    setRemoveTech(techID);
  };

  const handleAddTech = () => {
    setDisplayRegister(true);
  };

  return (
    <Container>
      <Nav>
        <Logo />
        <Button
          fontSize="12px"
          height="30px"
          padding="0 17px"
          width="auto"
          backgroundColor={Grey3}
          onHover={Grey2}
          onClick={logout}
        >
          Sair
        </Button>
      </Nav>
      <header>
        <h2>Olá, {user.name}</h2>
        <h3>{user.course_module}</h3>
      </header>
      <main>
        <AddTechs>
          <h2>Tecnologias</h2>
          <Button
            onClick={handleAddTech}
            padding="0 14px"
            height="32px"
            width="auto"
            backgroundColor={Grey3}
            onHover={Grey2}
          >
            +
          </Button>
        </AddTechs>
        <section>
          {techs.map((tech) => (
            <TecnologyCard
              key={tech.id}
              tech={tech}
              setRemoveTech={setRemoveTech}
              onClick={() => handleClick(tech.id)}
            />
          ))}
        </section>
        <RegisterTech
          display={displayRegister}
          setDisplay={setDisplayRegister}
        />
        <DeleteTech
          display={displayDelete}
          setDisplay={setDisplayDelete}
          removeTech={removeTech}
        />
      </main>
    </Container>
  );
};
