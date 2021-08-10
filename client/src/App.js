import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Router forceRefresh>
        {/* <Header /> */}

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route exact path={"/et/:subject"}>
            <ET />
          </Route> */}
        </Switch>

        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;