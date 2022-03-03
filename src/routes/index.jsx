import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/login";
import { Signup } from "../pages/signup";

export const Routes = () => {
  const [user, setUser] = useState({});
  console.log(user);
  return (
    <Switch>
      <Route exact path="/">
        <Login setUser={setUser}/>
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/dashboard/:user">
        <Dashboard user={user}/>
      </Route>
    </Switch>
  );
};
