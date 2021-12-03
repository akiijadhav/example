import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

//code splitting
const Users = lazy(() => import("./components/Users"));
const Profile = lazy(() => import("./components/Profile"));

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Route exact component={Users} path="/" />
            <Route component={Profile} path="/profile/:id" />
          </Suspense>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
