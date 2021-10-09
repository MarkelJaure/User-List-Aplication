import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { routes } from "./routes";
import { AuthRoute } from "./feature/Common/AuthRoute";
import { Layout } from "./feature/Common/Layout";
import { history } from "./helpers/history";
import { Provider } from "react-redux";
import { store } from "./store";

import { getAuthUserData } from "./helpers/auth";

import { initAuthInterceptor } from "./helpers/api";

const userAuth = getAuthUserData();

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Layout>
          <Switch>
            {routes.map((item, i) =>
              item.isAuth ? (
                <AuthRoute
                  path={item.path}
                  component={item.component}
                  key={i}
                  exact={item.exact}
                />
              ) : (
                <Route
                  path={item.path}
                  component={item.component}
                  key={i}
                  exact={item.exact}
                />
              )
            )}
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
