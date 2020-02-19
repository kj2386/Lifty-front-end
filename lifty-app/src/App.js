import React from 'react'
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import Workout from '../src/components/Workout'
import Home from './components/Home';
import UpperBodyWorkout from './components/UpperBodyWorkout';
import LowerBodyWorkout from './components/LowerBodyWorkout';
function App() {
    return (
      <Router>
        <header className="navbar">
          <div className="logo">
            <Link to="/home">Lifty</Link>
          </div>
        </header>
        <main>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/" component={Workout} />
          </Switch>
        </main>
      </Router>
    );
}

export default App


