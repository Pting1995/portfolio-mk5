import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OverviewProjectPage from "./pages/overviewProjectPage";
import SingleProjectPage from "./pages/singleProjectPage";

import projectList from "./components/projectList.json"


function App() {
  return (
    <>
      <Router >
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'}>
            <OverviewProjectPage projectList={projectList} />
          </Route>
          <Route exact path={process.env.PUBLIC_URL + "/project/:projectName"}>
            <SingleProjectPage projectList={projectList} />
          </Route>
        </Switch>

        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;