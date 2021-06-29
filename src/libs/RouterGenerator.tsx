import { UserContext } from 'contexts/UserContext';
import React, { useEffect } from 'react';
import { load } from 'react-cookies';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { history } from './history';

interface RouteObject {
  path: string;
  exact: boolean;
  component: React.FC;
}

interface Routes {
  allRoutes: RouteObject[];
  defaultRoute: RouteObject;
}

interface Props {
  routes: Routes;
}

export const RouterGenerator: React.FC<Props> = ({
  routes,
}): React.ReactElement => {
  const { setIsUserLogged } = React.useContext(UserContext);

  useEffect(() => {
    if (load('token')) setIsUserLogged(true);
    else setIsUserLogged(false);
  }, []);

  return (
    <Router history={history}>
      <Switch>
        {routes.allRoutes.map((route: RouteObject) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}

        <Route path="/" exact={true}>
          <Redirect
            to={routes.defaultRoute.path}
            exact={routes.defaultRoute.exact}
          />
        </Route>
      </Switch>
    </Router>
  );
};
