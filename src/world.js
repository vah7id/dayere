import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hello from './components/hello';
import Dayere from './components/dayere';

function World() {
  return (
    <div className={"world"}>
      <Router>
       <Switch>
          <Route exact path="/">
            <Hello />
          </Route>
          <Route path="/:id">
            <Dayere />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default World;
