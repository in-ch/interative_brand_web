import styled from "styled-components";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router,Switch, Route, Redirect } from "react-router-dom";
import routes from "./routes";
import Main from "./screens/Main";
import Man from "./screens/Man";
import { GlobalStyles } from "./styles";

const App = () => {
  return (
    <>
      <HelmetProvider>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route path={routes.home} exact>
                <Main />
            </Route>
            <Route path={routes.man} exact>
                <Man />
            </Route>
          </Switch>
        </Router>
      </HelmetProvider>
    </>
  );
}

export default App;
