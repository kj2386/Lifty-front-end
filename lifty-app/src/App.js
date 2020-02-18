import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import WorkoutForm from './components/WorkoutForm'
import WorkoutFetching from "./components/DataFetching";
import ExerciseCreate from "./components/ExerciseCreate";


const App = () => (
  <div>
    <WorkoutForm/>
    <WorkoutFetching/>
    <ExerciseCreate />
  </div>
);

export default App;
