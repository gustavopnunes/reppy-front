import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
    </Switch>
  );
};

export default Routes;