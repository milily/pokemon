import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import MainView from './views/main-view';
import style from './assets/style.css'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route component={MainView} exact path="/"/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
