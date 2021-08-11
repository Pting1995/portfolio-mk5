import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Project from "./pages/project";

function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path={"/project/:project"}>
            <Project />
          </Route>
        </Switch>

        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;