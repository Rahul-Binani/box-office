import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          This is home page
        </Route>

        <Route exact path="/star">
          This is starred page
        </Route>

        <Route>
          This is 404 page. Page not found.
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
