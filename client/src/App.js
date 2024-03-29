import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OverviewProjectPage from "./pages/overviewProjectPage";
import SingleProjectPage from "./pages/singleProjectPage";

import projectList from "./components/projectList.json"


function App() {
  return (
    <>
      <Router basename="/portfolio-mk5">
        <Switch>
          <Route exact path={'/'}>
            <OverviewProjectPage projectList={projectList} />
          </Route>
          <Route exact path={"/project/:projectName"}>
            <SingleProjectPage projectList={projectList} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;