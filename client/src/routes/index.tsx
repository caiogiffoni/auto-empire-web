import { Route, Switch } from "react-router-dom";
import { IndProd } from "../pages/individualProduct";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/product">
        <IndProd />
      </Route>
    </Switch>
  );
};
