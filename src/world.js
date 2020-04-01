import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hello from './components/hello';
import Circle from './components/circle';
import Creation from './components/creation';

function World() {
  return (
    <div className={"world"}>
      <Router>
       <Switch>
          <Route exact path="/">
            <Hello />
          </Route>
          <Route exact path="/hello-world/:circle">
            <Creation />
          </Route>
          <Route path="/:id">
            <Circle />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default World;
