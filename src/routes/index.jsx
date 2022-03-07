import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/login";
import { Signup } from "../pages/signup";

export const Routes = () => {
  const [name, setName] = useState("");
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@kenzieHub:token");

    if (token) {
      setAuth(true);
    }
  }, []);
  return (
    <Switch>
      <Route exact path="/">
        <Login name={name} setName={setName} auth={auth} setAuth={setAuth} />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/dashboard/:user">
        <Dashboard setName={setName} auth={auth} setAuth={setAuth} />
      </Route>
    </Switch>
  );
};
