import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import SingleProject from "./pages/singleProject";
import projectList from "./components/projectList.json"

function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}

        <Switch>
          <Route exact path="/">
            <Home projectList={projectList} />
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