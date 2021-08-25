import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navs from './Components/Navs';
import home from "./pages/home";
import starred from "./pages/starred";

function App() {
  return (
    <div>
      <Navs />
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <home />
        </Route>

        <Route exact path="/starred">
          <starred />
        </Route>

        <Route>
          This is 404 page. Page not found.
        </Route>

      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
