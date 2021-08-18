import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllProjects from "./pages/allProjects";
import SingleProject from "./pages/singleProject";
import Header from "./components/header";

import projectList from "./components/projectList.json"


function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <AllProjects projectList={projectList} />
          </Route>
          <Route exact path={"/project/:projectName"}>
            <SingleProject projectList={projectList} />
          </Route>
        </Switch>

        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;