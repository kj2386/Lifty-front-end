import React from 'react'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Workout from '../src/components/Workout'
import Nav from './components/Nav';
import UpperBodyWorkout from './components/UpperBodyWorkout';
import LowerBodyWorkout from './components/LowerBodyWorkout';
function App() {
    return (
        <Router>
            <main>
                <Nav />
                <Switch>
                    <Route path="/upperbody">
                        <UpperBodyWorkout />
                    </Route>
                    <Route path="/lowerbody">
                        <LowerBodyWorkout />
                    </Route>
                    <Route path="/">
                        <Workout />
                    </Route>
                </Switch>
            </main>
        </Router>
    )
}

export default App


