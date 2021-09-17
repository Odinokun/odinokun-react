import {Redirect, Route, Switch} from "react-router-dom";
import routes from "./routes";

import Aside from "./layouts/Aside/Aside";
import MainWrap from "./layouts/MainWrap/MainWrap";
import Main from "./layouts/Main/Main";

import 'normalize.css'

function App() {
  return (
    <MainWrap>
      <Aside/>
      <Main>
        <Switch>
          {routes.map((route, index) => (
            <Route
              path = {route.path}
              exact = {route.exact}
              component={route.component}
              key={`${route.path}_${index}`}
            />
          ))}
          <Redirect to="/404"/>
        </Switch>
      </Main>
    </MainWrap>
  );
}

export default App;
